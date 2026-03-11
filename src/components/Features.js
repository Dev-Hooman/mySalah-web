const features = [
  {
    icon: 'schedule',
    title: 'Prayer Tracking',
    description:
      'Track all five daily prayers with a single tap. Know instantly if you prayed on time, late, or missed — with smart locking to prevent accidental changes.',
  },
  {
    icon: 'local_fire_department',
    title: 'Sacred Streaks',
    description:
      'Build consecutive days of perfect prayer. Hit milestones at 7, 30, 90, and 365 days. Your streak is your spiritual momentum.',
  },
  {
    icon: 'emoji_events',
    title: '30 Achievements',
    description:
      'Earn Bronze to Diamond tier achievements across 6 categories. Hidden achievements reveal themselves when unlocked. Gamified growth that keeps you motivated.',
  },
  {
    icon: 'bar_chart',
    title: 'Deep Analytics',
    description:
      'Weekly and monthly charts, prayer-specific breakdowns, 30-day heatmaps, and letter grades (A+ to F). Understand your patterns like never before.',
  },
  {
    icon: 'auto_stories',
    title: 'Daily Inspiration',
    description:
      'Fresh Quranic verse and authenticated Hadiths every day — in English, Urdu, and Arabic. Plus the 99 Names of Allah in a swipeable card deck.',
  },
  {
    icon: 'explore',
    title: 'Qibla & Mosques',
    description:
      'Real-time Qibla compass with haptic alignment feedback. Find nearby mosques on an interactive map with walking routes and navigation.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: 'var(--background)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse, var(--primary-05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="max-content" style={{ position: 'relative' }}>
        {/* Section header */}
        <div
          className="anim-fade-up"
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 20, justifyContent: 'center' }}>
            What&apos;s Inside
          </p>
          <h2
            id="features-heading"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 46px)',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: 18,
            }}
          >
            Everything you need for your{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>spiritual journey</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'var(--subtext)',
              lineHeight: 1.75,
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            Built for Muslims who want consistency, clarity, and connection.
          </p>
        </div>

        {/* Feature grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: 22,
          }}
        >
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className="feature-card anim-fade-up"
              data-delay={i * 90}
            >
              <div className="card-icon">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 26, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 10,
                  letterSpacing: '-0.1px',
                  lineHeight: 1.2,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--subtext)',
                }}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
