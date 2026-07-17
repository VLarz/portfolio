type Variant = 'primary' | 'outline';

const BASE = `inline-block rounded-sm px-6 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent`;

const VARIANTS: Record<Variant, string> = {
  primary: `bg-fg text-bg hover:opacity-90`,
  outline: `border border-line text-fg-muted hover:border-accent hover:text-fg`,
};

export function buttonClass(variant: Variant = 'primary') {
  return `${BASE} ${VARIANTS[variant]}`;
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: Props) {
  return (
    <button type="button" {...props} className={`${buttonClass(variant)} ${className}`}>
      {children}
    </button>
  );
}
