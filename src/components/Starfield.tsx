export default function Starfield() {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 hidden dark:block`}
    >
      <div className={`starfield-layer absolute inset-0`} />
      <div className={`starfield-layer starfield-twinkle absolute inset-0`} />
    </div>
  );
}
