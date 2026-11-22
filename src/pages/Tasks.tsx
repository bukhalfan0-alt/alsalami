import { useState, type FormEvent } from 'react'
import { projectName, useStore, type TaskStatus } from '../store'

const columns: { key: TaskStatus; title: string }[] = [
  { key: 'todo', title: 'للإنجاز' },
  { key: 'doing', title: 'قيد العمل' },
  { key: 'done', title: 'مكتمل' },
]

export default function Tasks() {
  const { tasks, projects, addTask, updateTaskStatus } = useStore()
  const [title, setTitle] = useState('')
  const [projectId, setProjectId] = useState(projects[0]?.id ?? '')
  const [priority, setPriority] = useState<'low' | 'med' | 'high'>('med')
  const [dueDate, setDueDate] = useState('2026-12-01')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title.trim() || !projectId) return
    addTask({
      title: title.trim(),
      projectId,
      priority,
      dueDate,
      status: 'todo',
    })
    setTitle('')
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>المهام</h1>
          <p>حرّك المهام بين الحالات لتتابع التنفيذ يوميًا.</p>
        </div>
      </div>

      <section className="panel" style={{ marginBottom: '1rem' }}>
        <form className="form-inline" onSubmit={onSubmit}>
          <div className="field">
            <label>المهمة</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="field">
            <label>المشروع</label>
            <select value={projectId} onChange={(e) => setProjectId(e.target.value)}>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>الأولوية</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value as 'low' | 'med' | 'high')}>
              <option value="high">عالي</option>
              <option value="med">متوسط</option>
              <option value="low">منخفض</option>
            </select>
          </div>
          <div className="field">
            <label>الاستحقاق</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <button className="btn btn-accent" type="submit">
            إضافة مهمة
          </button>
        </form>
      </section>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '0.9rem',
        }}
        className="task-board"
      >
        {columns.map((col) => (
          <section key={col.key} className="panel">
            <h2 style={{ fontSize: '1.05rem', marginBottom: '0.9rem' }}>{col.title}</h2>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              {tasks
                .filter((t) => t.status === col.key)
                .map((t) => (
                  <article
                    key={t.id}
                    style={{
                      padding: '0.85rem',
                      borderRadius: 14,
                      background: 'rgba(7,26,34,0.03)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    <strong style={{ display: 'block', marginBottom: 6 }}>{t.title}</strong>
                    <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: 8 }}>
                      {projectName(projects, t.projectId)} · {t.dueDate}
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {columns
                        .filter((c) => c.key !== t.status)
                        .map((c) => (
                          <button
                            key={c.key}
                            type="button"
                            className="btn btn-ghost"
                            style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem' }}
                            onClick={() => updateTaskStatus(t.id, c.key)}
                          >
                            إلى {c.title}
                          </button>
                        ))}
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .task-board { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
