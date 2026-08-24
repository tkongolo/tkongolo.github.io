import { useState } from "react";

import {
  MaterialSymbol,
  MetricTile,
  SectionIntro,
  TagChip,
} from "~/components/global/other-views.components.tsx";
import { Accent } from "../../../models/other-views.models.ts";
import { EducationSectionProps, ExperienceSectionProps, SkillCardItem, SkillModule, SkillsSectionProps } from "../../../models/routes/home/home.models.ts";

function moduleAccentClasses(accent: Accent) {
  return {
    border: accent === "primary" ? "border-primary" : "border-tertiary",
    label: accent === "primary" ? "text-primary" : "text-tertiary",
    shadow: accent === "primary"
      ? "hover:shadow-[0_0_40px_rgba(0,218,243,0.1)]"
      : "hover:shadow-[0_0_40px_rgba(255,186,56,0.1)]",
  };
}

function SkillModuleCard({ module }: { module: SkillModule }) {
  const accent = moduleAccentClasses(module.accent);
  const [activeTabId, setActiveTabId] = useState(
    module.kind === "tabbed" ? module.tabs[0]?.id ?? "" : "",
  );

  return (
    <div
      className={[
        "bg-surface p-8 rounded-2xl border-l-4 shadow-lg transition-all",
        accent.border,
        accent.shadow,
      ].join(" ")}
    >
      <div className="flex justify-between items-start mb-8">
        <MaterialSymbol className={`${accent.label} text-4xl`} icon={module.icon} />
        <span className="text-[10px] font-headline text-on-surface-variant tracking-widest uppercase bg-surface-container-high px-3 py-1 rounded">
          {module.moduleLabel}
        </span>
      </div>
      <h4 className={`text-2xl font-headline font-bold ${module.kind === "tabbed" ? "mb-6" : "mb-4"}`}>
        {module.title}
      </h4>

      {module.kind === "tabbed"
        ? (
          <>
            <div className="mb-8">
              <div className="flex gap-4 border-b border-outline-variant/30 mb-6 overflow-x-auto">
                {module.tabs.map((tab) => {
                  const isActive = tab.id === activeTabId;

                  return (
                    <button
                      key={tab.id}
                      className={[
                        "font-headline text-[10px] tracking-widest uppercase pb-2 transition-all whitespace-nowrap border-b-2",
                        isActive
                          ? `${accent.label} ${accent.border}`
                          : "border-transparent hover:text-primary text-on-surface-variant",
                      ].join(" ")}
                      onClick={() => setActiveTabId(tab.id)}
                      type="button"
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              {module.tabs.map((tab) =>
                tab.id === activeTabId
                  ? (
                    <div key={tab.id}>
                      <p className="text-on-surface-variant text-xs mb-6 leading-relaxed">
                        {tab.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tab.tags.map((tag) => (
                          <TagChip
                            key={tag}
                            accent={module.accent}
                            label={tag}
                          />
                        ))}
                      </div>
                    </div>
                  )
                  : null
              )}
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20">
              <p className={`text-[10px] font-headline tracking-widest uppercase mb-3 ${accent.label}`}>
                {module.preferredEnvironmentLabel}
              </p>
              <div className="flex items-center gap-2 text-on-surface">
                <MaterialSymbol className={`text-sm ${accent.label}`} icon="check_circle" />
                <span className="font-bold text-xs">{module.preferredEnvironmentValue}</span>
              </div>
            </div>
          </>
        )
        : (
          <>
            <p className="text-on-surface-variant text-xs mb-8 leading-relaxed">
              {module.description}
            </p>
            <div className="space-y-6">
              {module.groups.map((group) => (
                <div key={group.label}>
                  <p className={`text-[10px] font-headline tracking-widest uppercase mb-3 ${accent.label}`}>
                    {group.label}
                  </p>
                  {group.variant === "cards"
                    ? (
                      <div className="grid grid-cols-1 gap-2">
                        {group.items.map((item) => {
                          const content = item as SkillCardItem;

                          return (
                            <div
                              key={content.title}
                              className="border border-outline-variant/20 p-2 rounded bg-surface-container-lowest"
                            >
                              <span className="text-[10px] font-bold block mb-1">
                                {content.title}
                              </span>
                              {content.description
                                ? (
                                  <span className="text-[9px] text-on-surface-variant">
                                    {content.description}
                                  </span>
                                )
                                : null}
                            </div>
                          );
                        })}
                      </div>
                    )
                    : (
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => {
                          const label = typeof item === "string" ? item : item.title;

                          return (
                            <TagChip
                              key={label}
                              accent={module.accent}
                              label={label}
                              variant={group.variant === "solid-chips" ? "solid" : "line"}
                            />
                          );
                        })}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </>
        )}
    </div>
  );
}

export function SkillsSection({
  description,
  modules,
  sectionId,
  title,
  titleEyebrow,
}: SkillsSectionProps) {
  return (
    <section className="py-32 bg-surface-container-low scroll-mt-20" id={sectionId}>
      <div className="max-w-7xl mx-auto px-8">
        <SectionIntro
          className="mb-16"
          description={description}
          eyebrow={titleEyebrow}
          title={title}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modules.map((module) => <SkillModuleCard key={module.moduleLabel} module={module} />)}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection({
  items,
  sectionId,
  title,
  titleEyebrow,
  totalUptime,
}: ExperienceSectionProps) {
  return (
    <section className="py-32 bg-surface scroll-mt-20" id={sectionId}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionIntro accent="tertiary" eyebrow={titleEyebrow} title={title} />
          </div>
          <div className="text-on-surface-variant font-headline text-sm tracking-widest">
            {totalUptime}
          </div>
        </div>
        <div className="space-y-12">
          {items.map((item) => (
            <div
              key={`${item.period}-${item.company}`}
              className="group relative grid md:grid-cols-12 gap-8 py-8 px-8 rounded-xl hover:bg-surface-container-low transition-colors duration-300"
            >
              <div className="md:col-span-3">
                <span className={item.badge ? "text-primary font-headline font-bold text-xl" : "text-on-surface-variant font-headline font-bold text-xl"}>
                  {item.period}
                </span>
                <div className="mt-2 text-on-surface-variant font-headline text-xs tracking-widest uppercase">
                  {item.role}
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-3">
                  <h4 className="text-2xl font-headline font-bold text-on-surface">
                    {item.company}
                  </h4>
                  {item.badge
                    ? (
                      <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded-[999px] font-headline tracking-widest font-bold">
                        {item.badge}
                      </span>
                    )
                    : null}
                </div>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-3xl mb-6">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-headline text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection({
  cardHeading,
  cardIcon,
  cardPeriod,
  cardSubtitle,
  cardTitle,
  metrics,
  narrativeEyebrow,
  narrativeText,
  narrativeTitle,
  specializationLabel,
  specializationText,
}: EducationSectionProps) {
  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-surface-container-high p-12 rounded-xl border-l-4 border-primary">
              <MaterialSymbol className="text-primary text-4xl mb-6" icon={cardIcon} />
              <h4 className="text-3xl font-headline font-bold mb-4">{cardHeading}</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-headline font-bold">{cardPeriod}</p>
                  <p className="text-xl font-headline font-bold">{cardTitle}</p>
                  <p className="text-on-surface-variant font-body mt-1">{cardSubtitle}</p>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-outline-variant/10">
                  <p className="text-xs font-headline tracking-widest uppercase text-tertiary mb-2">
                    {specializationLabel}
                  </p>
                  <p className="text-sm font-body leading-relaxed">
                    {specializationText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow={narrativeEyebrow}
              title={narrativeTitle}
            />
            <p className="text-on-surface-variant font-body leading-relaxed mb-8 mt-6">
              {narrativeText}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <MetricTile
                  key={metric.label}
                  accent={metric.accent}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
