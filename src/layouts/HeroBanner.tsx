import React, { useEffect, useRef } from 'react';
import Button from '../components/Button';
import SectionContainer from '../components/SectionContainer';
import Socials from '../components/Socials';

type Props = React.HTMLAttributes<HTMLDivElement>;

const words = ['Front-End Web Developer', 'Web Designer'];

export default function HeroBanner({ ...props }: Props) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const LETTER_TYPE_DELAY = 75; // Delay for typing each letter
    const WORD_STAY_DELAY = 3000; // Delay before switching words
    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;
    let direction = DIRECTION_FORWARDS;
    let wordIndex = 0;
    let letterIndex = 0;
    let wordTypeInterval: NodeJS.Timeout;

    const typeLetter = () => {
      const word = words[wordIndex];

      if (direction === DIRECTION_FORWARDS) {
        letterIndex++;
        if (letterIndex === word.length) {
          direction = DIRECTION_BACKWARDS;
          clearInterval(wordTypeInterval);
          setTimeout(startTyping, WORD_STAY_DELAY);
        }
      } else if (direction === DIRECTION_BACKWARDS) {
        letterIndex--;
        if (letterIndex === 0) {
          nextWord();
        }
      }

      const textToType = word.substring(0, letterIndex);
      element.textContent = textToType;
    };

    const startTyping = () => {
      clearInterval(wordTypeInterval); // Clear any existing interval
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    };

    const nextWord = () => {
      letterIndex = 0;
      direction = DIRECTION_FORWARDS;
      wordIndex++;
      if (wordIndex === words.length) {
        wordIndex = 0;
      }
      startTyping();
    };

    startTyping();

    return () => {
      clearInterval(wordTypeInterval); // Clear the interval on unmount
    };
  }, []);

  return (
    <SectionContainer className={`!px-0 py-0 -mt-24`} {...props}>
      <div
        className={`hero-grid h-[600px] lg:h-[700px] flex justify-center items-center relative`}
      >
        <div className={`text-center lg:max-w-3xl z-10 px-6 sm:px-8 lg:px-0`}>
          <div className={`space-y-4 lg:space-y-6`}>
            <h1 className={`text-4xl lg:text-5xl font-bold`}>
              Hi, I’m Vhen Larson Dela Cuesta
            </h1>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold`}>
              A <span className="typed-words" ref={textRef} />
            </h2>
            <p className={`text-md md:text-lg lg:text-xl text-grey`}>
              I have a passion for designing web applications that are{' '}
              <span className={`text-white`}>user-friendly</span> and{' '}
              <span className={`text-white`}>appealing</span> to the eye.
            </p>
            <a
              href={
                process.env.PUBLIC_URL +
                `/files/DELA CUESTA, VHEN LARSON A. - RESUME.pdf`
              }
              className={`block`}
              download
            >
              <Button type="submit" className={`!px-4 md:!px-8 !py-3 md:!py-4`}>
                Download Resume
              </Button>
            </a>
          </div>
          <div className={`mt-16`}>
            <p>Check out my</p>
            <Socials />
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + `/images/hero/dot-background.svg`}
          alt="dot-background"
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] opacity-70`}
        />
      </div>
    </SectionContainer>
  );
}
