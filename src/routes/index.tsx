import { useTranslation } from 'react-i18next';
import { SectionLayout } from "../components/layouts/section.layout.tsx";
import { AboutLinkButtons } from "../data/buttons.ts";
import { AboutImageInfoArray } from "../data/image-info.ts";

export function HomeRoute() {
  const { t } = useTranslation();
  const sectionContents = t('home.sections', { returnObjects: true }) as any[];

  const getSectionContent = (sectionName: string) => {
    const sectionContent = sectionContents.find(section => section['name'] === sectionName);
    return sectionContent ? sectionContent.content : null;
  }


  return (
    <div>
      <SectionLayout 
          provider="about" 
          sectionContent={getSectionContent("about")} 
          linkButtons={AboutLinkButtons({ t })} 
          images={AboutImageInfoArray} />
      <SectionLayout 
        provider="skills" 
        sectionContent={getSectionContent("skills")} />

      {/* <SectionLayout 
        provider="skills" 
        sectionContent={getSectionContent("experience")} /> */}
      {/* <HeroSection t={t} />
      <SkillsSection t={t} />
      <ExperienceSection t={t} />
      <EducationSection t={t} />
      <ContactSection t={t} /> */}
    </div>
  )
}
