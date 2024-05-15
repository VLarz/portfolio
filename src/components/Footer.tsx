import Socials from './Socials';

type Props = React.HTMLAttributes<HTMLElement>;

export default function Footer({}: Props) {
  return (
    <footer className={`flex justify-center py-4 mt-32`}>
      <div
        className={`max-w-8xl px-6 md:px-8 lg:px-16 flex justify-between items-center w-full`}
      >
        <h6 className={`text-xs sm:text-base`}>© 2024 Vhen Larson Dela Cuesta</h6>
        <Socials className={`!mt-0`} />
      </div>
    </footer>
  );
}
