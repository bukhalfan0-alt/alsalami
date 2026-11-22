import { useState, type FormEvent } from 'react'
import { useStore } from '../store'

export default function Clients() {
  const { clients, addClient } = useStore()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('دبي')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const next = {
      name: String(fd.get('name') || name).trim(),
      company: String(fd.get('company') || company).trim(),
      email: String(fd.get('email') || email).trim(),
      phone: String(fd.get('phone') || phone).trim(),
      city: String(fd.get('city') || city).trim(),
    }
    if (!next.name || !next.company) return
    addClient(next)
    setName('')
    setCompany('')
    setEmail('')
    setPhone('')
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>العملاء</h1>
          <p>سجل موحّد للشركات وجهات الاتصال.</p>
        </div>
      </div>

      <section className="panel" style={{ marginBottom: '1rem' }}>
        <form className="form-inline" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="client-name">جهة الاتصال</label>
            <input id="client-name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="client-company">الشركة</label>
            <input
              id="client-company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="client-email">البريد</label>
            <input
              id="client-email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="client-phone">الهاتف</label>
            <input id="client-phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="client-city">المدينة</label>
            <input id="client-city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <button className="btn btn-accent" type="submit">
            إضافة عميل
          </button>
        </form>
      </section>

      <section className="panel">
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>الشركة</th>
                <th>جهة الاتصال</th>
                <th>البريد</th>
                <th>الهاتف</th>
                <th>المدينة</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id}>
                  <td>{c.company}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
