import {
  ALBUM_CATS,
  CMP_CATS,
  EVENT_CATS,
  NEWS_CATS,
  SHOP_CATS,
  SITE,
  SUG_CATS,
  sampleAlbums,
  sampleComplaints,
  sampleContests,
  sampleEvents,
  sampleNews,
  sampleShops,
  sampleSuggestions,
  NEARBY,
} from '../data/catalog'

function LiveNote() {
  return (
    <p className="note">
      هذه واجهة متكاملة للوحدات. للتفاعل الكامل والإدارة افتح{' '}
      <a href={SITE.liveUrl} target="_blank" rel="noreferrer">
        khuoros.ae
      </a>
      .
    </p>
  )
}

export function EventsPage() {
  return (
    <div>
      <div className="page-head">
        <h1>الفعاليات والمناسبات</h1>
        <p>أعراس ومهرجانات ومناسبات أهل الخروس.</p>
      </div>
      <div className="grid-3">
        {sampleEvents.map((e) => (
          <article key={e.id} className="panel item">
            <span className="chip">{EVENT_CATS[e.cat]}</span>
            <h3>{e.title}</h3>
            <p>{e.blurb}</p>
            <div className="meta">
              <span>{e.date}</span>
              <span>{e.place}</span>
            </div>
          </article>
        ))}
      </div>
      <LiveNote />
    </div>
  )
}

export function NewsPage() {
  return (
    <div>
      <div className="page-head">
        <h1>أخبار الخروس</h1>
        <p>تعاميم وخدمات وأخبار الضاحية.</p>
      </div>
      <div className="grid-2">
        {sampleNews.map((n) => (
          <article key={n.id} className="panel item">
            <span className="chip lamp">{NEWS_CATS[n.cat]}</span>
            <h3>{n.title}</h3>
            <p>{n.blurb}</p>
            <div className="meta">
              <span>{n.date}</span>
            </div>
          </article>
        ))}
      </div>
      <LiveNote />
    </div>
  )
}

export function AlbumsPage() {
  return (
    <div>
      <div className="page-head">
        <h1>الألبومات</h1>
        <p>صور الأعراس والمناسبات والحياة في الخروس.</p>
      </div>
      <div className="grid-3">
        {sampleAlbums.map((a) => (
          <article key={a.id} className="panel item">
            <span className="chip">{ALBUM_CATS[a.cat]}</span>
            <h3>{a.title}</h3>
            <p>
              {a.blurb} · {a.count} صورة
            </p>
          </article>
        ))}
      </div>
      <LiveNote />
    </div>
  )
}

export function MarketPage() {
  return (
    <div>
      <div className="page-head">
        <h1>سوق الخروس</h1>
        <p>مشاريع منزلية وتجار صغار من أهل الضاحية.</p>
      </div>
      <div className="grid-3">
        {sampleShops.map((s) => (
          <article key={s.id} className="panel item">
            <span className="chip dune">{SHOP_CATS[s.cat]}</span>
            <h3>{s.name}</h3>
            <p>{s.blurb}</p>
            <div className="meta">
              <span>{s.owner}</span>
            </div>
          </article>
        ))}
      </div>
      <LiveNote />
    </div>
  )
}

export function CommunityPage() {
  return (
    <div>
      <div className="page-head">
        <h1>ملتقى الأهالي</h1>
        <p>مقترحات وبلاغات يمكن متابعتها حتى تُحل.</p>
      </div>
      <div className="grid-2">
        <section className="panel">
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.85rem' }}>مقترحات</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {sampleSuggestions.map((s) => (
              <div key={s.id} style={{ borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                <strong>{s.title}</strong>
                <div className="meta" style={{ marginTop: 6 }}>
                  <span className="chip">{SUG_CATS[s.cat]}</span>
                  <span>{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.85rem' }}>بلاغات</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {sampleComplaints.map((c) => (
              <div key={c.id} style={{ borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                <strong>{c.title}</strong>
                <div className="meta" style={{ marginTop: 6 }}>
                  <span className="chip dune">{CMP_CATS[c.cat]}</span>
                  <span>{c.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <LiveNote />
    </div>
  )
}

export function CompetitionsPage() {
  return (
    <div>
      <div className="page-head">
        <h1>المسابقات ودوري الجوائز</h1>
        <p>مسابقات أهل الخروس وجوائز دورية.</p>
      </div>
      <div className="grid-2">
        {sampleContests.map((t) => (
          <article key={t.id} className="panel item">
            <span className="chip lamp">{t.status}</span>
            <h3>{t.title}</h3>
            <p>الجائزة: {t.prize}</p>
          </article>
        ))}
      </div>
      <LiveNote />
    </div>
  )
}

export function HeritagePage() {
  return (
    <div>
      <div className="page-head">
        <h1>ذاكرة الآباء والأهالي</h1>
        <p>قصص وتراث من ضاحية الخروس والذيد.</p>
      </div>
      <div className="grid-2">
        {[
          {
            title: 'فلج الذيد',
            text: 'نظام ري تاريخي يروي واحة الذيد وما حولها، جزء من ذاكرة المنطقة الوسطى.',
          },
          {
            title: 'حصن الذيد',
            text: 'حصن مرمّم يروي حكاية المكان والدفاع عن الواحة عبر الأجيال.',
          },
        ].map((x) => (
          <article key={x.title} className="panel item">
            <h3>{x.title}</h3>
            <p>{x.text}</p>
          </article>
        ))}
      </div>
      <LiveNote />
    </div>
  )
}

export function EducationPage() {
  return (
    <div>
      <div className="page-head">
        <h1>تعلّم في الخروس</h1>
        <p>ورش ومسارات تعليمية لأهل الضاحية.</p>
      </div>
      <div className="grid-3">
        {[
          { title: 'ورشة خط عربي', text: 'للصغار والكبار بالشراكة مع مركز الثقافة.' },
          { title: 'أساسيات المشاريع المنزلية', text: 'كيف تبدأ متجرك على سوق الخروس.' },
          { title: 'سلامة الحي', text: 'إرشادات منزلية وإخلاء بسيط للعائلة.' },
        ].map((x) => (
          <article key={x.title} className="panel item">
            <h3>{x.title}</h3>
            <p>{x.text}</p>
          </article>
        ))}
      </div>
      <LiveNote />
    </div>
  )
}

export function DirectoryPage() {
  return (
    <div>
      <div className="page-head">
        <h1>دليل المحلات والأماكن</h1>
        <p>خدمات وترفيه حول ضاحية الخروس والذيد.</p>
      </div>
      <div className="grid-2">
        <section className="panel">
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>خدمات قريبة</h2>
          {NEARBY.services.map((x) => (
            <div key={x.name} style={{ marginBottom: '0.85rem' }}>
              <strong>{x.name}</strong>
              <p style={{ color: 'var(--muted)', marginTop: 4 }}>
                {x.cat} · {x.where}
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{x.note}</p>
            </div>
          ))}
        </section>
        <section className="panel">
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>ترفيه وتراث</h2>
          {NEARBY.fun.map((x) => (
            <div key={x.name} style={{ marginBottom: '0.85rem' }}>
              <strong>{x.name}</strong>
              <p style={{ color: 'var(--muted)', marginTop: 4 }}>
                {x.cat} · {x.where}
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{x.note}</p>
            </div>
          ))}
        </section>
      </div>
      <LiveNote />
    </div>
  )
}

export function AssistantPage() {
  return (
    <div>
      <div className="page-head">
        <h1>مساعد الخروس</h1>
        <p>إجابات سريعة عن أقسام المنصة وخدمات الحي.</p>
      </div>
      <div className="panel" style={{ maxWidth: 640, display: 'grid', gap: '0.85rem' }}>
        {[
          'كيف أنشر فعالية عرس؟',
          'أين أتابع بلاغ الإنارة؟',
          'كيف أفتح مشروعي في السوق؟',
        ].map((q) => (
          <div key={q} style={{ padding: '0.85rem', background: 'var(--sunk)', borderRadius: 12 }}>
            {q}
          </div>
        ))}
        <a className="btn btn-accent" href={`${SITE.liveUrl}assistant`} target="_blank" rel="noreferrer">
          فتح المساعد على الموقع الحي
        </a>
      </div>
    </div>
  )
}

export function AccountPage() {
  return (
    <div>
      <div className="page-head">
        <h1>حساب الأهالي</h1>
        <p>تسجيل الدخول أو إنشاء حساب للمشاركة في المنصة.</p>
      </div>
      <div className="panel" style={{ maxWidth: 480, display: 'grid', gap: '0.85rem' }}>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
          الحسابات والإدارة تعمل على النسخة الحية لضمان أمان البيانات والإشعارات.
        </p>
        <a className="btn btn-night" href={`${SITE.liveUrl}account?mode=login`} target="_blank" rel="noreferrer">
          دخول الحساب
        </a>
        <a className="btn btn-accent" href={`${SITE.liveUrl}account?mode=register`} target="_blank" rel="noreferrer">
          حساب جديد
        </a>
      </div>
    </div>
  )
}
