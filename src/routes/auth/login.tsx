import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { signIn } from '@/store/authSlice'

export function LoginRoute() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const [email, setEmail] = useState('demo@cryntra.com')
  const [password, setPassword] = useState('demo1234')

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-900">
      <Helmet>
        <title>
          {t('auth.loginTitle')} | {t('app.name')}
        </title>
      </Helmet>

      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <Link className="text-sm text-slate-500 hover:text-slate-900" to="/">
          ← {t('nav.home')}
        </Link>
        <LanguageSwitcher />
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h1 className="text-2xl font-semibold">{t('auth.loginTitle')}</h1>
          <p className="mt-2 text-sm text-slate-600">{t('hero.description')}</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault()

              if (!email || !password) {
                return
              }

              dispatch(signIn({ email }))
              void navigate('/dashboard')
            }}
          >
            <label className="block">
              <span className="text-sm font-medium">{t('auth.email')}</span>
              <input
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">{t('auth.password')}</span>
              <input
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <Button className="w-full" type="submit">
              {t('auth.submit')}
            </Button>
            <p className="text-xs text-slate-500">
              Try the default demo credentials, or type any email and password for local testing.
            </p>
          </form>
        </section>
      </div>
    </main>
  )
}
