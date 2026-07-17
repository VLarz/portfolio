import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('renders a dialog with the image when shown', () => {
    render(<Modal showModal handleClose={() => {}} imageSrc="/images/projects/bitlink.webp" />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders nothing when hidden', () => {
    render(<Modal showModal={false} handleClose={() => {}} imageSrc="" />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes on Escape', () => {
    const handleClose = jest.fn();
    render(<Modal showModal handleClose={handleClose} imageSrc="/images/projects/bitlink.webp" />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });

  it('closes via the close button', () => {
    const handleClose = jest.fn();
    render(<Modal showModal handleClose={handleClose} imageSrc="/images/projects/bitlink.webp" />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(handleClose).toHaveBeenCalled();
  });
});
