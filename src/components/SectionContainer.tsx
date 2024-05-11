type Props = React.HTMLAttributes<HTMLDivElement>;

export default function SectionContainer({
  className,
  style,
  children,
}: Props) {
  return (
    <div className={`max-w-8xl mx-auto px-32 py-16 ${className}`} style={style}>
      {children}
    </div>
  );
}
