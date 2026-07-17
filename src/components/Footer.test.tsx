import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the contact CTA as a mailto link', () => {
    render(<Footer />);
    expect(
      screen.getByRole('link', { name: /email me/i }),
    ).toHaveAttribute('href', 'mailto:vhenlarsondelacuesta.1398@gmail.com');
  });

  it('anchors the contact section', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('#contact')).not.toBeNull();
  });
});
