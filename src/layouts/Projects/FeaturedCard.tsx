import { useState } from 'react';
import Spinner from '../../components/Spinner';
import { Project } from './data';

interface Props {
  project: Project;
  handleOpenModal?: (imageSrc: string) => void;
}

export default function FeaturedCard({ project, handleOpenModal }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const { title, description, image, metric, tags, links } = project;

  return (
    <article
      className={`overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-accent/60`}
    >
      <div className={`relative h-56 sm:h-64`}>
        {isLoading && (
          <div className={`absolute inset-0 flex items-center justify-center`}>
            <Spinner />
          </div>
        )}
        <button
          type="button"
          onClick={() => handleOpenModal?.(image)}
          aria-label={`Zoom ${title} screenshot`}
          className={`block h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
        >
          <img
            src={process.env.PUBLIC_URL + image}
            alt={title}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            className={`h-full w-full object-cover object-top ${
              isLoading ? 'invisible' : 'visible'
            }`}
          />
        </button>
      </div>
      <div className={`space-y-3 p-5`}>
        <div className={`flex items-baseline justify-between gap-3`}>
          <h3 className={`font-semibold`}>{title}</h3>
          {metric && (
            <span
              className={`whitespace-nowrap rounded-full border border-accent/40 px-2.5 py-0.5 text-xs font-semibold text-accent`}
            >
              {metric}
            </span>
          )}
        </div>
        <p className={`text-sm text-fg-muted`}>{description}</p>
        <div
          className={`flex items-center justify-between text-xs text-fg-subtle`}
        >
          <span>{tags.join(' · ')}</span>
          <span className={`flex gap-x-3`}>
            {links.web && (
              <a
                href={links.web}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-fg`}
              >
                Live ↗
              </a>
            )}
            {links.figma && (
              <a
                href={links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-fg`}
              >
                Figma ◈
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
