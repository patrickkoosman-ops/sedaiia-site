import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeInit } from "../../.flowbite-react/init";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sedaiia",
  description: "Designer & builder — websites voor esthetische en creative studios."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <ThemeModeScript defaultMode="light" />
      </head>
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-white">
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
