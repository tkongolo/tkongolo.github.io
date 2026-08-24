import { Terminal, Server, Cpu, GraduationCap, Send, CheckCircle } from 'lucide-react'

/* ──────────────── Utilities ──────────────── */

export function classes(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function accentTextColor(accent: "primary" | "tertiary") {
  return accent === "primary" ? "text-[#00daf3]" : "text-[#ffba38]";
}

export function accentBorder(accent: "primary" | "tertiary") {
  return accent === "primary" ? "border-[#00daf3]" : "border-[#ffba38]";
}

export function accentShadow(accent: "primary" | "tertiary") {
  return accent === "primary"
    ? "hover:shadow-[0_0_40px_rgba(0,218,243,0.1)]"
    : "hover:shadow-[0_0_40px_rgba(255,186,56,0.1)]";
}

/* ──────────────── Shared Components ──────────────── */

export function SectionIntro({
  accent = "primary",
  description,
  eyebrow,
  title,
  className,
}: {
  accent?: "primary" | "tertiary"
  description?: string
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <div className={className}>
      <h2 className={classes("text-sm tracking-[0.3em] uppercase mb-2", accentTextColor(accent))}>
        {eyebrow}
      </h2>
      <h3 className="text-4xl font-bold">{title}</h3>
      {description && (
        <p className="text-[#c4c6cc] leading-relaxed mt-6">{description}</p>
      )}
    </div>
  )
}

export function TagChip({
  accent = "primary",
  label,
  variant = "line",
}: {
  accent?: "primary" | "tertiary"
  label: string
  variant?: "line" | "solid"
}) {
  return (
    <span
      className={classes(
        "text-[10px] tracking-widest uppercase",
        variant === "line" &&
          classes("bg-[#32353c] px-3 py-1 border-l-2", accentBorder(accent)),
        variant === "solid" &&
          classes("bg-[#272a31] px-2 py-1 rounded font-bold", accentTextColor(accent)),
      )}
    >
      {label}
    </span>
  )
}

export function MetricTile({
  accent = "primary",
  label,
  value,
}: {
  accent?: "primary" | "tertiary"
  label: string
  value: string
}) {
  return (
    <div className="p-4 bg-[#1d2026] rounded-xl">
      <div className={classes("text-xl font-bold", accentTextColor(accent))}>
        {value}
      </div>
      <div className="text-[10px] uppercase text-[#c4c6cc] tracking-widest">
        {label}
      </div>
    </div>
  )
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  terminal: Terminal,
  dns: Server,
  memory: Cpu,
  school: GraduationCap,
  send: Send,
  check_circle: CheckCircle,
}

export function MaterialIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = iconMap[icon]
  if (!Icon) return null
  return <Icon className={className} />
}
