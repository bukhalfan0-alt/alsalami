import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { useStore } from '../store'
import './appshell.css'

const links = [
  { to: '/app', end: true, label: 'نظرة عامة' },
  { to: '/app/projects', label: 'المشاريع' },
  { to: '/app/clients', label: 'العملاء' },
  { to: '/app/tasks', label: 'المهام' },
  { to: '/app/finance', label: 'المالية' },
  { to: '/app/settings', label: 'الإعدادات' },
]

export default function AppShell() {
  const { session, logout } = useStore()
  const navigate = useNavigate()

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Logo />
          <span className="sample-note">بيانات تجريبية</span>
        </div>
        <nav>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-user">
          <strong>{session?.name}</strong>
          <span>{session?.org}</span>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              logout()
              navigate('/')
            }}
          >
            تسجيل الخروج
          </button>
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
