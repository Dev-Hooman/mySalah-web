'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useMockupPath } from '@/hooks/useTheme';

const slides = [
  { file: 'home-screen.png', label: 'Home Screen' },
  { file: 'qiblaFinder-screen.png', label: 'Qibla Compass' },
  { file: 'analytic-screen.png', label: 'Analytics Overview' },
  { file: 'prayerPerformance.png', label: 'Prayer Performance' },
  { file: 'salahDailyCompletion.png', label: 'Daily Completion' },
  { file: 'achievements.png', label: 'Achievements' },
  { file: 'mosqueFinder-screen.png', label: 'Nearby Mosques' },
  { file: 'dailyHadiths-screen.png', label: 'Daily Hadiths' },
  { file: 'dailyVerse-screen.png', label: 'Daily Verse' },
  { file: 'shareHadhit.png', label: 'Share Hadith' },
  { file: 'new-dhikar-screen.png', label: 'New Dhikr' },
  { file: 'mydhikar-screen.png', label: 'My Dhikr' },
  { file: 'dhikar-counter-screen.png', label: 'Dhikr Counter' },
  { file: '99Names-screen.png', label: '99 Names of Allah' },
  // { file: 'settings-screen.png', label: 'Settings' },
];

const ITEM_WIDTH = 260;
const ITEM_GAP = 20;
const STEP = ITEM_WIDTH + ITEM_GAP;
const DRAG_THRESHOLD = 8;   // px before we consider it a drag
const SWIPE_THRESHOLD = 40; // px to trigger a slide change

const IslamicBorderSVG = () => (
  <svg height="20" width="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <pattern id="border-pattern" x="0" y="0" width="60" height="20" patternUnits="userSpaceOnUse">
        <polygon points="30,2 22,10 30,18 38,10" fill="none" stroke="var(--border)" strokeWidth="1" />
        <circle cx="30" cy="10" r="2" fill="var(--primary)" opacity="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="20" fill="url(#border-pattern)" />
  </svg>
);

export default function Carousel() {
  const mockup = useMockupPath();
  const [active, setActive] = useState(0);
  const [grabbing, setGrabbing] = useState(false); // only for cursor style

  // Refs for synchronous drag state — no React batching issues
  const startX = useRef(null);
  const didDrag = useRef(false);
  const timerRef = useRef(null);

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + slides.length) % slides.length), []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  /* ── Mouse handlers ── */
  const onMouseDown = useCallback((e) => {
    e.preventDefault(); // blocks browser's native image drag
    startX.current = e.clientX;
    didDrag.current = false;
    setGrabbing(true);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (startX.current === null) return;
    if (Math.abs(e.clientX - startX.current) > DRAG_THRESHOLD) {
      didDrag.current = true;
    }
  }, []);

  const onMouseUp = useCallback((e) => {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta < 0 ? next() : prev();
      resetTimer();
    }
    startX.current = null;
    setGrabbing(false);
  }, [next, prev, resetTimer]);

  /* ── Touch handlers ── */
  const onTouchStart = useCallback((e) => {
    startX.current = e.touches[0].clientX;
    didDrag.current = false;
  }, []);

  const onTouchMove = useCallback((e) => {
    if (startX.current === null) return;
    if (Math.abs(e.touches[0].clientX - startX.current) > DRAG_THRESHOLD) {
      didDrag.current = true;
    }
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta < 0 ? next() : prev();
      resetTimer();
    }
    startX.current = null;
  }, [next, prev, resetTimer]);

  /* ── Item click (only fires when no drag happened) ── */
  const handleItemClick = useCallback((i) => {
    if (didDrag.current) return;
    setActive(i);
    resetTimer();
  }, [resetTimer]);

  return (
    <section
      id="screenshots"
      style={{ paddingTop: 0, paddingBottom: 96, background: 'var(--surface)', overflow: 'hidden' }}
    >
      <IslamicBorderSVG />

      <div style={{ paddingTop: 72, paddingBottom: 16 }}>
        {/* Header */}
        <div className="max-content" style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-eyebrow anim-fade-up" style={{ marginBottom: 20, justifyContent: 'center' }}>App Screenshots</p>
          <h2
            className="anim-fade-up"
            data-delay="80"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.4px',
              color: 'var(--text)',
              marginBottom: 14,
            }}
          >
            See it in{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>action</span>
          </h2>
          <p className="anim-fade-up" data-delay="160" style={{ fontSize: 15, color: 'var(--subtext)', lineHeight: 1.75 }}>
            15 screens crafted for beauty and clarity.
          </p>
        </div>

        {/* Carousel viewport — full width, clips overflow */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            cursor: grabbing ? 'grabbing' : 'grab',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            paddingBottom: 24,
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Track — shifts so active slide is centered at 50vw */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: ITEM_GAP,
              transform: `translateX(calc(50vw - ${ITEM_WIDTH / 2}px - ${active * STEP}px))`,
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform',
            }}
          >
            {slides.map((slide, i) => {
              const dist = Math.abs(i - active);
              const isActive = i === active;
              const scale = isActive ? 1 : 0.85;
              const opacity = dist === 0 ? 1 : dist === 1 ? 0.55 : 0.3;

              return (
                <div
                  key={slide.file}
                  onClick={() => handleItemClick(i)}
                  style={{
                    flexShrink: 0,
                    width: ITEM_WIDTH,
                    transform: `scale(${scale})`,
                    opacity,
                    transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                >
                  <div
                    style={{
                      borderRadius: 34,
                      overflow: 'hidden',
                      border: '8px solid var(--phone-bezel)',
                      boxShadow: isActive
                        ? 'var(--shadow-lg), 0 0 0 1px rgba(0,0,0,0.06)'
                        : 'var(--shadow-md)',
                      background: 'var(--phone-bezel)',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={mockup(slide.file)}
                      alt={`My Salah — ${slide.label}`}
                      width={260}
                      height={560}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        pointerEvents: 'none', // prevents image from absorbing mouse events
                      }}
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                  </div>

                  {/* Label */}
                  <p style={{
                    textAlign: 'center',
                    marginTop: 14,
                    fontSize: 12,
                    fontWeight: 600,
                    color: isActive ? 'var(--primary)' : 'var(--subtext)',
                    letterSpacing: '0.3px',
                    transition: 'color 0.3s ease, opacity 0.3s ease',
                    opacity: isActive ? 1 : 0.6,
                    pointerEvents: 'none',
                  }}>
                    {slide.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginTop: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); resetTimer(); }}
              aria-label={`Go to screen ${i + 1}`}
              style={{
                height: 6,
                width: active === i ? 22 : 6,
                borderRadius: 9999,
                background: active === i ? 'var(--primary)' : 'var(--border)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ transform: 'scaleY(-1)' }}>
        <IslamicBorderSVG />
      </div>
    </section>
  );
}
