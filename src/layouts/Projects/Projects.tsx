import SectionContainer from '../../components/SectionContainer';
import { projectsData } from './data';
import Project from './Project';

type Props = React.HTMLAttributes<HTMLDivElement>;

const projectList = [...projectsData];

export default function Projects({}: Props) {
  return (
    <SectionContainer className={`space-y-16 -mt-16`}>
      <div>
        <h1 className={`text-4xl font-semibold`}>My Projects</h1>
        <p className={`text-grey mt-4`}>
          Discover my portfolio, a showcase of creative and impactful projects.
          From graphic design to web development, each project reflects my
          commitment to excellence. Explore the details and witness my passion
          for innovation and problem-solving
        </p>
      </div>
      <div className={`grid grid-cols-3 gap-x-8 gap-y-16`}>
        {projectList.map((project, index) => (
          <Project
            key={index}
            {...project}
            figmaLink={project.links.figma}
            webLink={project.links.web}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
