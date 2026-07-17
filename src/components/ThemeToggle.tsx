import { useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  );

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-sm text-fg-muted transition-colors hover:border-accent hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
    >
      <span aria-hidden="true" className={`leading-none`}>
        {isDark ? '☀' : '☾'}
      </span>
    </button>
  );
}
