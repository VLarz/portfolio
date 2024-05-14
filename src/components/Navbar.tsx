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
      <div className={`max-w-8xl px-16 flex justify-between w-full`}>
        <h1 className={`font-bold text-2xl`}>VLarz</h1>
        <ul className={`flex gap-x-6`}>
          {navMenu.map((menu, index) => (
            <li key={index} className={`font-semibold`}>
              <a href={menu.url}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
