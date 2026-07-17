import { render, screen } from '@testing-library/react';
import HeroBanner from './HeroBanner';

describe('HeroBanner', () => {
  it('shows name, role label, stats, and CTAs', () => {
    render(<HeroBanner />);
    expect(
      screen.getByRole('heading', { level: 1, name: /vhen larson dela cuesta/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/technical lead · sesimi/i)).toBeInTheDocument();
    expect(screen.getByText('$10M+')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view work/i })).toHaveAttribute(
      'href',
      '#work',
    );
    expect(screen.getByRole('link', { name: /resume/i }).getAttribute('href')).toContain(
      'VHEN-LARSON-DELA-CUESTA-RESUME-FULLSTACK-DEVELOPER.pdf',
    );
  });
});
