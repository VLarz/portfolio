import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { experienceData } from './data';

describe('Experience', () => {
  it('renders all four roles', () => {
    render(<Experience />);
    expect(experienceData).toHaveLength(4);
    experienceData.forEach((role) => {
      expect(
        screen.getByText(new RegExp(`${role.title} at ${role.company}`)),
      ).toBeInTheDocument();
    });
  });

  it('marks exactly one role as current', () => {
    expect(experienceData.filter((role) => role.current)).toHaveLength(1);
  });
});
