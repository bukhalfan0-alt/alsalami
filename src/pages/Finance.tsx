import { useState, type FormEvent } from 'react'
import { clientName, money, projectName, useStore, type InvoiceStatus } from '../store'

export default function Finance() {
  const { invoices, clients, projects, addInvoice } = useStore()
  const [number, setNumber] = useState(`INV-${Math.floor(1100 + Math.random() * 80)}`)
  const [clientId, setClientId] = useState(clients[0]?.id ?? '')
  const [projectId, setProjectId] = useState(projects[0]?.id ?? '')
  const [amount, setAmount] = useState('15000')
  const [status, setStatus] = useState<InvoiceStatus>('pending')
  const [dueDate, setDueDate] = useState('2026-12-20')

  const paid = invoices.filter((i) => i.status === 'paid').reduce((s, i) => s + i.amount, 0)
  const pending = invoices.filter((i) => i.status === 'pending').reduce((s, i) => s + i.amount, 0)
  const overdue = invoices.filter((i) => i.status === 'overdue').reduce((s, i) => s + i.amount, 0)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!clientId || !projectId) return
    addInvoice({
      number,
      clientId,
      projectId,
      amount: Number(amount) || 0,
      status,
      dueDate,
    })
    setNumber(`INV-${Math.floor(1100 + Math.random() * 80)}`)
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>المالية</h1>
          <p>متابعة الفواتير والتحصيل بوضوح.</p>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat">
          <div className="label">مدفوع</div>
          <div className="value">{money(paid)}</div>
        </div>
        <div className="stat">
          <div className="label">معلّق</div>
          <div className="value">{money(pending)}</div>
        </div>
        <div className="stat">
          <div className="label">متأخر</div>
          <div className="value">{money(overdue)}</div>
        </div>
        <div className="stat">
          <div className="label">إجمالي الفواتير</div>
          <div className="value">{invoices.length}</div>
        </div>
      </div>

      <section className="panel" style={{ marginBottom: '1rem' }}>
        <form className="form-inline" onSubmit={onSubmit}>
          <div className="field">
            <label>رقم الفاتورة</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>
          <div className="field">
            <label>العميل</label>
            <select value={clientId} onChange={(e) => setClientId(e.target.value)}>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.company}
                </option>
              ))}
            </select>
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
            <label>المبلغ</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className="field">
            <label>الحالة</label>
            <select value={status} onChange={(e) => setStatus(e.target.value as InvoiceStatus)}>
              <option value="paid">مدفوعة</option>
              <option value="pending">معلّقة</option>
              <option value="overdue">متأخرة</option>
            </select>
          </div>
          <div className="field">
            <label>الاستحقاق</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <button className="btn btn-accent" type="submit">
            إضافة فاتورة
          </button>
        </form>
      </section>

      <section className="panel">
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>الرقم</th>
                <th>العميل</th>
                <th>المشروع</th>
                <th>المبلغ</th>
                <th>الاستحقاق</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((i) => (
                <tr key={i.id}>
                  <td>{i.number}</td>
                  <td>{clientName(clients, i.clientId)}</td>
                  <td>{projectName(projects, i.projectId)}</td>
                  <td>{money(i.amount)}</td>
                  <td>{i.dueDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        i.status === 'paid' ? 'ok' : i.status === 'overdue' ? 'danger' : 'warn'
                      }`}
                    >
                      {i.status === 'paid' ? 'مدفوعة' : i.status === 'pending' ? 'معلّقة' : 'متأخرة'}
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
