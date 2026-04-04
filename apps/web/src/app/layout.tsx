import { SiteShell } from "@/components/site/SiteShell";
import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Gloock, Work_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeInit } from "../../.flowbite-react/init";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sedaiia.com"),
  title: {
    default: "Sedaiia — Boutique webdesign studio",
    template: "%s — Sedaiia"
  },
  description:
    "Boutique webdesign studio voor de esthetische en creatieve industrie — high-end, persoonlijk en art directed.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${workSans.variable} ${gloock.variable} bg-white antialiased`}>
        <ThemeInit />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
