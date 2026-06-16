import { Helmet } from 'react-helmet-async'
import { Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { signOut } from '@/store/authSlice'

export function DashboardRoute() {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authUser = useAppSelector((state) => state.auth.user)
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <Helmet>
        <title>
          {t('dashboard.title')} | {t('app.name')}
        </title>
      </Helmet>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-4">
          <Link className="text-sm text-slate-400 hover:text-white" to="/">
            ← {t('nav.home')}
          </Link>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                {t('dashboard.intro')}
              </p>
              <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
                {t('dashboard.title')}
              </h1>
            </div>
            <LanguageSwitcher />
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { label: t('dashboard.statUsers'), value: '12.4k' },
            { label: t('dashboard.statRevenue'), value: '$48k' },
            { label: t('dashboard.statProjects'), value: '28' },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold">{item.value}</p>
            </article>
          ))}
        </section>

        <Button asChild className="w-fit">
          <Link to="/auth/login">{t('actions.secondary')}</Link>
        </Button>
        <Button
          variant="outline"
          className="w-fit border-white/20 bg-transparent text-white hover:bg-white/10"
          type="button"
          onClick={() => {
            dispatch(signOut())
          }}
        >
          Sign out {authUser ? `(${authUser.email})` : ''}
        </Button>
      </div>
    </main>
  )
}
