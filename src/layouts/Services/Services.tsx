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
        <h1 className="text-4xl font-semibold">My Services</h1>
        <p className="text-grey">
          Discover my portfolio, a showcase of creative and impactful projects.
          From web development to graphic design, each project reflects my
          commitment to excellence. Explore the details and witness my passion
          for innovation and problem-solving
        </p>
      </div>
      <div className={`flex gap-x-8`}>
        {projectList.map((skill, index) => (
          <Service key={index} {...skill} />
        ))}
      </div>
    </SectionContainer>
  );
}
