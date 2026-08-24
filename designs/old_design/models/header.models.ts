export interface HeaderNavItem {
  href: string;
  label: string;
}

export interface HeaderProps {
  brand: string;
  navItems: HeaderNavItem[];
  ctaHref: string;
  ctaLabel: string;
}