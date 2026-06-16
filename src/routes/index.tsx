import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'

export function HomeRoute() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-10 text-slate-900">
      <Helmet>
        <title>{t('app.name')}</title>
        <meta
          name="description"
          content={t('hero.description')}
        />
      </Helmet>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col items-center gap-5 text-center">
          <div className="rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
            {t('hero.badge')}
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            {t('hero.description')}
          </p>

          <LanguageSwitcher />

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link to="/dashboard">{t('actions.primary')}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/auth/login">{t('actions.secondary')}</Link>
            </Button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {t('sections.routeTitle')}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t('sections.routeDescription')}
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {t('sections.languageTitle')}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t('sections.languageDescription')}
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {t('sections.fileTitle')}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t('sections.fileDescription')}
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
