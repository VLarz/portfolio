interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  webLink?: string;
  figmaLink?: string;
}

export default function Project({
  image,
  title,
  description,
  webLink,
  figmaLink,
}: Props) {
  return (
    <div className={`space-y-4`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`w-full h-[410px] h-object-cover object-top`}
      />
      <h6 className="font-semibold">{title}</h6>
      <p className={`text-sm text-grey`}>{description}</p>
      {(webLink || figmaLink) && (
        <div className={`flex gap-x-2`}>
          {webLink && (
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/images/icons/web.svg"
                alt="web icon"
                className={`transition-opacity opacity-40 hover:opacity-100`}
                title={`Website link`}
              />
            </a>
          )}
          {figmaLink && (
            <a href={figmaLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/images/icons/figma.svg"
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