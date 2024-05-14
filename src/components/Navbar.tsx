type Props = React.HTMLAttributes<HTMLElement>;

type NavMenu = {
  url: string;
  label: string;
};

const navMenu: NavMenu[] = [
  {
    url: `/#projects`,
    label: `Projects`,
  },
  {
    url: `#services`,
    label: `Services`,
  },
];

export default function Navbar({}: Props) {
  return (
    <nav className={`flex justify-center items-center py-8`}>
      <div
        className={`max-w-8xl px-6 sm:px-8 lg:px-16 flex justify-between w-full`}
      >
        <img src="/logo.svg" alt="Vhen Larson Dela Cuesta" className={`w-32`} />
        <ul className={`flex items-center gap-x-6`}>
          {navMenu.map((menu, index) => (
            <li key={index} className={`text-sm lg:text-base font-semibold`}>
              <a href={menu.url}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
