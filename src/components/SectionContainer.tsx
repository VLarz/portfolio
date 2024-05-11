type Props = React.HTMLProps<HTMLDivElement>;

export default function SectionContainer({
  className,
  style,
  children,
}: Props) {
  return (
    <div className={`max-w-8xl mx-auto ${className}`} style={style}>
      {children}
    </div>
  );
}
