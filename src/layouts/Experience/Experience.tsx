import SectionContainer from '../../components/SectionContainer';
import SectionHeading from '../../components/SectionHeading';
import { experienceData } from './data';

export default function Experience() {
  return (
    <SectionContainer id="experience" className={`space-y-10`}>
      <SectionHeading index="03" label="Experience" title="The constellation so far" />
      <div className={`relative`}>
        <div
          aria-hidden="true"
          className={`absolute bottom-2 left-1 top-2 w-px bg-gradient-to-b from-accent to-accent/10`}
        />
        <ol className={`pl-8`}>
          {experienceData.map((role) => (
            <li
              key={`${role.title}-${role.period}`}
              className={`relative pb-10 last:pb-0`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[33px] h-3 w-3 rounded-full ${
                  role.current
                    ? 'bg-accent shadow-[0_0_12px_rgb(var(--accent)/0.8)]'
                    : 'border border-accent bg-bg'
                }`}
              />
              <h3 className={`font-semibold`}>
                {role.title} at {role.company}
                <span className={`ml-2 text-sm font-normal text-fg-subtle`}>
                  · {role.location} · {role.period}
                </span>
              </h3>
              <p className={`mt-1 text-sm text-fg-muted`}>{role.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionContainer>
  );
}
