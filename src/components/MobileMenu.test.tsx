import { fireEvent, render, screen } from '@testing-library/react';
import MobileMenu from './MobileMenu';

const items = [
  { url: '#work', label: 'Work' },
  { url: '#contact', label: 'Contact' },
];

describe('MobileMenu', () => {
  it('is closed initially', () => {
    render(<MobileMenu items={items} />);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('opens an overlay portaled to document.body', () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    // Portaled to body so a navbar ancestor with backdrop-filter/transform
    // can't become the containing block and clip the fixed overlay.
    expect(dialog.parentElement).toBe(document.body);

    items.forEach((item) => {
      expect(
        screen.getByRole('link', { name: new RegExp(item.label, 'i') }),
      ).toBeInTheDocument();
    });
  });

  it('closes on Escape', () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
