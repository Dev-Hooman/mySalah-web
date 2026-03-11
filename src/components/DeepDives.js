import Image from 'next/image';

const SectionDivider = () => (
  <div className="section-divider" style={{ margin: '0 auto 80px', padding: '0 24px' }}>
    <div className="div-line" />
    <div className="div-gem" />
    <div className="div-gem" style={{ opacity: 0.2 }} />
    <div className="div-gem" />
    <div className="div-line" />
  </div>
);

function PhoneMockup({ src, alt, delay = 0 }) {
  return (
    <div
      className="anim-fade-up"
      data-delay={delay}
      style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}
    >
      <div className="phone-frame" style={{ width: 260 }}>
        <div className="frame-inner">
          <Image
            src={src}
            alt={alt}
            width={260}
            height={560}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function Bullet({ children, delay = 0 }) {
  return (
    <li
      className="anim-fade-up"
      data-delay={delay}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        marginBottom: 12,
        listStyle: 'none',
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: 18, color: 'var(--primary)', flexShrink: 0, marginTop: 1, lineHeight: 1.4 }}
      >
        check_circle
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--subtext)' }}>
        {children}
      </span>
    </li>
  );
}

function TierRow() {
  const tiers = [
    { label: 'Bronze',   color: '#CD7F32' },
    { label: 'Silver',   color: '#C0C0C0' },
    { label: 'Gold',     color: '#FFD700' },
    { label: 'Platinum', color: '#E5E4E2' },
    { label: 'Diamond',  color: '#B9F2FF' },
    { label: 'Special',  color: '#9370DB' },
  ];
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginTop: 24,
        padding: '16px 20px',
        background: 'var(--surface)',
        borderRadius: 12,
        border: '1px solid var(--border)',
      }}
    >
      {tiers.map((t) => (
        <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: t.color,
              boxShadow: `0 0 6px ${t.color}60`,
            }}
          />
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--subtext)', letterSpacing: '0.3px' }}>
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const deepDives = [
  {
    title: 'Track every prayer, every day',
    note: 'Powered by Aladhan API — accurate times for 22+ cities worldwide',
    image: '/images/mockups/home-screen.png',
    alt: 'mySalah home screen showing prayer times',
    bullets: [
      'One-tap prayer logging with automatic time detection',
      'Smart status system: Current, Next, Upcoming, Missed',
      'Locking prevents accidental changes once the next prayer starts',
      'Prayer windows from Fajr through Isha — based on your city',
    ],
  },
  {
    title: 'Turn consistency into visible progress',
    image: '/images/mockups/achievements.png',
    alt: 'mySalah achievements screen',
    bullets: [
      '30 achievements across Bronze, Silver, Gold, Platinum, Diamond, and Special tiers',
      'Streak milestones: 7-day, 30-day, 90-day, 365-day marks with celebrations',
      'Hidden achievements that reveal themselves when unlocked',
      'Points system — track your total score as you grow',
    ],
    extra: <TierRow />,
  },
  {
    title: 'Understand your prayer patterns',
    image: '/images/mockups/analytic-screen.png',
    alt: 'mySalah analytics overview',
    bullets: [
      'Letter grades from A+ to F based on your completion rate',
      'Weekly and monthly bar charts — tap any day for details',
      'Prayer-specific completion rates with 7-day color-coded history',
      '30-day heatmap showing your consistency at a glance',
      "Trend tracking — see if you're improving or declining",
    ],
  },
  {
    title: 'Daily spiritual nourishment',
    image: '/images/mockups/dailyVerse-screen.png',
    alt: 'mySalah daily verse parchment card',
    bullets: [
      'A new Quranic verse every day — Arabic with English and Urdu translations',
      'Authenticated Hadiths refreshed daily with narrator and source details',
      '99 Names of Allah in a beautiful swipeable card deck',
      'Custom Dhikr counter — create your own remembrance with target goals',
      'Share verses and hadiths as beautiful images',
    ],
  },
  {
    title: 'Find your direction, find your community',
    image: '/images/mockups/qiblaFinder-screen.png',
    alt: 'mySalah Qibla compass',
    bullets: [
      'Real-time Qibla compass using device sensors',
      'Haptic feedback when you\'re aligned with Makkah',
      'Interactive map showing nearby mosques',
      'Walking routes and one-tap navigation to any mosque',
    ],
  },
];

export default function DeepDives() {
  return (
    <section
      id="deep-dives"
      style={{
        paddingTop: 96,
        paddingBottom: 32,
        background: 'var(--background)',
      }}
    >
      <div className="max-content">
        <div className="anim-fade-up" style={{ textAlign: 'center', marginBottom: 80 }}>
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>
            Feature Deep Dives
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.7px',
              color: 'var(--text)',
              lineHeight: 1.2,
            }}
          >
            Built for every moment of your spiritual journey
          </h2>
        </div>

        {deepDives.map((dive, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={dive.title}>
              <div
                className="deep-dive-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(40px, 6vw, 80px)',
                  flexWrap: 'wrap',
                  marginBottom: 80,
                  justifyContent: 'center',
                }}
              >
                {/* Mockup: left on even, right on odd */}
                {isEven && (
                  <PhoneMockup src={dive.image} alt={dive.alt} delay={0} />
                )}

                {/* Text content */}
                <div style={{ flex: 1, minWidth: 280, maxWidth: 480 }}>
                  <h3
                    className="anim-fade-up"
                    style={{
                      fontSize: 'clamp(22px, 2.5vw, 28px)',
                      fontWeight: 700,
                      letterSpacing: '-0.5px',
                      color: 'var(--text)',
                      marginBottom: 24,
                      lineHeight: 1.25,
                    }}
                  >
                    {dive.title}
                  </h3>
                  <ul style={{ padding: 0, margin: 0 }}>
                    {dive.bullets.map((bullet, bi) => (
                      <Bullet key={bi} delay={bi * 70}>
                        {bullet}
                      </Bullet>
                    ))}
                  </ul>
                  {dive.extra && dive.extra}
                  {dive.note && (
                    <p
                      className="anim-fade-up"
                      data-delay={dive.bullets.length * 70 + 80}
                      style={{
                        marginTop: 20,
                        fontSize: 12,
                        color: 'var(--subtext)',
                        fontStyle: 'italic',
                        borderLeft: '2px solid var(--primary)',
                        paddingLeft: 12,
                        opacity: 0.7,
                      }}
                    >
                      {dive.note}
                    </p>
                  )}
                </div>

                {/* Mockup: right on odd */}
                {!isEven && (
                  <PhoneMockup src={dive.image} alt={dive.alt} delay={0} />
                )}
              </div>

              {idx < deepDives.length - 1 && <SectionDivider />}
            </div>
          );
        })}
      </div>

    </section>
  );
}
