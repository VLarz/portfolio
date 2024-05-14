import Button from './Button';

interface Props extends React.HTMLAttributes<HTMLElement> {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
  disabled?: boolean;
}

export default function Pagination({
  handlePrevPage,
  handleNextPage,
  currentPage,
  totalPages,
  className,
  style,
  children,
  disabled,
  ...props
}: Props) {
  return (
    <div {...props} className={`space-x-4 ${className}`} style={style}>
      <Button
        type="button"
        className="!p-2"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <img
          src={process.env.PUBLIC_URL + `/images/icons/prev.svg`}
          alt="prev"
          className="h-6 w-6"
        />
      </Button>
      <Button
        type="button"
        className="!p-2"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <img
          src={process.env.PUBLIC_URL + `/images/icons/next.svg`}
          alt="next"
          className="h-6 w-6"
        />
      </Button>
    </div>
  );
}
