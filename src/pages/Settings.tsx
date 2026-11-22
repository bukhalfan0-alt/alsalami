import { useStore } from '../store'

export default function Settings() {
  const { session, resetSample } = useStore()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>الإعدادات</h1>
          <p>ملف الجهة والبيانات المحلية للمنصة.</p>
        </div>
      </div>

      <section className="panel" style={{ maxWidth: 560, display: 'grid', gap: '1rem' }}>
        <div>
          <div style={{ color: 'var(--muted)', marginBottom: 4 }}>الاسم</div>
          <strong>{session?.name}</strong>
        </div>
        <div>
          <div style={{ color: 'var(--muted)', marginBottom: 4 }}>البريد</div>
          <strong>{session?.email}</strong>
        </div>
        <div>
          <div style={{ color: 'var(--muted)', marginBottom: 4 }}>الجهة</div>
          <strong>{session?.org}</strong>
        </div>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1rem' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '0.85rem', lineHeight: 1.7 }}>
            تُحفظ بياناتك محليًا في المتصفح. يمكنك إعادة تحميل البيانات التجريبية في أي وقت.
          </p>
          <button type="button" className="btn btn-primary" onClick={resetSample}>
            إعادة البيانات التجريبية
          </button>
        </div>
      </section>
    </div>
  )
}
