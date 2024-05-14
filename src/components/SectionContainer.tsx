type Props = React.HTMLAttributes<HTMLDivElement>;

export default function SectionContainer({
  className,
  style,
  children,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`max-w-8xl mx-auto px-16 py-16 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
