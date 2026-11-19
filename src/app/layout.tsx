import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeyPlay Banner Report",
  description: "Banner performance overview report",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-slate-50 text-slate-800 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
