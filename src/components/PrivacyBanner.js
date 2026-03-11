import Link from 'next/link';

export default function PrivacyBanner() {
  return (
    <section
      style={{
        background: 'var(--primary-05)',
        borderTop: '1px solid rgba(128,128,0,0.12)',
        borderBottom: '1px solid rgba(128,128,0,0.12)',
        paddingTop: 72,
        paddingBottom: 72,
      }}
    >
      <div
        className="max-content"
        style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}
      >
        <div
          className="anim-fade-up"
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'var(--primary-10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 36, color: 'var(--primary)', lineHeight: 1 }}
          >
            shield
          </span>
        </div>

        <h2
          className="anim-fade-up"
          data-delay="80"
          style={{
            fontSize: 'clamp(24px, 3vw, 32px)',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            color: 'var(--text)',
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Your data stays with you. Always.
        </h2>

        <p
          className="anim-fade-up"
          data-delay="160"
          style={{
            fontSize: 16,
            lineHeight: 1.75,
            color: 'var(--subtext)',
            marginBottom: 28,
            maxWidth: 540,
            margin: '0 auto 28px',
          }}
        >
          mySalah requires no account, no sign-up, no email. All your prayer
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
            gap: 6,
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            borderBottom: '2px solid var(--primary)',
            paddingBottom: 2,
            transition: 'opacity 0.2s ease',
          }}
        >
          Read our Privacy Policy
          <span className="material-symbols-outlined" style={{ fontSize: 18, lineHeight: 1 }}>
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}
