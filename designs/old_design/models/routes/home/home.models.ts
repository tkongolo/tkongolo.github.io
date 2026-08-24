import { Accent } from "../../other-views.models.ts";

export interface SkillTab {
  description: string;
  id: string;
  label: string;
  tags: string[];
}

export interface SkillCardItem {
  description?: string;
  title: string;
}

export interface SkillGroup {
  items: Array<string | SkillCardItem>;
  label: string;
  variant?: "cards" | "chips" | "solid-chips";
}

export interface BaseSkillModule {
  accent: Accent;
  icon: string;
  moduleLabel: string;
  title: string;
}

export interface TabbedSkillModule extends BaseSkillModule {
  kind: "tabbed";
  preferredEnvironmentLabel: string;
  preferredEnvironmentValue: string;
  tabs: SkillTab[];
}

export interface GroupedSkillModule extends BaseSkillModule {
  description: string;
  groups: SkillGroup[];
  kind: "grouped";
}

export type SkillModule = GroupedSkillModule | TabbedSkillModule;

export interface SkillsSectionProps {
  description?: string;
  modules: SkillModule[];
  sectionId: string;
  title: string;
  titleEyebrow: string;
}

export interface ExperienceItem {
  badge?: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
}

export interface ExperienceSectionProps {
  sectionId: string;
  title: string;
  titleEyebrow: string;
  totalUptime: string;
  items: ExperienceItem[];
}

export interface EducationMetric {
  accent?: Accent;
  label: string;
  value: string;
}

export interface EducationSectionProps {
  cardHeading: string;
  cardIcon: string;
  cardPeriod: string;
  cardSubtitle: string;
  cardTitle: string;
  metrics: EducationMetric[];
  narrativeEyebrow: string;
  narrativeText: string;
  narrativeTitle: string;
  specializationLabel: string;
  specializationText: string;
}


export interface HeroAction {
  href?: string;
  label: string;
  variant: "primary" | "secondary";
}

export interface HeroHeading {
  lineOneAccent: string;
  lineOneLead: string;
  lineTwoAccent: string;
  lineTwoLead: string;
}

export interface HeroExperienceBadge {
  label: string;
  value: string;
}

export interface HeroSectionProps {
  actions: HeroAction[];
  description: string;
  experienceBadge: HeroExperienceBadge;
  heading: HeroHeading;
  portraitAlt: string;
  portraitSrc: string;
  sectionId: string;
  status: string;
}

export interface ContactSectionProps {
  ctaHref: string;
  ctaIcon: string;
  ctaLabel: string;
  description: string;
  responseTime: string;
  sectionId: string;
  titleAccent: string;
  titlePrefix: string;
  titleSuffix: string;
}

export interface HomePageProps {
  contact: ContactSectionProps;
  education: EducationSectionProps;
  experience: ExperienceSectionProps;
  hero: HeroSectionProps;
  skills: SkillsSectionProps;
}