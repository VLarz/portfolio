interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  type,
  className,
  style,
  children,
  disabled,
  ...props
}: Props) {
  let buttonStyle = `bg-white text-black drop-shadow-[0_4px_0_rgba(255,255,255,0.7)]`;

  return (
    <button
      {...props}
      className={`px-8 py-4 rounded-lg text-sm font-semibold ${buttonStyle} ${
        disabled && `opacity-40 cursor-not-allowed`
      } ${className}`}
      type={type}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
