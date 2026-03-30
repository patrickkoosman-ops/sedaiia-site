import type { Metadata } from "next";
import type { ReactNode } from "react";
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
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
