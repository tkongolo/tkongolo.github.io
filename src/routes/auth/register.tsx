import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'

export function RegisterRoute() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-900">
      <Helmet>
        <title>
          {t('auth.registerTitle')} | {t('app.name')}
        </title>
      </Helmet>

      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <Link className="text-sm text-slate-500 hover:text-slate-900" to="/">
          ← {t('nav.home')}
        </Link>
        <LanguageSwitcher />
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h1 className="text-2xl font-semibold">{t('auth.registerTitle')}</h1>
          <form className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-medium">{t('auth.email')}</span>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3" type="email" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">{t('auth.password')}</span>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3" type="password" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">{t('auth.confirmPassword')}</span>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3" type="password" />
            </label>
            <Button className="w-full" type="submit">
              {t('auth.submit')}
            </Button>
          </form>
        </section>
      </div>
    </main>
  )
}
