import { SiteShell } from "@/components/site/SiteShell";
import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeInit } from "../../.flowbite-react/init";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

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
      <body
        className={`${inter.variable} ${dmSerif.variable} bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-white`}
      >
        <ThemeInit />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
