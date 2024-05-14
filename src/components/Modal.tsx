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
          className={`fixed z-50 top-0 h-screen w-screen bg-black bg-opacity-70 py-8`}
        >
          <img
            src={imageSrc}
            alt={imageSrc}
            loading="lazy"
            className={`h-full w-auto mx-auto  cursor-zoom-out`}
          />
        </div>
      )}
    </>
  );
}
