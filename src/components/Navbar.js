'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('ms-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(stored || (prefersDark ? 'dark' : 'light'));

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ms-theme', next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="max-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }} aria-label="My Salah — Home">
            <div style={{
              position: 'relative',
              width: 34,
              height: 34,
              borderRadius: 9,
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(128,128,0,0.25)',
            }}>
              <Image
                src="/icon.png"
                alt=""
                width={34}
                height={34}
                style={{ borderRadius: 9, display: 'block' }}
                priority
                aria-hidden="true"
              />
            </div>
            <span style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 700,
              fontSize: 20,
              color: 'var(--text)',
              letterSpacing: '-0.2px',
              lineHeight: 1,
            }}>
              My Salah
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#screenshots" className="nav-link">Screenshots</a>
            <Link href="/feedback" className="nav-link">Feedback</Link>
            <Link href="/privacy" className="nav-link">Privacy</Link>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18, lineHeight: 1 }}>
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <a
              href="#download"
              className="btn-primary desktop-nav"
              style={{ padding: '10px 20px', fontSize: 13.5, gap: 7 }}
            >
              <img
                src="/images/android.png"
                alt=""
                aria-hidden="true"
                style={{ width: 16, height: 16, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
              Download
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{
                display: 'none',
                width: 38,
                height: 38,
                background: 'none',
                border: '1px solid var(--border)',
                borderRadius: 9,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                padding: 0,
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20, lineHeight: 1 }}>
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: 22,
            right: 24,
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 9,
            width: 40,
            height: 40,
            cursor: 'pointer',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22, lineHeight: 1 }}>close</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Image src="/icon.png" alt="My Salah" width={44} height={44} style={{ borderRadius: 12, boxShadow: '0 2px 10px rgba(128,128,0,0.3)' }} />
          <span style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontWeight: 700,
            fontSize: 28,
            color: 'var(--text)',
          }}>My Salah</span>
        </div>

        <a href="#features" className="mobile-nav-link" onClick={closeMenu}>Features</a>
        <a href="#screenshots" className="mobile-nav-link" onClick={closeMenu}>Screenshots</a>
        <Link href="/feedback" className="mobile-nav-link" onClick={closeMenu}>Feedback</Link>
        <Link href="/privacy" className="mobile-nav-link" onClick={closeMenu}>Privacy</Link>
        <a href="#download" className="btn-primary" onClick={closeMenu} style={{ marginTop: 8, gap: 9, fontSize: 16, padding: '14px 32px' }}>
          <img
            src="/images/android.png"
            alt=""
            aria-hidden="true"
            style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
          Download for Android
        </a>
      </div>
    </>
  );
}
