import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeRoute } from '@/routes/index.tsx';
import { Error404Route, Error500Route } from "./routes/error.tsx";

export function AppRoutes() {
  //const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  return (
    <Routes>
      <Route path="/" element={<HomeRoute/>}/>
      <Route path="/404" element={<Error404Route/>}/>
      <Route path="/500" element={<Error500Route/>}/>
      <Route path="*" element={<Navigate to="/400" replace />} />
    </Routes>
  )
}
