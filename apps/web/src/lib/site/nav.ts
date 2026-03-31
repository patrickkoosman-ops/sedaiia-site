export type NavItem = {
  href: string;
  label: string;
};

export const MAIN_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" }
];
