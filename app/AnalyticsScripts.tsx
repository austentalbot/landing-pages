"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { canSendAnalyticsEvents } from "./aperture-iq/lib/analytics";

export default function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(canSendAnalyticsEvents());
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="6eb4f9b3-a2a2-49ef-b5aa-e65ab995190f"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-68MJ9D991T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-68MJ9D991T');
        `}
      </Script>
    </>
  );
}
