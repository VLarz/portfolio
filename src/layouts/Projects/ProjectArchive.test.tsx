import { fireEvent, render, screen } from '@testing-library/react';
import ProjectArchive from './ProjectArchive';
import { archiveProjects } from './data';

describe('ProjectArchive', () => {
  it('renders every non-featured project as a row', () => {
    render(<ProjectArchive />);
    archiveProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('opens the modal with the row image on row click', () => {
    const handleOpenModal = jest.fn();
    render(<ProjectArchive handleOpenModal={handleOpenModal} />);
    fireEvent.click(
      screen.getByRole('button', { name: new RegExp(archiveProjects[0].title) }),
    );
    expect(handleOpenModal).toHaveBeenCalledWith(archiveProjects[0].image);
  });
});
