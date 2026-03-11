import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — mySalah',
  description:
    'mySalah collects no personal data. All your prayer records stay on your device. Read our full privacy policy.',
};

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 16,
          letterSpacing: '-0.3px',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function P({ children, style }) {
  return (
    <p
      style={{
        fontSize: 15,
        lineHeight: 1.8,
        color: 'var(--subtext)',
        marginBottom: 14,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function UL({ children }) {
  return (
    <ul style={{ paddingLeft: 0, margin: '0 0 14px', listStyle: 'none' }}>
      {children}
    </ul>
  );
}

function LI({ children }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        marginBottom: 10,
        fontSize: 15,
        lineHeight: 1.7,
        color: 'var(--subtext)',
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: 16, color: 'var(--primary)', flexShrink: 0, marginTop: 2, lineHeight: 1.5 }}
      >
        remove
      </span>
      {children}
    </li>
  );
}

export default function PrivacyPage() {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 14,
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    border: '1px solid var(--border)',
  };
  const thStyle = {
    textAlign: 'left',
    padding: '10px 14px',
    background: 'var(--surface)',
    color: 'var(--text)',
    fontWeight: 600,
    fontSize: 13,
    borderBottom: '1px solid var(--border)',
  };
  const tdStyle = {
    padding: '10px 14px',
    borderBottom: '1px solid var(--border)',
    color: 'var(--subtext)',
    verticalAlign: 'top',
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          {/* Back link */}
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 14,
              color: 'var(--subtext)',
              textDecoration: 'none',
              marginBottom: 40,
              fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18, lineHeight: 1 }}>
              arrow_back
            </span>
            Back to mySalah
          </Link>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--primary-10)',
                borderRadius: 9999,
                padding: '6px 14px',
                marginBottom: 20,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--primary)', lineHeight: 1 }}>
                shield
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Privacy Policy
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                letterSpacing: '-1px',
                color: 'var(--text)',
                marginBottom: 14,
                lineHeight: 1.15,
              }}
            >
              Your privacy is our priority.
            </h1>
            <p style={{ fontSize: 16, color: 'var(--subtext)', lineHeight: 1.7, marginBottom: 12 }}>
              mySalah is built with privacy by design.
            </p>
            <p style={{ fontSize: 13, color: 'var(--subtext)', fontStyle: 'italic' }}>
              Effective Date: March 2026 &nbsp;·&nbsp; Last Updated: March 2026
            </p>
          </div>

          {/* Highlight box */}
          <div
            style={{
              background: 'var(--primary-05)',
              border: '1px solid rgba(128,128,0,0.2)',
              borderRadius: 12,
              padding: '20px 24px',
              marginBottom: 48,
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>
              The short version
            </p>
            <p style={{ fontSize: 15, color: 'var(--subtext)', lineHeight: 1.7 }}>
              mySalah (the App) is an Islamic prayer tracking application.{' '}
              <strong style={{ color: 'var(--text)' }}>We don&apos;t collect any data.</strong>{' '}
              Everything stays on your device.
            </p>
          </div>

          <div style={{ height: 1, background: 'var(--border)', marginBottom: 40 }} />

          {/* Sections */}
          <Section title="Information We Do NOT Collect">
            <P>
              mySalah is designed with privacy as a fundamental principle. The App:
            </P>
            <UL>
              <LI>Does <strong style={{ color: 'var(--text)' }}>not</strong> require account creation, registration, or sign-in</LI>
              <LI>Does <strong style={{ color: 'var(--text)' }}>not</strong> collect, store, or transmit your personal information to any server</LI>
              <LI>Does <strong style={{ color: 'var(--text)' }}>not</strong> use analytics or tracking SDKs (no Google Analytics, Firebase, Mixpanel, etc.)</LI>
              <LI>Does <strong style={{ color: 'var(--text)' }}>not</strong> use advertising SDKs or display ads</LI>
              <LI>Does <strong style={{ color: 'var(--text)' }}>not</strong> share data with third parties</LI>
              <LI>Does <strong style={{ color: 'var(--text)' }}>not</strong> use cookies or similar tracking technologies</LI>
              <LI>Does <strong style={{ color: 'var(--text)' }}>not</strong> collect usage statistics, crash reports, or telemetry</LI>
            </UL>
          </Section>

          <Section title="Data Stored on Your Device">
            <P>
              All App data is stored <strong style={{ color: 'var(--text)' }}>locally on your device</strong> using the operating system&apos;s built-in storage (AsyncStorage). This includes:
            </P>
            <UL>
              <LI><strong style={{ color: 'var(--text)' }}>Prayer Records:</strong> Which prayers you marked as prayed, timestamps, and on-time status</LI>
              <LI><strong style={{ color: 'var(--text)' }}>Streak Data:</strong> Your current and longest streak counts</LI>
              <LI><strong style={{ color: 'var(--text)' }}>Achievement Progress:</strong> Which achievements you&apos;ve unlocked and when</LI>
              <LI><strong style={{ color: 'var(--text)' }}>Preferences:</strong> Your selected city, theme preference, and notification settings</LI>
              <LI><strong style={{ color: 'var(--text)' }}>Cached Content:</strong> Daily Quranic verse, Hadiths, and 99 Names of Allah</LI>
              <LI><strong style={{ color: 'var(--text)' }}>Dhikr Data:</strong> Your custom dhikr names, descriptions, targets, and daily counts</LI>
            </UL>
            <P>
              This data is stored <em>only</em> on your device, is never transmitted to our servers (we don&apos;t have servers), and can be deleted at any time by uninstalling the App.
            </P>
          </Section>

          <Section title="Network Requests">
            <P>
              The App makes the following network requests to provide its functionality:
            </P>
            <div style={{ overflowX: 'auto' }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Service</th>
                    <th style={thStyle}>Purpose</th>
                    <th style={thStyle}>Data Sent</th>
                    <th style={thStyle}>Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prayer Times API', 'Fetch accurate prayer times', 'City name & country (not GPS)', 'Aladhan'],
                    ['Qibla API', 'Calculate Qibla direction', 'GPS coordinates (momentarily, not stored remotely)', 'Aladhan'],
                    ['Daily Verse API', 'Fetch a Quranic verse', 'None', 'Islamic API'],
                    ['Daily Hadith API', 'Fetch authenticated Hadiths', 'None', 'Islamic API'],
                    ['99 Names API', 'Fetch Names of Allah data', 'None', 'Islamic API'],
                    ['Nearby Mosques', 'Find mosques near you', 'GPS coordinates (momentarily)', 'OpenStreetMap'],
                    ['Walking Routes', 'Calculate routes to mosques', 'Start & end coordinates', 'OSRM'],
                    ['Map Tiles', 'Display the map', 'Standard map tile requests', 'CartoDB / OSM'],
                  ].map(([service, purpose, data, provider]) => (
                    <tr key={service}>
                      <td style={{ ...tdStyle, fontWeight: 600, color: 'var(--text)' }}>{service}</td>
                      <td style={tdStyle}>{purpose}</td>
                      <td style={tdStyle}>{data}</td>
                      <td style={tdStyle}>{provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              <strong style={{ color: 'var(--text)' }}>Important:</strong> These requests are made directly from your device to the respective third-party APIs. We do not operate a backend server or proxy. We do not intercept, log, or store any of these requests.
            </P>
          </Section>

          <Section title="Location Data">
            <UL>
              <LI>The App uses your device&apos;s GPS only when you actively use the Qibla Compass or Nearby Mosques features</LI>
              <LI>GPS data is used momentarily for the specific function and is not stored persistently</LI>
              <LI>For prayer times, the App uses your selected city — not GPS coordinates</LI>
              <LI>The App does not track your location in the background</LI>
              <LI>Location data is never transmitted to our servers</LI>
            </UL>
          </Section>

          <Section title="Notifications">
            <UL>
              <LI>The App may send local notifications (prayer reminders, streak alerts, achievement unlocks) if you enable them</LI>
              <LI>These notifications are generated and scheduled entirely on your device</LI>
              <LI>No push notification service or external server is involved</LI>
              <LI>Notification preferences can be disabled at any time in Settings</LI>
            </UL>
          </Section>

          <Section title="Children&apos;s Privacy">
            <P>
              The App does not knowingly collect any information from anyone, including children under 13. Since no data is collected from any user, COPPA compliance is inherent in the App&apos;s design.
            </P>
          </Section>

          <Section title="Data Retention">
            <UL>
              <LI><strong style={{ color: 'var(--text)' }}>You control retention:</strong> Data persists until you uninstall the App or clear its data</LI>
              <LI><strong style={{ color: 'var(--text)' }}>We retain nothing:</strong> We have no servers, no databases, and no data stores</LI>
            </UL>
          </Section>

          <Section title="Changes to This Policy">
            <P>
              We may update this Privacy Policy from time to time. Changes will be reflected in the &quot;Last Updated&quot; date at the top of this page. Since the App collects no data, material changes are unlikely.
            </P>
          </Section>

          <Section title="Your Rights">
            <P>
              Since we collect no personal data, traditional data rights (access, deletion, portability) are not applicable in the conventional sense. However:
            </P>
            <UL>
              <LI>You can <strong style={{ color: 'var(--text)' }}>delete all App data</strong> at any time by uninstalling the App</LI>
              <LI>You can <strong style={{ color: 'var(--text)' }}>deny location permission</strong> — the App will still function for prayer tracking and achievements</LI>
              <LI>You can <strong style={{ color: 'var(--text)' }}>disable notifications</strong> at any time in the App&apos;s Settings or your device settings</LI>
            </UL>
          </Section>

          <Section title="Contact">
            <P>
              If you have questions or concerns about this Privacy Policy, please contact:
            </P>
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '16px 20px',
                display: 'inline-block',
              }}
            >
              <p style={{ fontSize: 14, color: 'var(--subtext)', margin: 0 }}>
                <strong style={{ color: 'var(--text)' }}>Email:</strong>{' '}
                <a href="mailto:support@mysalah.app" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                  support@mysalah.app
                </a>
              </p>
            </div>
          </Section>

          {/* Back to top */}
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <Link href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, lineHeight: 1 }}>home</span>
              Back to mySalah
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
