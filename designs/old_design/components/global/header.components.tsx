import { useEffect, useState } from "react";
import { HeaderProps } from "../../models/header.models.ts";

function navLinkClassName(isActive: boolean) {
  return [
    "font-headline tracking-widest uppercase text-xs transition-all duration-300 px-2 py-1 rounded",
    isActive
      ? "text-[#00daf3] font-bold border-b-2 border-[#00daf3] pb-1"
      : "text-slate-400 font-medium hover:text-[#00daf3] hover:bg-slate-800/50",
  ].join(" ");
}

export function Header({ brand, navItems, ctaHref, ctaLabel }: HeaderProps) {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "");

  useEffect(() => {
    const updateActiveHref = () => {
      let currentHref = navItems[0]?.href ?? "";

      for (const item of navItems) {
        const sectionId = item.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        if (window.scrollY >= section.offsetTop - 150) {
          currentHref = item.href;
        }
      }

      setActiveHref(currentHref);
    };

    updateActiveHref();
    window.addEventListener("scroll", updateActiveHref);

    return () => {
      window.removeEventListener("scroll", updateActiveHref);
    };
  }, [navItems]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#191c22]/70 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,218,243,0.08)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-[1440px] mx-auto gap-4">
        <div className="text-lg font-bold tracking-tighter text-slate-100 font-headline">
          {brand}
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={navLinkClassName(item.href === activeHref)}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold px-4 md:px-6 py-2 rounded-xl active:scale-[0.97] transition-transform duration-200 font-headline text-xs md:text-sm uppercase tracking-wider whitespace-nowrap"
          href={ctaHref}
        >
          {ctaLabel}
        </a>
      </div>
    </nav>
  );
}
