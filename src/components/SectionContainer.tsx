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
      className={`max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-16 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
