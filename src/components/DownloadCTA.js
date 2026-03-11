export default function DownloadCTA() {
  return (
    <section
      id="download"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: 'var(--background)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--primary-05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-content" style={{ position: 'relative', zIndex: 1 }}>
        {/* Decorative diamond */}
        <div
          className="anim-fade-up"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 32,
            alignItems: 'center',
          }}
        >
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--border))' }} />
          <div
            style={{
              width: 10,
              height: 10,
              background: 'var(--primary)',
              transform: 'rotate(45deg)',
              borderRadius: 2,
              opacity: 0.6,
            }}
          />
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--border))' }} />
        </div>

        <h2
          className="anim-fade-up"
          data-delay="80"
          style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            color: 'var(--text)',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Begin your journey today
        </h2>

        <p
          className="anim-fade-up"
          data-delay="160"
          style={{
            fontSize: 20,
            color: 'var(--subtext)',
            marginBottom: 44,
            fontWeight: 500,
            letterSpacing: '1px',
          }}
        >
          Free. Private. Beautiful.
        </p>

        <div
          className="anim-fade-up"
          data-delay="240"
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
              padding: '16px 40px',
              boxShadow: '0 4px 24px rgba(128,128,0,0.25)',
            }}
          >
            <img src="/images/android.png" alt="Android" style={{ width: 24, height: 24, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            Download for Android
          </a>

          <p style={{ fontSize: 13, color: 'var(--subtext)', marginTop: 4, fontStyle: 'italic' }}>
            iOS coming soon
          </p>
        </div>

        {/* Trust badges */}
        <div
          className="anim-fade-up"
          data-delay="320"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
            marginTop: 52,
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
                gap: 8,
                color: 'var(--subtext)',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18, color: 'var(--primary)', lineHeight: 1 }}
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
