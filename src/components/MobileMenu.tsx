import { useEffect, useRef, useState } from 'react';

type NavItem = {
  url: string;
  label: string;
};

interface Props {
  items: NavItem[];
}

export default function MobileMenu({ items }: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className={`sm:hidden`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-accent hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-[18px] w-[18px]`}
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="3.5"
            y1="7"
            x2="20.5"
            y2="7"
            className={`stroke-current`}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line
            x1="3.5"
            y1="12"
            x2="20.5"
            y2="12"
            className={`stroke-current`}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line
            x1="3.5"
            y1="17"
            x2="20.5"
            y2="17"
            className={`stroke-current`}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="8" cy="7" r="1.8" className={`fill-accent`} />
          <circle cx="15" cy="12" r="1.8" className={`fill-accent`} />
          <circle cx="10" cy="17" r="1.8" className={`fill-accent`} />
        </svg>
      </button>

      {open && (
        <div
          className={`fixed inset-0 z-50`}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={close}
            className={`animate-fade-in absolute inset-0 bg-black/60 backdrop-blur-sm`}
          />
          <div
            className={`animate-sheet-up absolute inset-x-0 bottom-0 overflow-hidden rounded-t-2xl border-t border-line bg-surface pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl`}
          >
            <div className={`nebula-glow pointer-events-none absolute inset-0`} />
            <div className={`relative px-6 pt-3`}>
              <div
                aria-hidden="true"
                className={`mx-auto h-1 w-10 rounded-full bg-line`}
              />
              <div className={`mt-4 flex items-center justify-between`}>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.3em] text-star`}
                >
                  ✦ Menu
                </p>
                <button
                  type="button"
                  autoFocus
                  onClick={close}
                  aria-label="Close menu"
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-sm text-fg-muted transition-colors hover:border-accent hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
                >
                  ✕
                </button>
              </div>
              <div
                aria-hidden="true"
                className={`mt-4 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent`}
              />
              <ul className={`mt-1`}>
                {items.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-x-3 border-b border-line/60 py-4 text-lg font-semibold text-fg transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
                    >
                      <span aria-hidden="true" className={`text-sm text-accent`}>
                        ✦
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
