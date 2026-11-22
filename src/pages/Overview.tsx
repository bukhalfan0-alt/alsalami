import { Link } from 'react-router-dom'
import { clientName, money, useStore } from '../store'

export default function Overview() {
  const { session, projects, clients, tasks, invoices } = useStore()
  const activeProjects = projects.filter((p) => p.status === 'active').length
  const openTasks = tasks.filter((t) => t.status !== 'done').length
  const pendingMoney = invoices
    .filter((i) => i.status !== 'paid')
    .reduce((sum, i) => sum + i.amount, 0)
  const paidMoney = invoices.filter((i) => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0)

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>مرحبًا، {session?.name.split(' ')[0]}</h1>
          <p>ملخص تشغيل {session?.org} اليوم.</p>
        </div>
        <span className="sample-note">بيانات تجريبية قابلة للتعديل</span>
      </div>

      <div className="stat-grid">
        <div className="stat">
          <div className="label">مشاريع نشطة</div>
          <div className="value">{activeProjects}</div>
        </div>
        <div className="stat">
          <div className="label">مهام مفتوحة</div>
          <div className="value">{openTasks}</div>
        </div>
        <div className="stat">
          <div className="label">محصّل</div>
          <div className="value">{money(paidMoney)}</div>
        </div>
        <div className="stat">
          <div className="label">بانتظار التحصيل</div>
          <div className="value">{money(pendingMoney)}</div>
        </div>
      </div>

      <div className="split-2">
        <section className="panel">
          <div className="page-head" style={{ marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '1.2rem' }}>أحدث المشاريع</h2>
            <Link to="/app/projects" className="btn btn-ghost" style={{ padding: '0.45rem 0.9rem' }}>
              الكل
            </Link>
          </div>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th>المشروع</th>
                  <th>العميل</th>
                  <th>التقدم</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {projects.slice(0, 4).map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{clientName(clients, p.clientId)}</td>
                    <td style={{ minWidth: 120 }}>
                      <div className="progress">
                        <span style={{ width: `${p.progress}%` }} />
                      </div>
                    </td>
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

        <section className="panel">
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.85rem' }}>مهام عاجلة</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {tasks
              .filter((t) => t.status !== 'done')
              .slice(0, 5)
              .map((t) => (
                <div
                  key={t.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    alignItems: 'center',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div>
                    <strong style={{ display: 'block', marginBottom: 4 }}>{t.title}</strong>
                    <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{t.dueDate}</span>
                  </div>
                  <span className={`badge ${t.priority === 'high' ? 'danger' : t.priority === 'med' ? 'warn' : ''}`}>
                    {t.priority === 'high' ? 'عالي' : t.priority === 'med' ? 'متوسط' : 'منخفض'}
                  </span>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
