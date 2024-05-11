type Props = React.HTMLAttributes<HTMLDivElement>;

type Social = {
  name: string;
  url: string;
  icon: string;
};

const socials: Social[] = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/vlarz/',
    icon: '/images/icons/linkedin.svg',
  },
  {
    name: 'github',
    url: 'https://github.com/VLarz',
    icon: '/images/icons/github.svg',
  },
  {
    name: 'x',
    url: 'https://twitter.com/VLarz13',
    icon: '/images/icons/x.svg',
  },
];

export default function Socials({ className, style }: Props) {
  return (
    <div
      className={`flex justify-center space-x-2 mt-4 ${className}`}
      style={style}
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.icon}
            alt={social.name}
            className={`transition-opacity opacity-40 hover:opacity-100`}
          />
        </a>
      ))}
    </div>
  );
}
