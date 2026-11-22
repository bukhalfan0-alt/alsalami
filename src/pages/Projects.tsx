import { useState, type FormEvent } from 'react'
import { clientName, money, useStore, type ProjectStatus } from '../store'

export default function Projects() {
  const { projects, clients, addProject } = useStore()
  const [name, setName] = useState('')
  const [clientId, setClientId] = useState(clients[0]?.id ?? '')
  const [budget, setBudget] = useState('50000')
  const [dueDate, setDueDate] = useState('2026-12-31')
  const [status, setStatus] = useState<ProjectStatus>('active')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const nextName = String(fd.get('name') || name).trim()
    const nextClientId = String(fd.get('clientId') || clientId)
    const nextBudget = Number(fd.get('budget') || budget) || 0
    const nextDue = String(fd.get('dueDate') || dueDate)
    const nextStatus = String(fd.get('status') || status) as ProjectStatus
    if (!nextName || !nextClientId) return
    addProject({
      name: nextName,
      clientId: nextClientId,
      budget: nextBudget,
      dueDate: nextDue,
      status: nextStatus,
      progress: nextStatus === 'done' ? 100 : 10,
    })
    setName('')
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>المشاريع</h1>
          <p>إدارة التقدم والميزانيات ومواعيد التسليم.</p>
        </div>
      </div>

      <section className="panel" style={{ marginBottom: '1rem' }}>
        <form className="form-inline" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="project-name">اسم المشروع</label>
            <input
              id="project-name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مشروع جديد"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="project-client">العميل</label>
            <select
              id="project-client"
              name="clientId"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            >
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.company}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="project-budget">الميزانية</label>
            <input
              id="project-budget"
              name="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="project-due">التسليم</label>
            <input
              id="project-due"
              name="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="project-status">الحالة</label>
            <select
              id="project-status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as ProjectStatus)}
            >
              <option value="active">نشط</option>
              <option value="paused">متوقف</option>
              <option value="done">مكتمل</option>
            </select>
          </div>
          <button className="btn btn-accent" type="submit">
            إضافة مشروع
          </button>
        </form>
      </section>

      <section className="panel">
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>المشروع</th>
                <th>العميل</th>
                <th>الميزانية</th>
                <th>التقدم</th>
                <th>التسليم</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{clientName(clients, p.clientId)}</td>
                  <td>{money(p.budget)}</td>
                  <td style={{ minWidth: 140 }}>
                    <div style={{ display: 'grid', gap: 6 }}>
                      <div className="progress">
                        <span style={{ width: `${p.progress}%` }} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{p.progress}%</span>
                    </div>
                  </td>
                  <td>{p.dueDate}</td>
                  <td>
                    <span className={`badge ${p.status === 'done' ? 'ok' : p.status === 'paused' ? 'warn' : ''}`}>
                      {p.status === 'active' ? 'نشط' : p.status === 'paused' ? 'متوقف' : 'مكتمل'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
