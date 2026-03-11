import Link from 'next/link';

export default function PrivacyBanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, var(--primary-05) 0%, var(--accent-light) 100%)',
        borderTop: '1px solid rgba(74,103,65,0.12)',
        borderBottom: '1px solid rgba(74,103,65,0.12)',
        paddingTop: 80,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background element */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: 500,
          borderRadius: '50%',
          border: '1px dashed rgba(74,103,65,0.1)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div
        className="max-content"
        style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', position: 'relative' }}
      >
        {/* Icon */}
        <div
          className="anim-fade-up"
          style={{
            width: 76,
            height: 76,
            borderRadius: '50%',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-md), var(--shadow-glow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 36, color: 'var(--primary)', lineHeight: 1 }}
            aria-hidden="true"
          >
            shield
          </span>
        </div>

        <h2
          className="anim-fade-up"
          data-delay="80"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            letterSpacing: '-0.3px',
            color: 'var(--text)',
            marginBottom: 18,
            lineHeight: 1.15,
          }}
        >
          Your data stays with you.{' '}
          <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Always.</span>
        </h2>

        <p
          className="anim-fade-up"
          data-delay="160"
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: 'var(--subtext)',
            marginBottom: 32,
            maxWidth: 520,
            margin: '0 auto 32px',
          }}
        >
          My Salah requires no account, no sign-up, no email. All your prayer
          records, streaks, and achievements are stored locally on your device.
          We don&apos;t collect, transmit, or store any personal data. Period.
        </p>

        <Link
          href="/privacy"
          className="anim-fade-up"
          data-delay="240"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            borderBottom: '1.5px solid var(--primary)',
            paddingBottom: 3,
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}
        >
          Read our Privacy Policy
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 17, lineHeight: 1 }}
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}
