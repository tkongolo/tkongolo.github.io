import { FooterProps } from "../../models/footer.models.ts";

export function Footer({ brand, copyright, links }: FooterProps) {
  return (
    <div className="bg-[#191c22] border-t border-slate-800/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto py-12">
        <div className="mb-8 md:mb-0">
          <div className="text-sm font-semibold text-slate-200 font-headline tracking-widest uppercase mb-2">
            {brand}
          </div>
          <div className="font-headline text-[10px] tracking-[0.2em] uppercase text-slate-500">
            {copyright}
          </div>
        </div>
        <div className="flex gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              className="font-headline text-[10px] tracking-[0.2em] uppercase text-slate-500 hover:text-[#ffba38] transition-colors duration-200 opacity-80 hover:opacity-100"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
