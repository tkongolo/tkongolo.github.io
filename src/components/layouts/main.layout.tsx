import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "../header.components.tsx";
import Footer from "../footer.components.tsx";

export default function MainLayout(){
    const { t } = useTranslation();
    const brand = t('app.header.brand_title') as string;
    const navItems = t('app.header.navs', { returnObjects: true }) as any[];
    const ctaLabel = t('app.buttons.header_contact') as string;
    const ctaHref = navItems.find(item => item['title'] === '05_CONTACT')?.['link'] ?? "";
    const socials = t('app.footer.social_media', { returnObjects: true }) as any[];

    const [activeHref, setActiveHref] = useState(navItems[0]['link'] ?? "");
    const [errorPage, setErrorPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const updateActiveHref = () => {
          let currentHref = navItems[0]['link'] ?? ""
    
          for (const item of navItems) {
            const sectionId = item.href.replace("#", "")
            const section = document.getElementById(sectionId)
    
            if (!section) continue
    
            if (window.scrollY >= section.offsetTop - 150) {
              currentHref = item.href
            }
          }
    
          setActiveHref(currentHref)
        }
    
        updateActiveHref()
        window.addEventListener("scroll", updateActiveHref)
    
        return () => {
          window.removeEventListener("scroll", updateActiveHref)
        }
      }, [navItems]);

    useEffect(() => {
        setErrorPage(location.pathname === "/404" || location.pathname === "/500");
    }, [location.pathname]);

    return (
        <main className="bg-surface text-on-surface">
            <Header brand={brand} navs={navItems} ctaLabel={ctaLabel} ctaHref={ctaHref} 
                activeHref={activeHref} isErrorPage={errorPage} />
            <Outlet />
            <Footer brand={brand} social_links={socials} />
        </main>
    )
}
