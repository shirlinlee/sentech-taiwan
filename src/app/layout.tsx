import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "SENTECH Korea 台灣",
    template: "%s | SENTECH Korea 台灣",
  },
  description: "SENTECH Korea 台灣總代理官方網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
