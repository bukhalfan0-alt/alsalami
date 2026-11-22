import type { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import AppShell from './layout/AppShell'
import Overview from './pages/Overview'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Finance from './pages/Finance'
import Tasks from './pages/Tasks'
import Settings from './pages/Settings'
import { useStore } from './store'

function PrivateRoute({ children }: { children: ReactNode }) {
  const { session } = useStore()
  if (!session) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/app"
        element={
          <PrivateRoute>
            <AppShell />
          </PrivateRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="projects" element={<Projects />} />
        <Route path="clients" element={<Clients />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="finance" element={<Finance />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
