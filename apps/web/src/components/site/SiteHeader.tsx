"use client";

import { MAIN_NAV } from "@/lib/site/nav";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const navLinks = MAIN_NAV.filter((item) => item.href !== "/contact");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-white/90 backdrop-blur-md">
      <Navbar fluid rounded={false} className="mx-auto max-w-7xl px-4 py-3">
        <NavbarBrand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-base font-bold tracking-tight text-neutral-900">
            Sedaiia®
          </span>
        </NavbarBrand>
        <div className="flex items-center gap-3 md:order-2">
          <Link
            className="hidden rounded-full border border-neutral-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-900 hover:bg-neutral-50 sm:inline-flex"
            href="/contact"
          >
            Contact
          </Link>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          {navLinks.map((item) => (
            <NavbarLink
              key={item.href}
              active={pathname === item.href}
              as={Link}
              href={item.href}
              className="text-[14px] font-medium text-neutral-800"
            >
              {item.label}
            </NavbarLink>
          ))}
          <NavbarLink
            active={pathname === "/contact"}
            as={Link}
            className="text-[14px] font-medium text-neutral-800 md:!hidden"
            href="/contact"
          >
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
