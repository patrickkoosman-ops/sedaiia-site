import { SiteShell } from "@/components/site/SiteShell";
import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeInit } from "../../.flowbite-react/init";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sedaiia.com"),
  title: {
    default: "Sedaiia — Design & webdevelopment",
    template: "%s — Sedaiia"
  },
  description:
    "One-man agency: design, UX en maatwerkwebsites voor esthetische klinieken en creative studios in Nederland.",
  openGraph: {
    locale: "nl_NL",
    siteName: "Sedaiia",
    type: "website"
  }
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
