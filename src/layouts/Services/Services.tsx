import SectionContainer from '../../components/SectionContainer';
import { ProjectData } from './data';
import Service from './Service';

type Props = React.HTMLAttributes<HTMLDivElement>;

const skills = [
  `React`,
  `Svelte`,
  `Angular`,
  `Typescript`,
  `Tailwind CSS`,
  `Bootstrap`,
  `Figma`,
];

const projectList = [...ProjectData];

export default function Services({}: Props) {
  return (
    <SectionContainer id="services" className="space-y-16">
      <div className={`space-y-4`}>
        <h1 className="text-3xl lg:text-4xl font-semibold">My Services</h1>
        <p className="text-grey">
          Unlock the potential of your business with my professional services. I
          specialize in web development and web design, providing custom-made
          websites that align with your goals. Explore my services to see how we
          can collaborate to create something exceptional, made just for you.
        </p>
        <div className={`flex flex-wrap gap-x-6 gap-y-2`}>
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8`}
      >
        {projectList.map((skill, index) => (
          <Service key={index} {...skill} />
        ))}
      </div>
    </SectionContainer>
  );
}
