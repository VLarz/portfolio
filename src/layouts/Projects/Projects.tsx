import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import SectionContainer from '../../components/SectionContainer';
import { projectsData } from './data';
import Project from './Project';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  handleOpenModal?: (imageSrc: string) => void;
}

const ITEMS_PER_PAGE = 6;

export default function Projects({ handleOpenModal }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentPage, isMobile]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginationProjects = projectsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <SectionContainer id="projects" className="space-y-16 -mt-40">
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl lg:text-4xl font-semibold">My Projects</h1>
          <Pagination
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            currentPage={currentPage}
            totalPages={totalPages}
            className="hidden lg:block"
          />
        </div>
        <p className="text-grey mt-4">
          Discover my portfolio, a showcase of creative and impactful projects.
          From graphic design to web development, each project reflects my
          commitment to excellence. Explore the details and witness my passion
          for innovation and problem-solving.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {paginationProjects.map((project, index) => (
          <Project
            key={index}
            {...project}
            figmaLink={project.links.figma}
            webLink={project.links.web}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </div>
      <div>
        <Pagination
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          totalPages={totalPages}
          className="flex lg:hidden justify-center"
        />
      </div>
    </SectionContainer>
  );
}
