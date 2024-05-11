interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({
  variant = 'primary',
  className,
  style,
  children,
}: Props) {
  let buttonStyle = `bg-white text-black drop-shadow-[0_4px_0_rgba(255,255,255,0.7)]`;

  if (variant === 'secondary') {
    console.log(buttonStyle);
  }
  return (
    <button
      className={`px-8 py-4 rounded-lg text-sm font-semibold ${buttonStyle} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
