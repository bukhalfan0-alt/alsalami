import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { useStore } from '../store'
import './login.css'

export default function Login() {
  const { session, login } = useStore()
  const navigate = useNavigate()
  const [name, setName] = useState('محمد السلامي')
  const [email, setEmail] = useState('mohammed@masar.app')
  const [org, setOrg] = useState('استوديو مسار')

  if (session) return <Navigate to="/app" replace />

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    login({ name: name.trim() || 'مستخدم مسار', email, org: org.trim() || 'فريق مسار' })
    navigate('/app')
  }

  return (
    <div className="login-page">
      <div className="login-visual" aria-hidden>
        <div className="login-orb" />
        <Logo light />
        <p>منصة تشغيل متكاملة للفرق والوكالات في الخليج.</p>
      </div>
      <div className="login-panel fade-up">
        <Link to="/" className="back">
          ← العودة للرئيسية
        </Link>
        <h1>دخول المنصة</h1>
        <p className="sub">لا حاجة لكلمة مرور في هذه النسخة التجريبية — ادخل وابدأ العمل فورًا.</p>
        <form onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">الاسم</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="email">البريد</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="org">اسم الجهة</label>
            <input id="org" value={org} onChange={(e) => setOrg(e.target.value)} required />
          </div>
          <button className="btn btn-accent" type="submit">
            الدخول إلى لوحة التحكم
          </button>
        </form>
      </div>
    </div>
  )
}
