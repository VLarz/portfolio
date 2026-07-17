import Socials from './Socials';

export default function Footer() {
  return (
    <footer id="contact" className={`mt-24 border-t border-line/60`}>
      <div
        className={`mx-auto max-w-8xl px-6 py-16 text-center sm:px-8 lg:px-16`}
      >
        <p
          className={`text-xs font-semibold uppercase tracking-[0.3em] text-star`}
        >
          — Let&rsquo;s build something —
        </p>
        <a
          href="mailto:vhenlarsondelacuesta.1398@gmail.com"
          className={`mt-4 inline-block break-all text-xl font-extrabold transition-colors hover:text-accent sm:text-2xl lg:text-3xl`}
        >
          vhenlarsondelacuesta.1398@gmail.com
        </a>
        <Socials className={`mt-6`} />
        <p className={`mt-10 text-xs text-fg-subtle`}>
          © 2026 Vhen Larson Dela Cuesta ✦
        </p>
      </div>
    </footer>
  );
}
