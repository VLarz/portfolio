import { fireEvent, render, screen } from '@testing-library/react';
import FeaturedWork from './FeaturedWork';
import { featuredProjects } from './data';

describe('FeaturedWork', () => {
  it('renders all four featured projects with their metrics', () => {
    render(<FeaturedWork />);
    featuredProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.metric as string)).toBeInTheDocument();
    });
  });

  it('opens the modal with the project image on screenshot click', () => {
    const handleOpenModal = jest.fn();
    render(<FeaturedWork handleOpenModal={handleOpenModal} />);
    fireEvent.click(screen.getByAltText(featuredProjects[0].title));
    expect(handleOpenModal).toHaveBeenCalledWith(featuredProjects[0].image);
  });
});
