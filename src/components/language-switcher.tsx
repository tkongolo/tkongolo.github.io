import { useTranslation } from 'react-i18next'

import type { SupportedLanguage } from '@/i18n/resources'
import { Button } from '@/components/ui/button'

const languages: Array<{ code: SupportedLanguage; label: string }> = [
  { code: 'en', label: 'English' },
  { code: 'sw', label: 'Kiswahili' },
]

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">
        {t('language.label')}
      </span>
      <div className="flex flex-wrap gap-2">
        {languages.map((language) => (
          <Button
            key={language.code}
            type="button"
            variant={i18n.language === language.code ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              void i18n.changeLanguage(language.code)
            }}
          >
            {language.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
