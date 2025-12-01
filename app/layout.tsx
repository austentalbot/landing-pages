import "./globals.css";
import AnalyticsScripts from "./AnalyticsScripts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
