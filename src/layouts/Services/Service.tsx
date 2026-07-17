import { Service as ServiceType } from './data';

export default function Service({
  icon,
  title,
  subtitle,
  description,
}: ServiceType) {
  return (
    <div
      className={`space-y-3 rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/60`}
    >
      <img
        src={process.env.PUBLIC_URL + `/images/icons/${icon}.svg`}
        alt=""
        aria-hidden="true"
        className={`h-8 w-8 invert dark:invert-0`}
      />
      <div>
        <h3 className={`font-semibold`}>{title}</h3>
        <p className={`text-xs text-fg-subtle`}>{subtitle}</p>
      </div>
      <p className={`text-sm text-fg-muted`}>{description}</p>
    </div>
  );
}
