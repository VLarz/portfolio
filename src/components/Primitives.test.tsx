import { render, screen } from '@testing-library/react';
import Button, { buttonClass } from './Button';
import SectionHeading from './SectionHeading';
import StatStrip from './StatStrip';

describe('buttonClass', () => {
  it('produces distinct primary and outline styles', () => {
    expect(buttonClass('primary')).toContain('bg-fg');
    expect(buttonClass('outline')).toContain('border-line');
    expect(buttonClass()).toEqual(buttonClass('primary'));
  });
});

describe('Button', () => {
  it('renders children with the variant class', () => {
    render(<Button variant="outline">Click</Button>);
    expect(screen.getByRole('button', { name: 'Click' }).className).toContain(
      'border-line',
    );
  });
});

describe('SectionHeading', () => {
  it('renders star mark, index, label and title', () => {
    render(<SectionHeading index="01" label="Featured work" title="Flagship projects" />);
    expect(screen.getByText(/✦ 01 — Featured work/)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Flagship projects' }),
    ).toBeInTheDocument();
  });
});

describe('StatStrip', () => {
  it('renders the four hero stats', () => {
    render(<StatStrip />);
    ['$10M+', '1M+', '40+'].forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
    expect(screen.getByText(/^\d+y$/)).toBeInTheDocument();
  });
});
