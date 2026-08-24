// @ts-types="react"
import { ReactNode } from "react";

export type Accent = "primary" | "tertiary";

export interface MaterialSymbolProps {
  className?: string;
  filled?: boolean;
  icon: string;
}

export interface SectionIntroProps {
  accent?: Accent;
  align?: "left" | "center";
  className?: string;
  description?: string;
  eyebrow: string;
  title: string;
}

export interface TagChipProps {
  accent?: Accent;
  className?: string;
  label: string;
  variant?: "line" | "solid";
}

export interface MetricTileProps {
  accent?: Accent;
  label: string;
  value: string;
}

export interface ButtonLikeProps {
  children: ReactNode;
  className: string;
  href?: string;
}