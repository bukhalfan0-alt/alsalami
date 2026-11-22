import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import { SITE, modules } from '../data/catalog'
import './shell.css'

export default function Shell() {
  return (
    <div className="shell">
      <header className="top">
        <div className="wrap top-inner">
          <NavLink to="/" className="brand-link">
            <Logo />
          </NavLink>
          <div className="top-meta">
            <span>{SITE.place}</span>
            <a className="btn btn-ghost" href={SITE.liveUrl} target="_blank" rel="noreferrer">
              النسخة الحية
            </a>
          </div>
        </div>
        <nav className="nav wrap" aria-label="أقسام المنصة">
          {modules.map((m) => (
            <NavLink key={m.to} to={m.to} end={'end' in m ? m.end : false} className={({ isActive }) => (isActive ? 'active' : '')}>
              {m.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="wrap main">
        <Outlet />
      </main>
      <footer className="foot">
        <div className="wrap foot-inner">
          <Logo />
          <p>
            {SITE.tagline} — {SITE.place}
          </p>
          <a href={SITE.liveUrl} target="_blank" rel="noreferrer">
            khuoros.ae
          </a>
        </div>
      </footer>
    </div>
  )
}
