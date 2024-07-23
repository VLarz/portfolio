interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  webLink?: string;
  figmaLink?: string;
  handleOpenModal?: (imageSrc: string) => void;
}

export default function Project({
  image,
  title,
  description,
  webLink,
  figmaLink,
  handleOpenModal,
}: Props) {
  const handleClick = () => {
    if (handleOpenModal) {
      handleOpenModal(image);
    }
  };
  return (
    <div className={`space-y-4`}>
      <img
        src={process.env.PUBLIC_URL + image}
        alt={title}
        loading="lazy"
        className={`w-full h-[360px] 3xl:h-[410px] object-cover object-top cursor-zoom-in`}
        onClick={handleClick}
      />
      <h3 className="font-semibold">{title}</h3>
      <p className={`text-sm text-grey`}>{description}</p>
      {(webLink || figmaLink) && (
        <div className={`flex gap-x-2`}>
          {webLink && (
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <img
                src={process.env.PUBLIC_URL + `/images/icons/web.svg`}
                alt="web icon"
                className={`transition-opacity opacity-40 hover:opacity-100`}
                title={`Website link`}
              />
            </a>
          )}
          {figmaLink && (
            <a href={figmaLink} target="_blank" rel="noopener noreferrer">
              <img
                src={process.env.PUBLIC_URL + `/images/icons/figma.svg`}
                alt="figma icon"
                className={`transition-opacity opacity-40 hover:opacity-100`}
                title={`Figma link`}
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
