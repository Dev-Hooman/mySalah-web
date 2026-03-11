'use client';

import Image from 'next/image';
import { useMockupPath } from '@/hooks/useTheme';

const IslamicPattern = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, opacity: 0.04 }}
    aria-hidden="true"
  >
    <defs>
      <pattern id="islamic-star" x="0" y="0" width="110" height="110" patternUnits="userSpaceOnUse">
        <g transform="translate(55,55)">
          <polygon
            points="55,0 20.3,8.4 38.9,38.9 8.4,20.3 0,55 -8.4,20.3 -38.9,38.9 -20.3,8.4 -55,0 -20.3,-8.4 -38.9,-38.9 -8.4,-20.3 0,-55 8.4,-20.3 38.9,-38.9 20.3,-8.4"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1"
          />
          <polygon
            points="32,0 11.8,4.9 22.6,22.6 4.9,11.8 0,32 -4.9,11.8 -22.6,22.6 -11.8,4.9 -32,0 -11.8,-4.9 -22.6,-22.6 -4.9,-11.8 0,-32 4.9,-11.8 22.6,-22.6 11.8,-4.9"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.5"
            opacity="0.6"
          />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic-star)" className="islamic-pattern-bg" />
  </svg>
);

export default function Hero() {
  const mockup = useMockupPath();
  return (
    <section
      id="hero"
      aria-label="My Salah — Islamic Prayer Tracking App"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 148,
        paddingBottom: 110,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background radial gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, var(--primary-05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Islamic geometric pattern */}
      <IslamicPattern />

      {/* Primary glow behind phone */}
      <div
        className="hero-glow-orb"
        style={{
          position: 'absolute',
          right: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(128,128,0,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Gold accent orb */}
      <div
        className="gold-orb"
        style={{
          position: 'absolute',
          left: '5%',
          top: '25%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="max-content" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 64,
          flexWrap: 'wrap',
        }}>

          {/* Left: Text content */}
          <div style={{ flex: 1, minWidth: 300, maxWidth: 540 }}>

            {/* Eyebrow label */}
            <div className="hero-eyebrow" style={{ marginBottom: 24 }}>
              <span style={{
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
                fontFamily: 'var(--font-jakarta), sans-serif',
              }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 13, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  mosque
                </span>
                Islamic Prayer Companion
              </span>
            </div>

            <h1
              className="hero-headline"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(44px, 5.5vw, 68px)',
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-1px',
                color: 'var(--text)',
                marginBottom: 28,
              }}
            >
              Your prayers,{' '}
              <br />
              <span style={{
                color: 'var(--primary)',
                fontStyle: 'italic',
              }}>
                perfectly
              </span>{' '}
              tracked.
            </h1>

            <p
              className="hero-sub"
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--subtext)',
                marginBottom: 40,
                maxWidth: 460,
                fontWeight: 400,
              }}
            >
              Track all five daily prayers, build sacred streaks, earn
              achievements, and deepen your connection — all in one beautiful,
              offline-first app.
            </p>

            <div
              className="hero-ctas"
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}
            >
              <a href="#download" className="btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
                <img
                  src="/images/android.png"
                  alt=""
                  aria-hidden="true"
                  style={{ width: 19, height: 19, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
                Download for Android
              </a>
              <a href="#features" className="btn-secondary" style={{ fontSize: 15 }}>
                See Features
              </a>
            </div>

            {/* Trust row */}
            <div
              className="hero-trust"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px 20px',
              }}
            >
              {[
                { icon: 'lock', text: 'No account needed' },
                { icon: 'cloud_off', text: 'No data collected' },
                { icon: 'money_off', text: 'Completely free' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: 'var(--subtext)',
                    fontSize: 12.5,
                    fontWeight: 500,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14, color: 'var(--primary)', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div
            className="hero-phone"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              minWidth: 260,
              position: 'relative',
            }}
          >
            {/* Decorative ring behind phone */}
            <div
              style={{
                position: 'absolute',
                width: 360,
                height: 360,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                opacity: 0.5,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                width: 440,
                height: 440,
                borderRadius: '50%',
                border: '1px dashed var(--border)',
                opacity: 0.3,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />

            <div className="hero-phone-float">
              <div className="phone-frame" style={{ width: 275 }}>
                <div className="frame-inner" style={{ cursor: 'default' }}>
                  <Image
                    src={mockup('home-screen.png')}
                    alt="My Salah app home screen showing prayer times, streak tracker, and daily greeting"
                    width={275}
                    height={592}
                    priority
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
