interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Service({ icon, title, subtitle, description }: Props) {
  return (
    <>
      <div className={`space-y-4`}>
        <img
          src={process.env.PUBLIC_URL + `/images/icons/${icon}.svg`}
          alt={icon}
        />
        <div>
          <h3 className={`font-semibold text-white`}>{title}</h3>
          <h4 className={`text-xs text-grey`}>{subtitle}</h4>
        </div>
        <p className={`text-sm text-gre`}>{description}</p>
      </div>
    </>
  );
}
