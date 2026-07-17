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
  return (
    <nav className={`flex justify-center border-b border-line/60 py-6`}>
      <div
        className={`flex w-full max-w-8xl items-center justify-between px-4 sm:px-8 lg:px-16`}
      >
        <img
          src={process.env.PUBLIC_URL + `/logo.svg`}
          alt="Vhen Larson Dela Cuesta"
          className={`w-20 sm:w-28`}
        />
        <ul className={`flex items-center gap-x-2 sm:gap-x-6`}>
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
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
