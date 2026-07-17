import { render, screen } from '@testing-library/react';
import Services from './Services';
import { servicesData, skills } from './data';

describe('Services', () => {
  it('renders all three service cards', () => {
    render(<Services />);
    expect(servicesData).toHaveLength(3);
    servicesData.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    });
  });

  it('renders the full skills list as chips', () => {
    render(<Services />);
    expect(skills.length).toBeGreaterThanOrEqual(15);
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
