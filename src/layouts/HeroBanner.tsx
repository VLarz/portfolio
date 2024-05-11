import SectionContainer from '../components/SectionContainer';
import Socials from '../components/Socials';

type Props = React.HTMLProps<HTMLDivElement>;

export default function HeroBanner({ children }: Props) {
  return (
    <SectionContainer>
      <div
        className={`hero-grid h-[700px] flex justify-center items-center relative`}
      >
        <div className={`text-center max-w-3xl z-10`}>
          <div className={`space-y-6`}>
            <h1 className={`text-5xl font-bold`}>
              Hi, I’m Vhen Larson Dela Cuesta
            </h1>
            <h2 className={`text-4xl font-bold`}>A Front-End Web Developer</h2>
            <p className={`text-xl text-grey`}>
              I have a passion for designing web applications that are{` `}
              <span className={`text-white`}>user-friendly</span>
              {` `}
              and <span className={`text-white`}>appealing</span> to the eye.
            </p>
            <button
              className={`bg-white px-8 py-4 rounded-lg text-sm font-semibold text-black drop-shadow-[0_4px_0_rgba(255,255,255,0.7)]`}
            >
              Download Resume
            </button>
          </div>
          <div className={`mt-16`}>
            <p className={`text-grey`}>Check out my</p>
            <Socials />
          </div>
        </div>
        <img
          src="/images/hero/dot-background.svg"
          alt="dot-background"
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] opacity-90`}
        />
      </div>
    </SectionContainer>
  );
}
