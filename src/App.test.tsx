import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders sections in work-first order with anchor ids', () => {
    const { container } = render(<App />);
    const ids = Array.from(container.querySelectorAll('[id]')).map(
      (el) => el.id,
    );
    expect(ids.indexOf('work')).toBeGreaterThan(-1);
    expect(ids.indexOf('work')).toBeLessThan(ids.indexOf('experience'));
    expect(ids.indexOf('experience')).toBeLessThan(ids.indexOf('services'));
  });

  it('renders featured work and archive instead of the paginated grid', () => {
    const { container } = render(<App />);
    expect(screen.getByText('Flagship projects')).toBeInTheDocument();
    expect(screen.getByText('All projects')).toBeInTheDocument();
    // old Pagination rendered prev/next arrow images from /images/icons/
    expect(container.querySelector('img[src*="next.svg"]')).toBeNull();
    expect(container.querySelector('img[src*="prev.svg"]')).toBeNull();
  });

  it('renders the hero and all section headings in work-first order', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /vhen larson dela cuesta/i }),
    ).toBeInTheDocument();
    const sectionTitles = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent);
    expect(sectionTitles).toEqual([
      'Flagship projects',
      'All projects',
      'The constellation so far',
      'Work with me',
    ]);
  });
});
