import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

type NavMenu = {
  url: string;
  label: string;
};

const navMenu: NavMenu[] = [
  { url: `#work`, label: `Work` },
  { url: `#experience`, label: `Experience` },
  { url: `#services`, label: `Services` },
  { url: `#contact`, label: `Contact` },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 flex justify-center border-b py-6 transition-colors duration-300 ${
        scrolled
          ? `border-line/60 bg-bg/70 backdrop-blur-md`
          : `border-transparent bg-transparent`
      }`}
    >
      <div
        className={`flex w-full max-w-8xl items-center justify-between px-4 sm:px-8 lg:px-16`}
      >
        <img
          src={process.env.PUBLIC_URL + `/logo.svg`}
          alt="Vhen Larson Dela Cuesta"
          className={`w-20 sm:w-28`}
        />
        <div className={`flex items-center gap-x-3 sm:gap-x-6`}>
          <ul className={`hidden items-center gap-x-6 sm:flex`}>
            {navMenu.map((menu) => (
              <li key={menu.url} className={`text-xs font-semibold sm:text-sm`}>
                <a
                  href={menu.url}
                  className={`rounded-sm text-fg-muted transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileMenu items={navMenu} />
        </div>
      </div>
    </nav>
  );
}
