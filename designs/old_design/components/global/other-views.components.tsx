import type { CSSProperties } from "react";

import { Spinner } from "@radix-ui/themes";
import { Accent, ButtonLikeProps, MaterialSymbolProps, MetricTileProps, SectionIntroProps, TagChipProps } from "../../models/other-views.models.ts";



function classes(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function accentTextColor(accent: Accent) {
  return accent === "primary" ? "text-primary" : "text-tertiary";
}

export function SpinnerPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner size="3" />
    </div>
  );
}

export function MaterialSymbol(
  { className, filled = false, icon }: MaterialSymbolProps,
) {
  const style: CSSProperties | undefined = filled
    ? {
      fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24",
    }
    : undefined;

  return (
    <span className={classes("material-symbols-outlined", className)} style={style}>
      {icon}
    </span>
  );
}

export function SectionIntro({
  accent = "primary",
  align = "left",
  className,
  description,
  eyebrow,
  title,
}: SectionIntroProps) {
  return (
    <div
      className={classes(
        className,
        align === "center" && "text-center max-w-2xl mx-auto",
      )}
    >
      <h2
        className={classes(
          "text-sm font-headline tracking-[0.3em] uppercase mb-2",
          accentTextColor(accent),
        )}
      >
        {eyebrow}
      </h2>
      <h3 className="text-4xl font-headline font-bold">{title}</h3>
      {description
        ? (
          <p className="text-on-surface-variant font-body leading-relaxed mt-6">
            {description}
          </p>
        )
        : null}
    </div>
  );
}

export function TagChip({
  accent = "primary",
  className,
  label,
  variant = "line",
}: TagChipProps) {
  const accentBorder = accent === "primary" ? "border-primary" : "border-tertiary";

  return (
    <span
      className={classes(
        "font-headline text-[10px]",
        variant === "line" &&
          classes(
            "bg-surface-container-highest px-3 py-1 border-l-2",
            accentBorder,
          ),
        variant === "solid" &&
          classes(
            "bg-surface-container-high px-2 py-1 rounded font-bold",
            accentTextColor(accent),
          ),
        className,
      )}
    >
      {label}
    </span>
  );
}

export function MetricTile({ accent = "primary", label, value }: MetricTileProps) {
  return (
    <div className="p-4 bg-surface-container rounded-xl">
      <div className={classes("text-xl font-bold font-headline", accentTextColor(accent))}>
        {value}
      </div>
      <div className="text-[10px] font-headline uppercase text-on-surface-variant">
        {label}
      </div>
    </div>
  );
}

export function ButtonLike({ children, className, href }: ButtonLikeProps) {
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}
