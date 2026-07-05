import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeRoute } from '@/routes/index.tsx';
import ErrorRoute from "./routes/error.tsx";
import MainLayout from "./components/layouts/main.layout.tsx";

export function AppRoutes() {
  
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomeRoute/>}/>
        <Route path="/error/:code" element={<ErrorRoute/>} />
        <Route path="*" element={<Navigate to="/error/404" replace />} />
      </Route>
    </Routes>
  )
}
