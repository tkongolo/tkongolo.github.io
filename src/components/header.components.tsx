import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet.tsx";

function navLinkClassName(isActive: boolean) {
  return [
    "tracking-widest uppercase text-xs transition-all duration-300 px-2 py-1 rounded",
    isActive
      ? "text-[#00daf3] font-bold border-b-2 border-[#00daf3] pb-1"
      : "text-[#c4c6cc] font-medium hover:text-[#00daf3] hover:bg-slate-800/50",
  ].join(" ");
}



export default function Header(
    {brand,navs,ctaLabel,ctaHref,activeHref,isErrorPage}: 
    { 
        brand: string,navs: any[],ctaLabel: string, ctaHref: string, activeHref: string, 
        isErrorPage: boolean 
    }){
    return (
        <header className="fixed top-0 w-full z-50 bg-[#191c22]/70 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,218,243,0.08)]">
            <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-[1440px] mx-auto gap-4">
                <div className="text-lg font-bold tracking-tighter text-[#e1e2eb]">
                    {brand}
                </div>
                {
                    isErrorPage ? null : (
                        <>
                            <div className="hidden md:flex items-center gap-8">
                                {
                                    navs.map((item) => (
                                        <a
                                        key={item['link']}
                                        className={navLinkClassName(item['link'] === activeHref)}
                                        href={item['link']}
                                        >
                                            {item['title']}
                                        </a>
                        ))}
                            </div>
                            <Button
                                asChild 
                                className="hidden md:inline-flex bg-gradient-to-br from-[#00daf3] to-[#00b8d4] text-[#0a0f16] font-bold px-4 md:px-6 py-2 rounded-xl active:scale-[0.97] transition-transform duration-200 text-xs md:text-sm uppercase tracking-wider whitespace-nowrap h-auto"
                            >
                                <a href={ctaHref}>{ctaLabel}</a>
                            </Button>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="md:hidden">
                                        <MenuIcon />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-64">
                                    <SheetHeader>
                                        <SheetTitle>{brand}</SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-4 mt-6">
                                        {
                                            navs.map((item) => (
                                                <a
                                                    key={item['link']}
                                                    className={navLinkClassName(item['link'] === activeHref)}
                                                    href={item['link']}
                                                >
                                                    {item['title']}
                                                </a>
                                            ))
                                        }

                                        <Button
                                            asChild
                                            className="mt-4 bg-gradient-to-br from-[#00daf3] to-[#00b8d4] text-[#0a0f16] font-bold text-xs uppercase tracking-wider h-auto"
                                        >
                                            <a href={ctaHref}>{ctaLabel}</a>
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </>
                    )
                }
            </div>
        </header>
    )
}