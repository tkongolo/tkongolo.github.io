//import type { SectionProps } from "../../models/models.ts";
//import { Badge } from "../ui/badge";
//import { SectionIntro } from "./shared";

// export default function ExperienceSection({
//   section,
//   linkButtonInfo = [],
//   imageInfo = [],
// }: SectionProps) {
//   const content = section || null;

//   return (
//     <div className="py-32 bg-[#10131a] scroll-mt-20">
//       {
//         content && (
//           <div className="max-w-7xl mx-auto px-8">
//             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//               <div className="max-w-2xl">
//                 <SectionIntro
//                   accent="tertiary"
//                   eyebrow={content['']}
//                   title={content['']}
//                 />
//               </div>
//             </div>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export function ExperienceSection({ t }: { t: (key: string) => string }) {
//   const items = [
//     {
//       period: t('experience.item1.period'),
//       role: t('experience.item1.role'),
//       company: t('experience.item1.company'),
//       badge: t('experience.item1.badge'),
//       summary: t('experience.item1.summary'),
//       tags: ["#DISTRIBUTED_SYSTEMS", "#REACT_NATIVE", "#MQTT_PROTOCOLS"],
//     },
//     {
//       period: t('experience.item2.period'),
//       role: t('experience.item2.role'),
//       company: t('experience.item2.company'),
//       summary: t('experience.item2.summary'),
//       tags: ["#INDUSTRIAL_IOT", "#C_SHARP", "#SQL_SERVER"],
//     },
//   ]

//   return (
//     <section className="py-32 bg-[#10131a] scroll-mt-20" id="03_EXPERIENCE">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//           <div className="max-w-2xl">
//             <SectionIntro
//               accent="tertiary"
//               eyebrow={t('experience.titleEyebrow')}
//               title={t('experience.title')}
//             />
//           </div>
//           <div className="text-[#c4c6cc] text-sm tracking-widest">
//             {t('experience.totalUptime')}
//           </div>
//         </div>
//         <div className="space-y-12">
//           {items.map((item) => (
//             <div
//               key={`${item.period}-${item.company}`}
//               className="group relative grid md:grid-cols-12 gap-8 py-8 px-8 rounded-xl hover:bg-[#191c22] transition-colors duration-300"
//             >
//               <div className="md:col-span-3">
//                 <span className={item.badge ? "text-[#00daf3] font-bold text-xl" : "text-[#c4c6cc] font-bold text-xl"}>
//                   {item.period}
//                 </span>
//                 <div className="mt-2 text-[#c4c6cc] text-xs tracking-widest uppercase">
//                   {item.role}
//                 </div>
//               </div>
//               <div className="md:col-span-9">
//                 <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-3">
//                   <h4 className="text-2xl font-bold text-[#e1e2eb]">
//                     {item.company}
//                   </h4>
//                   {item.badge && (
//                     <Badge className="bg-[#00daf3]/10 text-[#00daf3] text-[10px] px-3 py-1 rounded-[999px] tracking-widest font-bold border-0">
//                       {item.badge}
//                     </Badge>
//                   )}
//                 </div>
//                 <p className="text-[#c4c6cc] leading-relaxed max-w-3xl mb-6">
//                   {item.summary}
//                 </p>
//                 <div className="flex flex-wrap gap-3">
//                   {item.tags.map((tag) => (
//                     <span key={tag} className="text-[10px] text-[#c4c6cc] tracking-widest">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
