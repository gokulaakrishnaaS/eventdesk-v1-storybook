import React, { useState, useEffect } from 'react';
import { Theme, Button } from 'react-daisyui';

export default function DaisyThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Optional: detect system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <Theme dataTheme={theme}>
      <div className="p-4">
        <Button onClick={toggleTheme} color="primary">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
        <p className="mt-4">Current Theme: {theme}</p>
      </div>
    </Theme>
  );
}
