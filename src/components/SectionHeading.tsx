interface Props {
  index: string;
  label: string;
  title: string;
}

export default function SectionHeading({ index, label, title }: Props) {
  return (
    <div className={`space-y-2`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.25em] text-accent`}
      >
        ✦ {index} — {label}
      </p>
      <h2 className={`text-3xl font-extrabold lg:text-4xl`}>{title}</h2>
    </div>
  );
}
