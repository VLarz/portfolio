import { buttonClass } from './Button';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer id="contact" className={`mt-24`}>
      <div
        className={`mx-auto max-w-8xl px-6 py-16 text-center sm:px-8 lg:px-16`}
      >
        <div
          aria-hidden="true"
          className={`mx-auto h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent`}
        />
        <p
          className={`mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-star`}
        >
          — Let&rsquo;s build something —
        </p>
        <p className={`mx-auto mt-4 max-w-md text-base text-fg-muted`}>
          Have a project or role in mind? I&rsquo;d love to hear about it.
        </p>
        <a
          href="mailto:vhenlarsondelacuesta.1398@gmail.com"
          className={`${buttonClass('primary')} mt-8`}
        >
          Email me →
        </a>
        <Socials className={`mt-8`} />
        <p className={`mt-10 text-xs text-fg-subtle`}>
          © {new Date().getFullYear()} Vhen Larson Dela Cuesta ✦
        </p>
      </div>
    </footer>
  );
}
