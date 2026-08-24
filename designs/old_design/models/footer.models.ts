export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterProps {
  brand: string;
  copyright: string;
  links: FooterLink[];
}