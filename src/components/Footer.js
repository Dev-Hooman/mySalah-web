import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        paddingTop: 52,
        paddingBottom: 44,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient top accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 200,
          height: 2,
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <div className="max-content">
        {/* Main footer row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 44,
            flexWrap: 'wrap',
            marginBottom: 44,
          }}
        >
          {/* Brand */}
          <div style={{ minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Image
                src="/icon.png"
                alt="My Salah app icon"
                width={34}
                height={34}
                style={{ borderRadius: 9, boxShadow: '0 2px 8px rgba(128,128,0,0.2)' }}
              />
              <span style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 700,
                fontSize: 20,
                color: 'var(--text)',
                letterSpacing: '-0.2px',
              }}>
                My Salah
              </span>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--subtext)', lineHeight: 1.65, maxWidth: 220 }}>
              Your Islamic prayer companion
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" style={{ display: 'flex', gap: 36 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--accent)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
                App
              </span>
              <a href="#features" className="footer-link">Features</a>
              <a href="#screenshots" className="footer-link">Screenshots</a>
              <a href="#download" className="footer-link">Download</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--accent)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
                Legal
              </span>
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 28 }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--subtext)' }}>
            &copy; 2026 My Salah. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'var(--subtext)' }}>
            Made with ❤️ for the Muslim Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}
