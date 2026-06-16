import { Navigate, Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from '@/components/layouts/protected-route'
import { DashboardRoute } from '@/routes/dashboard'
import { ForgotPasswordRoute } from '@/routes/auth/forgot-password'
import { HomeRoute } from '@/routes/index'
import { LoginRoute } from '@/routes/auth/login'
import { RegisterRoute } from '@/routes/auth/register'
import { ResetPasswordRoute } from '@/routes/auth/reset-password'
import { useAppSelector } from '@/store/hooks'

export function AppRoutes() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={isAuthenticated ? '/dashboard' : '/auth/login'}
            replace
          />
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardRoute />} />
      </Route>
      <Route
        path="/auth/login"
        element={<LoginRoute />}
      />
      <Route path="/auth/register" element={<RegisterRoute />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordRoute />} />
      <Route path="/auth/reset-password" element={<ResetPasswordRoute />} />
      <Route path="/home" element={<HomeRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
