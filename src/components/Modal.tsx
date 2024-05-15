interface Props extends React.HTMLAttributes<HTMLElement> {
  showModal: boolean;
  handleClose: () => void;
  imageSrc: string;
}

export default function Modal({ showModal, handleClose, imageSrc }: Props) {
  return (
    <>
      {showModal && (
        <div
          onClick={handleClose}
          className={`fixed z-50 top-0 h-screen w-screen bg-black bg-opacity-70 py-4`}
        >
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
