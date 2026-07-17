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
          className={`mt-4 inline-block break-all rounded-sm text-xl font-extrabold transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent sm:text-2xl lg:text-3xl`}
        >
          vhenlarsondelacuesta.1398@gmail.com
        </a>
        <Socials className={`mt-6`} />
        <p className={`mt-10 text-xs text-fg-subtle`}>
          © {new Date().getFullYear()} Vhen Larson Dela Cuesta ✦
        </p>
      </div>
    </footer>
  );
}
