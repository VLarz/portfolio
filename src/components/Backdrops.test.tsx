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
});
