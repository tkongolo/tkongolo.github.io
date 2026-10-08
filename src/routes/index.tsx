import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLayout } from "../components/layouts/section.layout.tsx";
import { AboutLinkButtons } from "../data/buttons.ts";
import { AboutImageInfoArray } from "../data/image-info.ts";
import type { ImageInfoModel } from "../models/models.ts";

export function HomeRoute() {
  const { t } = useTranslation();
  const [aboutImages, setAboutImages] = useState<ImageInfoModel[]>([]);
  const sectionContents = t('home.sections', { returnObjects: true }) as any[];

  useEffect(() => {
    AboutImageInfoArray()
      .then(setAboutImages)
      .catch((error) => console.error('[home] Unable to load private images:', error));
  }, []);

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
          images={aboutImages} />
      <SectionLayout 
        provider="skills" 
        sectionContent={getSectionContent("skills")} />

      <SectionLayout 
        provider="experience" 
        sectionContent={getSectionContent("experience")} />
      <SectionLayout
        provider="foundation"
        sectionContent={getSectionContent("foundation")} />
      <SectionLayout
        provider="contact"
        sectionContent={getSectionContent("contact")} />
      {/* <HeroSection t={t} />
      <SkillsSection t={t} />
      <ExperienceSection t={t} />
      <EducationSection t={t} />
      <ContactSection t={t} /> */}
    </div>
  )
}
