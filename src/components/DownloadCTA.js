export default function DownloadCTA() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      style={{
        paddingTop: 110,
        paddingBottom: 110,
        background: 'var(--background)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accents */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 640,
          height: 640,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--primary-05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="max-content" style={{ position: 'relative', zIndex: 1 }}>
        {/* Decorative vertical connector */}
        <div
          className="anim-fade-up"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            marginBottom: 36,
          }}
          aria-hidden="true"
        >
          <div style={{ width: 1, height: 52, background: 'linear-gradient(to bottom, transparent, var(--accent))' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 1, height: 52, background: 'linear-gradient(to bottom, var(--accent), transparent)', position: 'absolute', opacity: 0, pointerEvents: 'none' }} />
            <div
              style={{
                width: 10,
                height: 10,
                background: 'var(--accent)',
                transform: 'rotate(45deg)',
                borderRadius: 2,
                boxShadow: '0 0 12px rgba(201,168,76,0.5)',
              }}
            />
          </div>
        </div>

        <h2
          id="download-heading"
          className="anim-fade-up"
          data-delay="60"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(36px, 4.5vw, 58px)',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            color: 'var(--text)',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Begin your journey{' '}
          <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>today</span>
        </h2>

        <p
          className="anim-fade-up"
          data-delay="130"
          style={{
            fontSize: 19,
            color: 'var(--subtext)',
            marginBottom: 48,
            fontWeight: 500,
            letterSpacing: '0.5px',
          }}
        >
          Free. Private. Beautiful.
        </p>

        <div
          className="anim-fade-up"
          data-delay="200"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <a
            href="#"
            className="btn-primary"
            style={{
              fontSize: 17,
              padding: '16px 44px',
              boxShadow: '0 6px 28px rgba(128,128,0,0.3), 0 2px 8px rgba(0,0,0,0.1)',
              gap: 10,
            }}
          >
            <img
              src="/images/android.png"
              alt=""
              aria-hidden="true"
              style={{ width: 22, height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            Download for Android
          </a>

          <p style={{ fontSize: 12.5, color: 'var(--subtext)', marginTop: 2, fontStyle: 'italic', opacity: 0.8 }}>
            iOS coming soon
          </p>
        </div>

        {/* Trust badges */}
        <div
          className="anim-fade-up"
          data-delay="280"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px 36px',
            marginTop: 56,
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: 'lock', label: 'Zero accounts' },
            { icon: 'cloud_off', label: 'No cloud sync' },
            { icon: 'wifi_off', label: 'Works offline' },
            { icon: 'money_off', label: 'Completely free' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                color: 'var(--subtext)',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16, color: 'var(--primary)', lineHeight: 1 }}
                aria-hidden="true"
              >
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
