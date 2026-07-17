import { useEffect, useRef } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  showModal: boolean;
  handleClose: () => void;
  imageSrc: string;
}

export default function Modal({ showModal, handleClose, imageSrc }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showModal) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [showModal, handleClose]);

  return (
    <>
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot"
          onClick={handleClose}
          className={`fixed z-50 top-0 h-screen w-screen bg-black bg-opacity-70 py-4`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleClose();
            }}
            aria-label="Close"
            className={`absolute right-4 top-4 z-10 rounded-full border border-white/30 px-3 py-1 text-xl leading-none text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`}
          >
            ×
          </button>
          <img
            src={process.env.PUBLIC_URL + imageSrc}
            alt={imageSrc}
            loading="lazy"
            className={`h-full w-auto object-contain mx-auto cursor-zoom-out`}
          />
        </div>
      )}
    </>
  );
}
