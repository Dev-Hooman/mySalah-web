'use client';

import { useState, useEffect } from 'react';

/**
 * Returns the current UI theme ('light' | 'dark') and reacts in real-time
 * when the user toggles it (watches the data-theme attribute via MutationObserver).
 */
export function useTheme() {
  const [theme, setTheme] = useState('light'); // SSR-safe default

  useEffect(() => {
    const read = () =>
      document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(read());

    const observer = new MutationObserver(() => setTheme(read()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}

/** Returns the mockup image path for the current theme folder. */
export function useMockupPath() {
  const theme = useTheme();
  return (filename) =>
    `/images/mockups/${theme === 'dark' ? 'dark-mode' : 'light-mode'}/${filename}`;
}
