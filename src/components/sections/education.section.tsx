import type { FoundationBackground, FoundationContent, FoundationEducation, SectionProps } from "../../models/models.ts";
import { GraduationCap } from 'lucide-react'
import { SectionIntro, MetricTile } from './shared'

export default function EducationSection({
  section,
  linkButtonInfo = [],
  imageInfo = [],
}: SectionProps) {
  const content = (section || null) as FoundationContent | null;
  void linkButtonInfo;
  void imageInfo;

  const education = content?.cards.find((card) => card.name === "education")
    ?.content as FoundationEducation | undefined;
  const background = content?.cards.find((card) => card.name === "background")
    ?.content as FoundationBackground | undefined;

  return (
    <div className="py-32 bg-[#0b0e14] scroll-mt-20">
      {content && education && background && (
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-[#272a31] p-12 rounded-xl border-l-4 border-[#00daf3]">
                <GraduationCap className="text-[#00daf3] size-9 mb-6" />
                <h4 className="text-3xl font-bold mb-4">{education.title}</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-[#00daf3] font-bold">{education.education_range}</p>
                    <p className="text-xl font-bold">{education.degree}</p>
                    <p className="text-[#c4c6cc] mt-1">{education.university}</p>
                  </div>
                  <div className="bg-[#10131a] p-4 rounded-xl border border-[#44474c]/10">
                    <p className="text-xs tracking-widest uppercase text-[#ffba38] mb-2">
                      SPECIALIZATIONS
                    </p>
                    <p className="text-sm leading-relaxed">
                      {education.specializations.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionIntro
                eyebrow={background.title_top}
                title={background.title_bottom}
              />
              <p className="text-[#c4c6cc] leading-relaxed mb-8 mt-6">
                {background.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {background.info_array.map((info, index) => (
                  <MetricTile
                    key={info.info_title}
                    accent={index % 2 === 0 ? "primary" : "tertiary"}
                    label={info.info_title}
                    value={info.info_value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// export function EducationSection({ t }: { t: (key: string) => string }) {
//   return (
//     <section className="py-32 bg-[#0b0e14]">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="relative">
//             <div className="bg-[#272a31] p-12 rounded-xl border-l-4 border-[#00daf3]">
//               <GraduationCap className="text-[#00daf3] size-9 mb-6" />
//               <h4 className="text-3xl font-bold mb-4">{t('education.cardHeading')}</h4>
//               <div className="space-y-6">
//                 <div>
//                   <p className="text-[#00daf3] font-bold">{t('education.cardPeriod')}</p>
//                   <p className="text-xl font-bold">{t('education.cardTitle')}</p>
//                   <p className="text-[#c4c6cc] mt-1">{t('education.cardSubtitle')}</p>
//                 </div>
//                 <div className="bg-[#10131a] p-4 rounded-xl border border-[#44474c]/10">
//                   <p className="text-xs tracking-widest uppercase text-[#ffba38] mb-2">
//                     {t('education.specializationLabel')}
//                   </p>
//                   <p className="text-sm leading-relaxed">
//                     {t('education.specializationText')}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <SectionIntro
//               eyebrow={t('education.narrativeEyebrow')}
//               title={t('education.narrativeTitle')}
//             />
//             <p className="text-[#c4c6cc] leading-relaxed mb-8 mt-6">
//               {t('education.narrativeText')}
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               <MetricTile
//                 accent="primary"
//                 label={t('education.metric1Label')}
//                 value={t('education.metric1Value')}
//               />
//               <MetricTile
//                 accent="tertiary"
//                 label={t('education.metric2Label')}
//                 value={t('education.metric2Value')}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
