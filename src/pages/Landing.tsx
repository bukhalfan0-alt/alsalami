import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import './landing.css'

const HERO =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80'

export default function Landing() {
  return (
    <div className="landing">
      <header className="topbar fade-up">
        <Logo light />
        <nav>
          <a href="#modules">الوحدات</a>
          <a href="#flow">كيف تعمل</a>
          <Link to="/login" className="btn btn-soft">
            دخول المنصة
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media" style={{ backgroundImage: `url(${HERO})` }} />
        <div className="hero-veil" />
        <div className="hero-copy">
          <Logo light />
          <h1 className="fade-up">شغّل عملك من مسار واحد</h1>
          <p className="fade-up-delay">
            منصة تشغيل متكاملة تجمع المشاريع والعملاء والمهام والمالية في تجربة عربية سلسة.
          </p>
          <div className="hero-cta fade-up-delay-2">
            <Link to="/login" className="btn btn-accent">
              ابدأ الآن
            </Link>
            <a href="#modules" className="btn btn-soft">
              استكشف الوحدات
            </a>
          </div>
        </div>
      </section>

      <section id="modules" className="modules">
        <div className="section-head">
          <h2>كل ما تحتاجه في منصة واحدة</h2>
          <p>وحدات مترابطة تغطي دورة العمل من أول عميل حتى آخر فاتورة.</p>
        </div>
        <div className="module-grid">
          {[
            {
              title: 'المشاريع',
              text: 'تتبّع التقدم والميزانيات ومواعيد التسليم لكل مشروع.',
            },
            {
              title: 'العملاء',
              text: 'سجل موحّد للشركات وجهات الاتصال والمدن.',
            },
            {
              title: 'المهام',
              text: 'لوحة حالات واضحة: للإنجاز، قيد العمل، مكتمل.',
            },
            {
              title: 'المالية',
              text: 'فواتير مدفوعة ومعلّقة ومتأخرة بنظرة واحدة.',
            },
          ].map((m) => (
            <article key={m.title} className="module-item">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="flow" className="flow">
        <div className="section-head">
          <h2>مسار عمل واضح</h2>
          <p>ثلاث خطوات تفصل بين الفوضى والتشغيل المنظم.</p>
        </div>
        <ol className="steps">
          <li>
            <span>١</span>
            <div>
              <strong>أدخل عملاءك</strong>
              <p>ابنِ قاعدة العملاء في ثوانٍ.</p>
            </div>
          </li>
          <li>
            <span>٢</span>
            <div>
              <strong>افتح المشاريع والمهام</strong>
              <p>وزّع العمل وتابع الإنجاز يوميًا.</p>
            </div>
          </li>
          <li>
            <span>٣</span>
            <div>
              <strong>صدّر الفواتير وتابع التحصيل</strong>
              <p>اعرف ما دفع وما تأخر فورًا.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="closing">
        <div className="closing-panel">
          <h2>جاهز لتشغيل عملك؟</h2>
          <p>ادخل المنصة الآن وجرّب البيانات التجريبية، ثم أضف بياناتك مباشرة.</p>
          <Link to="/login" className="btn btn-primary">
            الدخول إلى مسار
          </Link>
        </div>
      </section>

      <footer className="foot">
        <Logo />
        <p>مسار — منصة تشغيل متكاملة © 2026</p>
      </footer>
    </div>
  )
}
