import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "SENTECH 台灣",
    template: "%s | SENTECH 台灣",
  },
  description: "SENTECH 台灣總代理官方網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
