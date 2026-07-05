import { Button } from "../ui/button";

export function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden circuit-bg"
      id="01_ABOUT"
    >
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-[#00daf3]/5 blur-[120px] rounded-[999px]" />
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-[999px] bg-[#272a31] border-l-2 border-[#00daf3]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-[999px] bg-[#00daf3] opacity-75" />
              <span className="relative inline-flex rounded-[999px] h-2 w-2 bg-[#00daf3]" />
            </span>
            <span className="text-xs tracking-[0.2em] text-[#c4c6cc] uppercase">
              {t('hero.status')}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter">
            {t('hero.headingLineOneLead')}{" "}
            <span className="text-[#00daf3]">{t('hero.headingLineOneAccent')}</span>
            <br />
            {t('hero.headingLineTwoLead')}{" "}
            <span className="text-[#ffba38]">{t('hero.headingLineTwoAccent')}</span>
          </h1>

          <p className="text-xl text-[#c4c6cc] max-w-xl leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              className="bg-gradient-to-br from-[#00daf3] to-[#0090a1] text-[#00363d] font-bold px-8 py-4 rounded-xl shadow-[0_0_40px_rgba(0,218,243,0.2)] hover:shadow-[0_0_60px_rgba(0,218,243,0.3)] transition-all h-auto"
            >
              <a href="#03_EXPERIENCE">{t('hero.viewProjects')}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-[#32353c] text-[#00daf3] border-0 font-bold px-8 py-4 rounded-xl hover:bg-[#363940] transition-colors h-auto"
            >
              <a href="#">{t('hero.downloadCV')}</a>
            </Button>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="aspect-square rounded-[999px] overflow-hidden border-8 border-[#1d2026] shadow-2xl relative z-10">
            <img
              alt={t('hero.portraitAlt')}
              className="w-full h-full object-cover grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVvhscwiCXSwiLv_aAjQT1JFTEOuKcNwd1suhzJK0ys6c0LK6F1rywRRvy3L1aFC6YzIja5f6-3Zkjc1tL-hRh7DxnjZlDYPEmH3nNWmtRdYM1vPKlvv11HXGUG5OGNvT0KDeBWDmIEYIzmYNfGZ6tDqhkvNAz4dOiH7u_NZE56grleeEP33bp8pcg4lZAcn3jWImYw8lNwxbB3b41FmqvW8YF67eb7BOUuYg8bOR0UYbuao589OaZqYpnzsoWz9Y8Zm8HpVUtzw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#272a31] p-6 rounded-xl border-l-4 border-[#ffba38] z-20 shadow-xl">
            <div className="text-3xl font-black text-[#ffba38]">
              {t('hero.yearsValue')}
            </div>
            <div className="text-xs uppercase tracking-widest text-[#c4c6cc]">
              {t('hero.yearsLabel')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
