import { Link } from 'react-router-dom'
import {
  SITE,
  sampleAlbums,
  sampleEvents,
  sampleNews,
  sampleShops,
} from '../data/catalog'
import './home.css'

const HERO =
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-media" style={{ backgroundImage: `url(${HERO})` }} />
        <div className="hero-veil" />
        <div className="hero-copy">
          <p className="place fade-up">{SITE.place}</p>
          <h1 className="fade-up-delay">{SITE.name}</h1>
          <p className="tag fade-up-delay">{SITE.tagline}</p>
          <p className="lead fade-up-delay-2">{SITE.hero}</p>
          <div className="cta fade-up-delay-2">
            <Link to="/events" className="btn btn-accent">
              الفعاليات
            </Link>
            <Link to="/market" className="btn btn-dune">
              سوق الخروس
            </Link>
            <a className="btn btn-ghost light" href={SITE.liveUrl} target="_blank" rel="noreferrer">
              فتح khuoros.ae
            </a>
          </div>
        </div>
      </section>

      <section className="hub">
        <div className="section-head">
          <h2>وحدات المنصة</h2>
          <p>كل ما يحتاجه أهل الخروس في مسار واحد منظّم.</p>
        </div>
        <div className="hub-grid">
          {[
            { to: '/events', title: 'الفعاليات', text: 'أعراس ومهرجانات ومناسبات الحي.' },
            { to: '/news', title: 'الأخبار', text: 'تعاميم وخدمات وأخبار الضاحية.' },
            { to: '/albums', title: 'الألبومات', text: 'صور المناسبات والحياة اليومية.' },
            { to: '/market', title: 'السوق', text: 'مشاريع منزلية وتجار صغار.' },
            { to: '/community', title: 'الملتقى', text: 'مقترحات وبلاغات ومتابعة.' },
            { to: '/competitions', title: 'المسابقات', text: 'مسابقات الأهالي ودوري الجوائز.' },
            { to: '/heritage', title: 'التراث', text: 'ذاكرة الآباء والحي.' },
            { to: '/education', title: 'التعليم', text: 'ورش ومسارات تعلم محلية.' },
            { to: '/directory', title: 'الدليل', text: 'محلات وخدمات قريبة.' },
          ].map((m) => (
            <Link key={m.to} to={m.to} className="hub-card panel">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="preview">
        <div className="section-head row">
          <div>
            <h2>قريباً في الضاحية</h2>
            <p>عيّنة من الفعاليات المنشورة على المنصة.</p>
          </div>
          <Link to="/events" className="btn btn-ghost">
            الكل
          </Link>
        </div>
        <div className="grid-3">
          {sampleEvents.map((e) => (
            <article key={e.id} className="panel item">
              <span className="chip">{e.date}</span>
              <h3>{e.title}</h3>
              <p>{e.blurb}</p>
              <div className="meta">
                <span>{e.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="preview">
        <div className="section-head row">
          <div>
            <h2>من السوق والأخبار والألبومات</h2>
            <p>نبذة سريعة من محتوى المنصة المتكامل.</p>
          </div>
        </div>
        <div className="grid-3">
          {sampleShops.slice(0, 1).map((s) => (
            <article key={s.id} className="panel item">
              <span className="chip dune">السوق</span>
              <h3>{s.name}</h3>
              <p>{s.blurb}</p>
            </article>
          ))}
          {sampleNews.slice(0, 1).map((n) => (
            <article key={n.id} className="panel item">
              <span className="chip lamp">أخبار</span>
              <h3>{n.title}</h3>
              <p>{n.blurb}</p>
            </article>
          ))}
          {sampleAlbums.slice(0, 1).map((a) => (
            <article key={a.id} className="panel item">
              <span className="chip">ألبوم</span>
              <h3>{a.title}</h3>
              <p>
                {a.blurb} · {a.count} صورة
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about panel">
        <h2>عن الخروس</h2>
        <p>{SITE.about}</p>
      </section>
    </div>
  )
}
