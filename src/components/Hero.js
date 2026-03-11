'use client';

import Image from 'next/image';

const IslamicPattern = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, opacity: 0.035 }}
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
            stroke="var(--primary)"
            strokeWidth="0.7"
          />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic-star)" className="islamic-pattern-bg" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 140,
        paddingBottom: 100,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Geometric background pattern */}
      <IslamicPattern />

      {/* Olive glow behind phone */}
      <div
        className="hero-glow-orb"
        style={{
          position: 'absolute',
          right: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(128,128,0,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-content" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 60,
          flexWrap: 'wrap',
        }}>
          {/* Left: Text content */}
          <div style={{ flex: 1, minWidth: 300, maxWidth: 520 }}>
            <p className="section-eyebrow hero-eyebrow" style={{ marginBottom: 20 }}>
              Islamic Prayer Companion
            </p>

            <h1
              className="hero-headline"
              style={{
                fontSize: 'clamp(38px, 5vw, 58px)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-1.5px',
                color: 'var(--text)',
                marginBottom: 24,
              }}
            >
              Your prayers,{' '}
              <br />
              <span style={{ color: 'var(--primary)' }}>perfectly</span>{' '}
              tracked.
            </h1>

            <p
              className="hero-sub"
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: 'var(--subtext)',
                marginBottom: 36,
                maxWidth: 460,
              }}
            >
              Track all five daily prayers, build sacred streaks, earn
              achievements, and deepen your connection — all in one beautiful,
              offline-first app.
            </p>

            <div
              className="hero-ctas"
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}
            >
              <a href="#download" className="btn-primary">
                <img src="/images/android.png" alt="Android" style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                Download for Android
              </a>
              <a href="#features" className="btn-secondary">
                See Features
              </a>
            </div>

            <div
              className="hero-trust"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: 'var(--subtext)',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16, color: 'var(--primary)', lineHeight: 1 }}
              >
                lock
              </span>
              No account needed. No data collected. Completely free.
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
              minWidth: 240,
            }}
          >
            <div className="hero-phone-float">
              <div className="phone-frame" style={{ width: 270 }}>
                <div className="frame-inner" style={{ cursor: 'default' }}>
                  <Image
                    src="/images/mockups/home-screen.png"
                    alt="mySalah Home Screen — Prayer times, streak, and greeting"
                    width={270}
                    height={580}
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
