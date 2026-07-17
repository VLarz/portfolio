import { buttonClass } from '../components/Button';
import SectionContainer from '../components/SectionContainer';
import Socials from '../components/Socials';
import StatStrip from '../components/StatStrip';

const RESUME_PATH = '/files/VHEN-LARSON-DELA-CUESTA-RESUME-FULLSTACK-DEVELOPER.pdf';

export default function HeroBanner() {
  return (
    <SectionContainer className="relative">
      <div className="mx-auto max-w-3xl py-10 text-center lg:py-20">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-star"
        >
          — Technical Lead · Sesimi —
        </p>
        <h1
          className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Vhen Larson
          <br />
          Dela Cuesta
        </h1>
        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
        />
        <p className="mx-auto mt-6 max-w-xl text-base text-fg-muted lg:text-lg">
          Full-stack developer &amp; designer crafting web products people
          actually enjoy using since 2020.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#work" className={buttonClass('primary')}>
            View work ↓
          </a>
          <a
            href={process.env.PUBLIC_URL + RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass('outline')}
          >
            Resume
          </a>
        </div>
        <StatStrip />
        <Socials className="mt-8" />
      </div>
    </SectionContainer>
  );
}
