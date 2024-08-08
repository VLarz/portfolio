import debounce from 'lodash/debounce';
import React, { useCallback, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import SectionContainer from '../../components/SectionContainer';
import Project from './Project';
import { projectsData } from './data';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  handleOpenModal?: (imageSrc: string) => void;
}

const ITEMS_PER_PAGE = 6;

export default function Projects({ handleOpenModal }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

  const handlePrevPage = useCallback(
    debounce((fromBottomPagination = false) => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
        if (fromBottomPagination) {
          scrollToProjects();
        }
      }
    }, 300),
    [currentPage]
  );

  const handleNextPage = useCallback(
    debounce((fromBottomPagination = false) => {
      if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
        if (fromBottomPagination) {
          scrollToProjects();
        }
      }
    }, 300),
    [currentPage, totalPages]
  );

  const scrollToProjects = () => {
    if (isMobile) {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginationProjects = projectsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <SectionContainer id="projects" className="space-y-16 -mt-40">
      <div>
        <div className="flex justify-between">
          <h2 className="text-3xl lg:text-4xl font-semibold">My Projects</h2>
          <Pagination
            handlePrevPage={() => handlePrevPage(false)}
            handleNextPage={() => handleNextPage(false)}
            currentPage={currentPage}
            totalPages={totalPages}
            className="hidden lg:block"
          />
        </div>
        <p className="text-grey mt-4">
          Discover my portfolio, a showcase of creative and impactful projects.
          From graphic design to web development, each project shows my
          dedication to quality. Look at each of my project to see my enthusiasm
          for creativity and problem solving.
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
          handlePrevPage={() => handlePrevPage(true)}
          handleNextPage={() => handleNextPage(true)}
          currentPage={currentPage}
          totalPages={totalPages}
          className="flex lg:hidden justify-center"
        />
      </div>
    </SectionContainer>
  );
}
