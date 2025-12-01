type AnalyticsPayload = Record<string, any>;

interface AnalyticsOptions {
  category?: string;
  label?: string;
  value?: number;
  payload?: AnalyticsPayload;
  gaEventName?: string;
}

const DEFAULT_CATEGORY = "interaction";

const isProd = process.env.NODE_ENV === "production";

const logWarning = (message: string, error: unknown) => {
  if (!isProd) {
    console.warn(`[analytics] ${message}`, error);
  }
};

const emitGaPageView = (path: string) => {
  try {
    const gtag = (window as any)?.gtag;
    if (typeof gtag === "function") {
      gtag("event", "page_view", {
        page_path: path,
      });
    }
  } catch (error) {
    logWarning("Failed to emit GA page view", error);
  }
};

export function trackAnalyticsEvent(
  eventName: string,
  options: AnalyticsOptions = {}
) {
  if (typeof window === "undefined") return;

  const { category, label, value, payload, gaEventName } = options;
  const sanitizedPayload = { ...(payload || {}) };

  const umamiData: Record<string, any> = {
    ...sanitizedPayload,
  };

  if (label) {
    umamiData.label = label;
  }

  if (typeof value === "number") {
    umamiData.value = value;
  }

  try {
    const umami = (window as any)?.umami;
    if (umami?.track) {
      umami.track(eventName, umamiData);
    }
  } catch (error) {
    logWarning("Failed to emit Umami event", error);
  }

  try {
    const gtag = (window as any)?.gtag;
    if (typeof gtag === "function") {
      const gaPayload: Record<string, any> = {
        event_category: category ?? DEFAULT_CATEGORY,
        event_label: label,
        value,
        ...sanitizedPayload,
      };

      Object.keys(gaPayload).forEach((key) => {
        if (gaPayload[key] === undefined) {
          delete gaPayload[key];
        }
      });

      gtag("event", gaEventName ?? eventName, gaPayload);
    }
  } catch (error) {
    logWarning("Failed to emit GA event", error);
  }
}

interface VirtualPageOptions extends AnalyticsOptions {
  replace?: boolean;
  eventName?: string;
}

export function pushVirtualPage(path: string, options?: VirtualPageOptions) {
  if (typeof window === "undefined" || !path) return;

  try {
    if (options?.replace) {
      window.history.replaceState({}, "", path);
    } else {
      window.history.pushState({}, "", path);
    }
  } catch (error) {
    logWarning("Failed to manipulate history state", error);
  }

  emitGaPageView(path);

  const { replace: _replace, eventName, ...rest } = options ?? {};

  trackAnalyticsEvent(eventName ?? "Virtual Page View", {
    ...rest,
    category: rest.category ?? "virtual_page",
    payload: {
      path,
      ...(rest.payload ?? {}),
    },
  });
}
