import { ButtonLike } from "~/components/global/other-views.components.tsx";
import {
  EducationSection,
  ExperienceSection,
  SkillsSection,
} from "~/components/routes/home/sections.components.tsx";
import { Accent } from "../../../models/other-views.models.ts";
import { ContactSectionProps, HeroAction, HeroSectionProps, HomePageProps } from "../../../models/routes/home/home.models.ts";

function ActionLink({ action }: { action: HeroAction }) {
  const className = action.variant === "primary"
    ? "bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold px-8 py-4 rounded-xl shadow-[0_0_40px_rgba(0,218,243,0.2)] hover:shadow-[0_0_60px_rgba(0,218,243,0.3)] transition-all"
    : "bg-surface-container-highest text-primary font-bold px-8 py-4 rounded-xl hover:bg-surface-bright transition-colors";

  return (
    <ButtonLike className={className} href={action.href}>
      {action.label}
    </ButtonLike>
  );
}

function Highlight({ accent, children }: { accent: Accent; children: string }) {
  return <span className={accent === "primary" ? "text-primary" : "text-tertiary"}>{children}</span>;
}

export function HeroSection({
  actions,
  description,
  experienceBadge,
  heading,
  portraitAlt,
  portraitSrc,
  sectionId,
  status,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden circuit-bg"
      id={sectionId}
    >
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-[999px]">
      </div>
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-[999px] bg-surface-container-high border-l-2 border-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-[999px] bg-primary opacity-75">
              </span>
              <span className="relative inline-flex rounded-[999px] h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-headline tracking-[0.2em] text-on-surface-variant uppercase">
              {status}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-tight tracking-tighter">
            {heading.lineOneLead} <Highlight accent="primary">{heading.lineOneAccent}</Highlight>
            <br />
            {heading.lineTwoLead} <Highlight accent="tertiary">{heading.lineTwoAccent}</Highlight>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            {actions.map((action) => <ActionLink key={action.label} action={action} />)}
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-square rounded-[999px] overflow-hidden border-8 border-surface-container shadow-2xl relative z-10">
            <img
              alt={portraitAlt}
              className="w-full h-full object-cover grayscale contrast-125"
              src={portraitSrc}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-high p-6 rounded-xl border-l-4 border-tertiary z-20 shadow-xl">
            <div className="text-3xl font-headline font-black text-tertiary">
              {experienceBadge.value}
            </div>
            <div className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
              {experienceBadge.label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({
  ctaHref,
  ctaIcon,
  ctaLabel,
  description,
  responseTime,
  sectionId,
  titleAccent,
  titlePrefix,
  titleSuffix,
}: ContactSectionProps) {
  return (
    <section className="py-32 bg-surface scroll-mt-20" id={sectionId}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-gradient-to-r from-surface-container to-surface-container-high rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 circuit-bg opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 tracking-tighter">
              {titlePrefix} <span className="text-primary italic">{titleAccent}</span>
              {" "}
              {titleSuffix}
            </h2>
            <p className="text-on-surface-variant font-body text-lg mb-12">
              {description}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                className="w-full md:w-auto bg-primary text-on-primary font-bold px-10 py-5 rounded-xl text-lg hover:shadow-[0_0_50px_rgba(0,218,243,0.3)] transition-all flex items-center justify-center gap-3"
                href={ctaHref}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings:
                      "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                  }}
                >
                  {ctaIcon}
                </span>
                {ctaLabel}
              </a>
              <div className="text-on-surface-variant font-headline text-xs tracking-widest uppercase">
                {responseTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({
  contact,
  education,
  experience,
  hero,
  skills,
}: HomePageProps) {
  return (
    <main>
      <HeroSection {...hero} />
      <SkillsSection {...skills} />
      <ExperienceSection {...experience} />
      <EducationSection {...education} />
      <ContactSection {...contact} />
    </main>
  );
}
