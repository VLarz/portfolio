export default function Starfield() {
  return (
    <div
      aria-hidden="true"
      className={`backdrop-layer pointer-events-none fixed inset-0 -z-10`}
    >
      {/* accent nebula glow — both themes */}
      <div className={`nebula-glow absolute inset-0`} />

      {/* dark "night sky" dust */}
      <div className={`starfield-layer absolute inset-0 hidden dark:block`} />
      <div
        className={`starfield-layer starfield-twinkle absolute inset-0 hidden dark:block`}
      />

      {/* light "star chart" dust */}
      <div className={`starchart-dust absolute inset-0 dark:hidden`} />
      <div
        className={`starchart-dust starfield-twinkle absolute inset-0 dark:hidden`}
      />
    </div>
  );
}
