import "./globals.css";
import LayoutWrapper from "../component/LayoutWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "My Website",
  description: "Finance Consulting Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
