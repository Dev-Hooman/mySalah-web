import FeedbackForm from './FeedbackForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Feedback | My Salah',
  description:
    'Share a bug report, UI feedback, feature request, or any other thoughts about My Salah. We read every message.',
};

export default function FeedbackPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '100vh',
          paddingTop: 100,
          paddingBottom: 80,
          background: 'var(--background)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background accents */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, var(--primary-05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        <div className="max-content" style={{ position: 'relative', zIndex: 1 }}>
          {/* Page header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 16px',
                  borderRadius: 9999,
                  background: 'var(--accent-light)',
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                  color: 'var(--accent)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 13, lineHeight: 1 }} aria-hidden="true">
                  forum
                </span>
                We&apos;re listening
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.5px',
                color: 'var(--text)',
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Share your{' '}
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>feedback</span>
            </h1>

            <p
              style={{
                fontSize: 16,
                color: 'var(--subtext)',
                lineHeight: 1.75,
                maxWidth: 500,
                margin: '0 auto',
              }}
            >
              Found a bug? Have an idea? Something feels off? We read every
              message and use your feedback to make My Salah better.
            </p>
          </div>

          {/* Form card */}
          <div
            style={{
              maxWidth: 660,
              margin: '0 auto',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              padding: 'clamp(28px, 5vw, 48px)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <FeedbackForm />
          </div>

          {/* Contact note */}
          <p
            style={{
              textAlign: 'center',
              marginTop: 28,
              fontSize: 13,
              color: 'var(--subtext)',
              lineHeight: 1.6,
            }}
          >
            Or email us directly at{' '}
            <a
              href="mailto:mysalahnativeapp@gmail.com"
              style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}
            >
              mysalahnativeapp@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
