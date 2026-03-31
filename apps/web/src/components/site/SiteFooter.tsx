import { MAIN_NAV } from "@/lib/site/nav";
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle
} from "flowbite-react";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <Footer container className="mt-auto border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <FooterTitle title="Sedaiia" />
            <p className="mt-3 max-w-md text-sm text-gray-600 dark:text-gray-400">
              One-man agency: design, UX en webdevelopment voor esthetische klinieken en creative
              studios.
            </p>
          </div>
          <div>
            <FooterTitle title="Navigatie" />
            <FooterLinkGroup col>
              {MAIN_NAV.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Contact" />
            <FooterLinkGroup col>
              <FooterLink href="/contact">Neem contact op</FooterLink>
              <FooterLink href="mailto:hallo@sedaiia.com">hallo@sedaiia.com</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright by="Sedaiia" href="/" year={currentYear} />
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 sm:mt-0">
            Gebouwd met Next.js &amp; Flowbite
          </p>
        </div>
      </div>
    </Footer>
  );
}
