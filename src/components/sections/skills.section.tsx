import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { classes, accentTextColor, accentBorder, accentShadow, SectionIntro, TagChip, MaterialIcon } from './shared'
import type {
    SectionProps,
    SkillCard,
    SkillGroup,
    SkillTab,
    SkillValue,
    SkillsContent,
} from "../../models/models.ts";

export default function SkillSection({
  section,
  linkButtonInfo = [],
  imageInfo = [],
}: SectionProps) {
    const [activeTabId, setActiveTabId] = useState("WEB");

    const content = (section || null) as SkillsContent | null;
    void linkButtonInfo;
    void imageInfo;

    return (
        <div className="py-32 bg-[#191c22] scroll-mt-20">
            {
                content && (
                    <div className="max-w-7xl mx-auto px-8">
                        <SectionIntro
                            className="mb-16"
                            eyebrow={content['title_top']}
                            title={content['title_bottom']}
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {content.cards?.map((card: SkillCard, cardIndex: number) => {
                                const accent = cardIndex === 1 ? "tertiary" : "primary";
                                const icon = cardIndex === 0 ? "terminal" : cardIndex === 1 ? "dns" : "memory";
                                const isTabbed = Boolean(card.content.tabs);
                                const tabs = card.content.tabs ?? [];
                                const groups = Object.keys(card.content)
                                    .filter((key) => key !== "description" && key !== "preferred_env")
                                    .map((key) => card.content[key] as SkillGroup);

                                return (
                                    <div
                                        key={card.card_title}
                                        className={classes(
                                            "bg-[#10131a] p-8 rounded-2xl border-l-4 shadow-lg transition-all",
                                            accentBorder(accent),
                                            accentShadow(accent),
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <MaterialIcon className={classes(accentTextColor(accent), "size-9")} icon={icon} />
                                            <span className="text-[10px] text-[#c4c6cc] tracking-widest uppercase bg-[#272a31] px-3 py-1 rounded">
                                                {card.card_title}
                                            </span>
                                        </div>
                                        <h4 className={classes("text-2xl font-bold", isTabbed ? "mb-6" : "mb-4")}>
                                            {card.card_title}
                                        </h4>

                                        {isTabbed ? (
                                            <>
                                                <div className="mb-8">
                                                    <div className="flex gap-4 border-b border-[#44474c]/30 mb-6 overflow-x-auto">
                                                        {tabs.map((tab: SkillTab) => {
                                                            const isActive = tab.label === activeTabId;
                                                            return (
                                                                <button
                                                                    key={tab.label}
                                                                    className={classes(
                                                                        "text-[10px] tracking-widest uppercase pb-2 transition-all whitespace-nowrap border-b-2",
                                                                        isActive
                                                                            ? classes(accentTextColor(accent), accentBorder(accent))
                                                                            : "border-transparent hover:text-[#00daf3] text-[#c4c6cc]",
                                                                    )}
                                                                    onClick={() => setActiveTabId(tab.label)}
                                                                    type="button"
                                                                >
                                                                    {tab.label}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                    {tabs.map((tab: SkillTab) =>
                                                        tab.label === activeTabId ? (
                                                            <div key={tab.label}>
                                                                <p className="text-[#c4c6cc] text-xs mb-6 leading-relaxed">
                                                                    {tab.description}
                                                                </p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {tab.tags.map((tag: string) => (
                                                                        <TagChip key={tag} accent={accent} label={tag} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ) : null,
                                                    )}
                                                </div>
                                                <div className="mt-8 pt-6 border-t border-[#44474c]/20">
                                                    <p className={classes("text-[10px] tracking-widest uppercase mb-3", accentTextColor(accent))}>
                                                        {card.content.preferred_env?.label}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-[#e1e2eb]">
                                                        <CheckCircle className={classes(accentTextColor(accent), "size-4")} />
                                                        <span className="font-bold text-xs">{card.content.preferred_env?.value}</span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-[#c4c6cc] text-xs mb-8 leading-relaxed">
                                                    {card.content.description}
                                                </p>
                                                <div className="space-y-6">
                                                    {groups.map((group) => (
                                                        <div key={group.label}>
                                                            <p className={classes("text-[10px] tracking-widest uppercase mb-3", accentTextColor(accent))}>
                                                                {group.label}
                                                            </p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {group.values.map((value: SkillValue) => {
                                                                    const label = typeof value === "string" ? value : value.value_title;
                                                                    return (
                                                                        <div key={label}>
                                                                            <TagChip
                                                                                accent={accent}
                                                                                label={label}
                                                                                variant={typeof value === "string" ? "line" : "solid"}
                                                                            />
                                                                            {typeof value !== "string" && value.value_desc && (
                                                                                <p className="text-[9px] text-[#c4c6cc] mt-1">{value.value_desc}</p>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {card.content.preferred_env && (
                                                    <div className="mt-8 pt-6 border-t border-[#44474c]/20">
                                                        <p className={classes("text-[10px] tracking-widest uppercase mb-3", accentTextColor(accent))}>
                                                            {card.content.preferred_env.label}
                                                        </p>
                                                        <div className="flex items-center gap-2 text-[#e1e2eb]">
                                                            <CheckCircle className={classes(accentTextColor(accent), "size-4")} />
                                                            <span className="font-bold text-xs">{card.content.preferred_env.value}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}

// export function SkillsSection({ t }: { t: (key: string) => string }) {
//   const [activeTabId, setActiveTabId] = useState("web-stack")

//   const modules = [
//     {
//       key: "module01",
//       accent: "primary" as const,
//       icon: "terminal",
//       kind: "tabbed" as const,
//       tabs: [
//         {
//           id: "web-stack",
//           label: t('skills.module01.tabWebLabel'),
//           description: t('skills.module01.tabWebDesc'),
//           tags: ["NEXT_JS", "REACT", "TYPESCRIPT", "TAILWIND"],
//         },
//         {
//           id: "mobile-stack",
//           label: t('skills.module01.tabMobileLabel'),
//           description: t('skills.module01.tabMobileDesc'),
//           tags: ["FLUTTER", "KOTLIN", "REACT_NATIVE"],
//         },
//         {
//           id: "desktop-stack",
//           label: t('skills.module01.tabDesktopLabel'),
//           description: t('skills.module01.tabDesktopDesc'),
//           tags: ["ELECTRON", "TAURI"],
//         },
//       ],
//       prefEnvLabel: t('skills.module01.prefEnvLabel'),
//       prefEnvValue: t('skills.module01.prefEnvValue'),
//     },
//     {
//       key: "module02",
//       accent: "tertiary" as const,
//       icon: "dns",
//       kind: "grouped" as const,
//       description: t('skills.module02.description'),
//       groups: [
//         {
//           label: t('skills.module02.groupApis'),
//           variant: "solid-chips" as const,
//           items: ["REST", "GRAPHQL", "gRPC"],
//         },
//         {
//           label: t('skills.module02.groupProtocols'),
//           variant: "cards" as const,
//           items: [
//             { title: t('skills.module02.cardMqtt') },
//             { title: t('skills.module02.cardModbus') },
//           ],
//         },
//         {
//           label: t('skills.module02.groupRealtime'),
//           variant: "chips" as const,
//           items: ["UDP", "RTSP", "WEBRTC"],
//         },
//       ],
//     },
//     {
//       key: "module03",
//       accent: "primary" as const,
//       icon: "memory",
//       kind: "grouped" as const,
//       description: t('skills.module03.description'),
//       groups: [
//         {
//           label: t('skills.module03.groupCalc'),
//           variant: "chips" as const,
//           items: ["POWER_ANALYSIS", "THERMAL_MODELING", "SIMULATION"],
//         },
//         {
//           label: t('skills.module03.groupDesign'),
//           variant: "cards" as const,
//           items: [
//             { title: t('skills.module03.cardPcb'), description: t('skills.module03.cardPcbDesc') },
//             { title: t('skills.module03.cardFpga'), description: t('skills.module03.cardFpgaDesc') },
//           ],
//         },
//         {
//           label: t('skills.module03.groupInterface'),
//           variant: "chips" as const,
//           items: ["SPI", "I2C", "UART", "ADC/DAC"],
//         },
//       ],
//     },
//   ]

//   return (
//     <section className="py-32 bg-[#191c22] scroll-mt-20" id="02_SKILLS">
//       <div className="max-w-7xl mx-auto px-8">
//         <SectionIntro
//           className="mb-16"
//           eyebrow={t('skills.titleEyebrow')}
//           title={t('skills.title')}
//         />
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {modules.map((mod) => (
//             <div
//               key={mod.key}
//               className={classes(
//                 "bg-[#10131a] p-8 rounded-2xl border-l-4 shadow-lg transition-all",
//                 accentBorder(mod.accent),
//                 accentShadow(mod.accent),
//               )}
//             >
//               <div className="flex justify-between items-start mb-8">
//                 <MaterialIcon className={classes(accentTextColor(mod.accent), "size-9")} icon={mod.icon} />
//                 <span className="text-[10px] text-[#c4c6cc] tracking-widest uppercase bg-[#272a31] px-3 py-1 rounded">
//                   {t(`skills.${mod.key}.label`)}
//                 </span>
//               </div>
//               <h4 className={classes("text-2xl font-bold", mod.kind === "tabbed" ? "mb-6" : "mb-4")}>
//                 {t(`skills.${mod.key}.title`)}
//               </h4>

//               {mod.kind === "tabbed" ? (
//                 <>
//                   <div className="mb-8">
//                     <div className="flex gap-4 border-b border-[#44474c]/30 mb-6 overflow-x-auto">
//                       {mod.tabs.map((tab) => {
//                         const isActive = tab.id === activeTabId
//                         return (
//                           <button
//                             key={tab.id}
//                             className={classes(
//                               "text-[10px] tracking-widest uppercase pb-2 transition-all whitespace-nowrap border-b-2",
//                               isActive
//                                 ? classes(accentTextColor(mod.accent), accentBorder(mod.accent))
//                                 : "border-transparent hover:text-[#00daf3] text-[#c4c6cc]",
//                             )}
//                             onClick={() => setActiveTabId(tab.id)}
//                             type="button"
//                           >
//                             {tab.label}
//                           </button>
//                         )
//                       })}
//                     </div>
//                     {mod.tabs.map((tab) =>
//                       tab.id === activeTabId ? (
//                         <div key={tab.id}>
//                           <p className="text-[#c4c6cc] text-xs mb-6 leading-relaxed">
//                             {tab.description}
//                           </p>
//                           <div className="flex flex-wrap gap-2">
//                             {tab.tags.map((tag) => (
//                               <TagChip key={tag} accent={mod.accent} label={tag} />
//                             ))}
//                           </div>
//                         </div>
//                       ) : null,
//                     )}
//                   </div>
//                   <div className="mt-8 pt-6 border-t border-[#44474c]/20">
//                     <p className={classes("text-[10px] tracking-widest uppercase mb-3", accentTextColor(mod.accent))}>
//                       {mod.prefEnvLabel}
//                     </p>
//                     <div className="flex items-center gap-2 text-[#e1e2eb]">
//                       <CheckCircle className={classes(accentTextColor(mod.accent), "size-4")} />
//                       <span className="font-bold text-xs">{mod.prefEnvValue}</span>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <p className="text-[#c4c6cc] text-xs mb-8 leading-relaxed">
//                     {mod.description}
//                   </p>
//                   <div className="space-y-6">
//                     {mod.groups.map((group) => (
//                       <div key={group.label}>
//                         <p className={classes("text-[10px] tracking-widest uppercase mb-3", accentTextColor(mod.accent))}>
//                           {group.label}
//                         </p>
//                         {group.variant === "cards" ? (
//                           <div className="grid grid-cols-1 gap-2">
//                             {group.items.map((item) => {
//                               const card = item as { title: string; description?: string }
//                               return (
//                                 <div key={card.title} className="border border-[#44474c]/20 p-2 rounded bg-[#0b0e14]">
//                                   <span className="text-[10px] font-bold block mb-1">{card.title}</span>
//                                   {card.description && (
//                                     <span className="text-[9px] text-[#c4c6cc]">{card.description}</span>
//                                   )}
//                                 </div>
//                               )
//                             })}
//                           </div>
//                         ) : (
//                           <div className="flex flex-wrap gap-2">
//                             {group.items.map((item) => {
//                               const label = typeof item === "string" ? item : item.title
//                               return (
//                                 <TagChip
//                                   key={label}
//                                   accent={mod.accent}
//                                   label={label}
//                                   variant={group.variant === "solid-chips" ? "solid" : "line"}
//                                 />
//                               )
//                             })}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
