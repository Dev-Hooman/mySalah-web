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
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="max-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image
              src="/icon.png"
              alt="mySalah"
              width={32}
              height={32}
              style={{ borderRadius: 8 }}
              priority
            />
            <span style={{
              fontWeight: 800,
              fontSize: 18,
              color: 'var(--text)',
              letterSpacing: '-0.3px',
            }}>
              mySalah
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#screenshots" className="nav-link">Screenshots</a>
            <Link href="/privacy" className="nav-link">Privacy</Link>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18, lineHeight: 1 }}>
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <a href="#download" className="btn-primary desktop-nav" style={{ padding: '10px 20px', fontSize: 14, gap: 6 }}>
              <img src="/images/android.png" alt="" style={{ width: 16, height: 16, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              Download
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger-btn"
              aria-label="Toggle menu"
              style={{
                display: 'none',
                width: 36,
                height: 36,
                background: 'none',
                border: '1px solid var(--border)',
                borderRadius: 8,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                padding: 0,
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
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          onClick={closeMenu}
          style={{
            position: 'absolute',
            top: 20,
            right: 24,
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 8,
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <Image src="/icon.png" alt="mySalah" width={40} height={40} style={{ borderRadius: 10 }} />
          <span style={{ fontWeight: 800, fontSize: 24, color: 'var(--text)' }}>mySalah</span>
        </div>

        <a href="#features" className="mobile-nav-link" onClick={closeMenu}>Features</a>
        <a href="#screenshots" className="mobile-nav-link" onClick={closeMenu}>Screenshots</a>
        <Link href="/privacy" className="mobile-nav-link" onClick={closeMenu}>Privacy</Link>
        <a href="#download" className="btn-primary" onClick={closeMenu} style={{ marginTop: 8, gap: 8 }}>
          <img src="/images/android.png" alt="" style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          Download for Android
        </a>
      </div>

    </>
  );
}
