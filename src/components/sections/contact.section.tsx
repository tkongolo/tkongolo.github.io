import { Send } from 'lucide-react'
import { Button } from "../ui/button";

export function ContactSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-32 bg-[#10131a] scroll-mt-20" id="04_CONTACT">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-gradient-to-r from-[#1d2026] to-[#272a31] rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 circuit-bg opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              {t('contact.titlePrefix')}{" "}
              <span className="text-[#00daf3] italic">{t('contact.titleAccent')}</span>{" "}
              {t('contact.titleSuffix')}
            </h2>
            <p className="text-[#c4c6cc] text-lg mb-12">
              {t('contact.description')}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                className="w-full md:w-auto bg-[#00daf3] text-[#00363d] font-bold px-10 py-5 rounded-xl text-lg hover:shadow-[0_0_50px_rgba(0,218,243,0.3)] transition-all h-auto"
              >
                <a href="mailto:hello@thomaskongolo.dev" className="flex items-center gap-3">
                  <Send className="size-5" />
                  {t('contact.ctaLabel')}
                </a>
              </Button>
              <div className="text-[#c4c6cc] text-xs tracking-widest uppercase">
                {t('contact.responseTime')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
