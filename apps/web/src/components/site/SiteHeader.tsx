"use client";

import { MAIN_NAV } from "@/lib/site/nav";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90">
      <Navbar fluid rounded className="max-w-6xl mx-auto">
        <NavbarBrand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Sedaiia
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {MAIN_NAV.map((item) => (
            <NavbarLink
              key={item.href}
              active={pathname === item.href}
              as={Link}
              href={item.href}
            >
              {item.label}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
