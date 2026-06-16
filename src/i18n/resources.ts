import en from './locales/en.json' with { type: "json" }
import sw from './locales/sw.json' with { type: "json" }

export const resources = {
  en: { translation: en },
  sw: { translation: sw },
} as const

export type SupportedLanguage = keyof typeof resources
