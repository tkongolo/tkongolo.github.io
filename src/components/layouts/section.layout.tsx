import { useTranslation } from "react-i18next";
import AboutSection from "../sections/hero.section.tsx";
//import SkillSection from "../sections/skills.section.tsx";
//import ExperienceSection from "../sections/experience.section.tsx";

export function SectionLayout({ provider,sectionContent,
    linkButtons,images }: 
    { provider: string, sectionContent?: any, 
        linkButtons?: any[], images?: any[] }) {

    const { t } = useTranslation();
    const navs = t('app.header.navs', { returnObjects: true }) as any[];

    const section = () => {
        const navItem = navs.find(item => item['name'] === provider);
        if (navItem) {
            const updatedId = navItem['link'].replace("#", "");
            return updatedId;
        }
        return '';
    }

    const renderSectionContent = () => {
        switch (provider) {
            case 'about':
                return <AboutSection section={sectionContent} linkButtonInfo={linkButtons} imageInfo={images} />;
            // case 'skills':
            //     return <SkillSection section={sectionContent} />
            // case 'experience':
            //     return <ExperienceSection section={sectionContent} />    
            
            default:
                return null;
        }
    }

    return (
        <section id={section()}>
            {renderSectionContent()}
        </section>
    )
}