export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? 'light' : ''}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden>
        <circle cx="20" cy="20" r="19" fill={light ? '#15172C' : '#15172C'} />
        <circle cx="13" cy="12" r="4.5" fill="#F2BE63" />
        <circle cx="15" cy="10.5" r="4" fill="#15172C" />
        <path d="M1 28c7-5 13-6 19-2.5S32 28 39 23v4a19 19 0 0 1-38 1z" fill="#C46A3A" />
      </svg>
      <span className="word">الخروس</span>
      <style>{`
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          color: var(--ink);
        }
        .logo.light { color: #fff6e7; }
        .logo .word {
          font-family: var(--font-display);
          font-size: 1.55rem;
          line-height: 1;
        }
      `}</style>
    </span>
  )
}
