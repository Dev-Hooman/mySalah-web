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
      style={{
        paddingTop: 96,
        paddingBottom: 96,
        background: 'var(--background)',
      }}
    >
      <div className="max-content">
        {/* Section header */}
        <div
          className="anim-fade-up"
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>
            What&apos;s Inside
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 700,
              letterSpacing: '-0.8px',
              color: 'var(--text)',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Everything you need for your spiritual journey
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'var(--subtext)',
              lineHeight: 1.7,
              maxWidth: 500,
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="feature-card anim-fade-up"
              data-delay={i * 80}
            >
              <div className="card-icon">
                <span className="material-symbols-outlined" style={{ fontSize: 26, lineHeight: 1 }}>
                  {feature.icon}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 10,
                  letterSpacing: '-0.2px',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'var(--subtext)',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
