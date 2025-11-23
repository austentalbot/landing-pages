import Script from "next/script";

export default function EstateBeaconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Ads configuration (gtag.js loaded globally in root layout) */}
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          gtag('config', 'AW-17752314150');
        `}
      </Script>
      {children}
    </>
  );
}
