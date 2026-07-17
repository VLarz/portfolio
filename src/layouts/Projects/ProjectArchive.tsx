import SectionContainer from '../../components/SectionContainer';
import SectionHeading from '../../components/SectionHeading';
import { archiveProjects } from './data';

interface Props {
  handleOpenModal?: (imageSrc: string) => void;
}

export default function ProjectArchive({ handleOpenModal }: Props) {
  return (
    <SectionContainer className={`space-y-10`}>
      <SectionHeading index="02" label="Archive" title="All projects" />
      <ul className={`border-t border-line`}>
        {archiveProjects.map((project) => (
          <li
            key={project.title}
            className={`group relative flex items-center gap-4 border-b border-line`}
          >
            <button
              type="button"
              onClick={() => handleOpenModal?.(project.image)}
              className={`flex min-w-0 flex-1 items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
            >
              <span
                className={`min-w-0 truncate text-sm font-semibold sm:text-base`}
              >
                {project.title}
              </span>
              <span className={`hidden text-xs text-fg-subtle sm:block`}>
                {project.tags.join(' · ')}
              </span>
            </button>
            <span
              className={`flex shrink-0 items-center gap-x-4 text-xs font-medium sm:text-sm`}
            >
              {project.links.web && (
                <a
                  href={project.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live site`}
                  className={`whitespace-nowrap rounded-sm text-accent underline-offset-2 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
                >
                  View Live ↗
                </a>
              )}
              {project.links.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} design`}
                  className={`whitespace-nowrap rounded-sm text-accent underline-offset-2 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
                >
                  View Design ◈
                </a>
              )}
            </span>
            <img
              src={process.env.PUBLIC_URL + project.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={`pointer-events-none absolute right-16 top-1/2 z-20 hidden w-[28em] -translate-y-1/2 rounded-md border border-line shadow-2xl lg:group-hover:block`}
            />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
