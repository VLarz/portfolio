type Props = React.HTMLAttributes<HTMLElement>;

type NavMenu = {
  url: string;
  label: string;
};

const navMenu: NavMenu[] = [
  {
    url: `/#skills`,
    label: `Skills`,
  },
  {
    url: `/#projects`,
    label: `Projects`,
  },
  {
    url: `#services`,
    label: `Services`,
  },
];

export default function Navbar({ className, style, ...props }: Props) {
  return (
    <nav
      {...props}
      className={`fixed top-0 w-full flex justify-center items-center py-8 ${className}`}
      style={style}
    >
      <div className={`max-w-8xl px-16 flex justify-between w-full`}>
        <h1 className={`font-bold text-2xl`}>VLarz</h1>
        <ul className={`flex gap-x-6`}>
          {navMenu.map((menu, index) => (
            <li key={index}>
              <a href={menu.url}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
