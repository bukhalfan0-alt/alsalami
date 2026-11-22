export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-logo ${light ? 'light' : ''}`} aria-label="مسار">
      <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect width="64" height="64" rx="14" fill={light ? '#fff' : '#071A22'} />
        <path
          d="M14 40c8-18 16-26 28-28"
          stroke={light ? '#2D9B8A' : '#2D9B8A'}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M18 46c10-14 18-20 32-22"
          stroke={light ? '#E8A838' : '#E8A838'}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <span className="word">مسار</span>
      <style>{`
        .brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--display);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.03em;
          color: var(--ink);
        }
        .brand-logo.light { color: #fff; }
        .brand-logo .word { line-height: 1; }
      `}</style>
    </span>
  )
}
