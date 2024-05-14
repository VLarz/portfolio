import React, { useState } from 'react';
import Button from '../../components/Button';
import SectionContainer from '../../components/SectionContainer';
import { projectsData } from './data';
import Project from './Project';

type Props = React.HTMLAttributes<HTMLDivElement>;

const ITEMS_PER_PAGE = 6;

export default function Projects({}: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginationProjects = projectsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <SectionContainer className="space-y-16 -mt-16">
      <div>
        <div className={`flex justify-between items-end`}>
          <h1 className="text-4xl font-semibold">My Projects</h1>
          <div className={`space-y-2`}>
            <p className={`text-end text-sm`}>
              {currentPage}/{totalPages}
            </p>
            <div className="space-x-4">
              <Button
                type="button"
                className="!p-2"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <img
                  src="/images/icons/prev.svg"
                  alt="prev"
                  className="h-6 w-6"
                />
              </Button>
              <Button
                type="button"
                className="!p-2"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <img
                  src="/images/icons/next.svg"
                  alt="next"
                  className="h-6 w-6"
                />
              </Button>
            </div>
          </div>
        </div>
        <p className="text-grey mt-4">
          Discover my portfolio, a showcase of creative and impactful projects.
          From graphic design to web development, each project reflects my
          commitment to excellence. Explore the details and witness my passion
          for innovation and problem-solving.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-16">
        {paginationProjects.map((project, index) => (
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
