import "./globals.css";
import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Umami Analytics - Production only */}
        {process.env.APP_ENV === 'production' && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="6eb4f9b3-a2a2-49ef-b5aa-e65ab995190f"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
