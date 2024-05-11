import SectionContainer from '../../components/SectionContainer';
import { projectsData } from './data';

type Props = React.HTMLAttributes<HTMLDivElement>;

const projectList = [...projectsData];

export default function Projects({}: Props) {
  return (
    <SectionContainer className={`space-y-16`}>
      <div>
        <h1 className={`text-4xl font-semibold`}>My Projects</h1>
        <p className={`text-grey mt-4`}>
          Discover my portfolio, a showcase of creative and impactful projects.
          From graphic design to web development, each project reflects my
          commitment to excellence. Explore the details and witness my passion
          for innovation and problem-solving
        </p>
      </div>
      <div className={`grid grid-cols-3 gap-x-8`}>
        {projectList.map((project, index) => (
          <div key={index} className={`space-y-4`}>
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-[380px] h-object-cover object-top`}
            />
            <h6 className="font-semibold">{project.title}</h6>
            <p className={`text-sm text-grey`}>{project.description}</p>
            {(project.links.web || project.links.figma) && (
              <div className={`flex gap-x-2`}>
                {project.links.web && (
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/socials/web.svg" alt="web icon" />
                  </a>
                )}
                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/socials/figma.svg" alt="figma icon" />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
