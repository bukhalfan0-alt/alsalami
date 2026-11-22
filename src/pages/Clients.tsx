import { useState, type FormEvent } from 'react'
import { useStore } from '../store'

export default function Clients() {
  const { clients, addClient } = useStore()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('دبي')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !company.trim()) return
    addClient({
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city: city.trim(),
    })
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
            <label>جهة الاتصال</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label>الشركة</label>
            <input value={company} onChange={(e) => setCompany(e.target.value)} required />
          </div>
          <div className="field">
            <label>البريد</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="field">
            <label>الهاتف</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="field">
            <label>المدينة</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} />
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
