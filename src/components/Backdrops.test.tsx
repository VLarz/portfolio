import { render } from '@testing-library/react';
import ConstellationChart from './ConstellationChart';
import Starfield from './Starfield';

describe('decorative backdrops', () => {
  it('Starfield is aria-hidden and non-interactive', () => {
    const { container } = render(<Starfield />);
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveAttribute('aria-hidden', 'true');
    expect(root.className).toContain('pointer-events-none');
  });

  it('ConstellationChart is aria-hidden and non-interactive', () => {
    const { container } = render(<ConstellationChart />);
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveAttribute('aria-hidden', 'true');
    expect(root.getAttribute('class')).toContain('pointer-events-none');
  });

  // These fixed backdrops must stay on their own GPU compositor layer, or
  // mobile Chrome drops them when the URL bar collapses on scroll-down.
  it('Starfield is promoted to its own compositor layer', () => {
    const { container } = render(<Starfield />);
    const root = container.firstElementChild as HTMLElement;
    expect(root.className).toContain('backdrop-layer');
  });

  it('ConstellationChart is promoted to its own compositor layer', () => {
    const { container } = render(<ConstellationChart />);
    const root = container.firstElementChild as HTMLElement;
    expect(root.getAttribute('class')).toContain('backdrop-layer');
  });
});
