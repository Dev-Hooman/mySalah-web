import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        paddingTop: 48,
        paddingBottom: 40,
      }}
    >
      <div className="max-content">
        {/* Main footer row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 40,
            flexWrap: 'wrap',
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div style={{ minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Image
                src="/icon.png"
                alt="mySalah"
                width={32}
                height={32}
                style={{ borderRadius: 8 }}
              />
              <span style={{ fontWeight: 800, fontSize: 18, color: 'var(--text)', letterSpacing: '-0.3px' }}>
                mySalah
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6, maxWidth: 220 }}>
              Your Islamic prayer companion
            </p>
          </div>

          {/* Links */}
          <nav style={{ display: 'flex', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                App
              </span>
              <a href="#features" className="footer-link">Features</a>
              <a href="#screenshots" className="footer-link">Screenshots</a>
              <a href="#download" className="footer-link">Download</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Legal
              </span>
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />

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
            © 2026 mySalah. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'var(--subtext)' }}>
            Made with ❤️ for the Muslim Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}
