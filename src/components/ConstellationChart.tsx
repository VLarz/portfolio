const LINES: Array<[number, number, number, number]> = [
  // top-left cluster
  [140, 180, 320, 120],
  [320, 120, 500, 190],
  [500, 190, 430, 300],
  [430, 300, 240, 320],
  [140, 180, 240, 320],
  // top-right cluster
  [1020, 140, 1180, 230],
  [1180, 230, 1120, 340],
  [1120, 340, 980, 300],
  [980, 300, 1020, 140],
  // bottom-left cluster
  [180, 700, 340, 780],
  [340, 780, 300, 620],
  [300, 620, 180, 700],
  // bottom-right cluster
  [1240, 620, 1340, 700],
  [1340, 700, 1200, 780],
  [1240, 620, 1300, 540],
];

const STARS: Array<{ cx: number; cy: number; r: number; accent?: boolean }> = [
  // top-left cluster
  { cx: 140, cy: 180, r: 2.4, accent: true },
  { cx: 320, cy: 120, r: 1.6 },
  { cx: 500, cy: 190, r: 2 },
  { cx: 430, cy: 300, r: 1.5 },
  { cx: 240, cy: 320, r: 1.8 },
  // top-right cluster
  { cx: 1020, cy: 140, r: 1.8 },
  { cx: 1180, cy: 230, r: 2.8, accent: true },
  { cx: 1120, cy: 340, r: 1.5 },
  { cx: 980, cy: 300, r: 1.6 },
  // bottom-left cluster
  { cx: 180, cy: 700, r: 1.9 },
  { cx: 340, cy: 780, r: 2.3, accent: true },
  { cx: 300, cy: 620, r: 1.5 },
  { cx: 120, cy: 640, r: 1.3 },
  // bottom-right cluster
  { cx: 1240, cy: 620, r: 1.6 },
  { cx: 1340, cy: 700, r: 1.7 },
  { cx: 1200, cy: 780, r: 1.5 },
  { cx: 1300, cy: 540, r: 2.2, accent: true },
  // scattered
  { cx: 80, cy: 420, r: 1.4 },
  { cx: 720, cy: 90, r: 1.3 },
  { cx: 900, cy: 760, r: 1.5 },
  { cx: 620, cy: 640, r: 1.2 },
  { cx: 760, cy: 420, r: 1.6 },
  { cx: 560, cy: 520, r: 1.3 },
  { cx: 1080, cy: 560, r: 1.4 },
  { cx: 860, cy: 200, r: 1.5 },
  { cx: 400, cy: 480, r: 1.2 },
];

// The clusters span nearly the full 0–900 viewBox height, so on wide
// screens (full-bleed slice) they hug the top and bottom edges. Pull each
// y-coordinate toward the vertical centre to give them breathing room.
const CENTER_Y = 450;
const Y_SQUASH = 0.95;
const sy = (y: number) => CENTER_Y + (y - CENTER_Y) * Y_SQUASH;

type Star = { cx: number; cy: number; r: number; accent?: boolean };

// Desktop coordinates with the vertical squash baked in.
const DESKTOP_LINES: Array<[number, number, number, number]> = LINES.map(
  ([x1, y1, x2, y2]) => [x1, sy(y1), x2, sy(y2)],
);
const DESKTOP_STARS: Star[] = STARS.map((s) => ({ ...s, cy: sy(s.cy) }));

function chartBody(
  lines: Array<[number, number, number, number]>,
  stars: Star[],
  strokeWidth: number,
) {
  return (
    <>
      <g
        className={`stroke-star opacity-[0.12] dark:opacity-30`}
        strokeWidth={strokeWidth}
      >
        {lines.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          />
        ))}
      </g>
      {stars.map((star) => (
        <g key={`${star.cx}-${star.cy}`}>
          {star.accent && (
            <circle
              cx={star.cx}
              cy={star.cy}
              r={star.r * 4}
              className={`fill-accent`}
              opacity={0.15}
            />
          )}
          <circle
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            className={star.accent ? `fill-accent` : `fill-star`}
            opacity={star.accent ? 0.9 : 0.55}
          />
        </g>
      ))}
    </>
  );
}

export default function ConstellationChart() {
  return (
    <>
      {/* phone: fit the whole landscape pattern (all clusters) into the
          narrow screen — slice would land in the empty centre gap */}
      <svg
        aria-hidden="true"
        className={`backdrop-layer pointer-events-none fixed inset-0 -z-10 h-full w-full sm:hidden`}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid meet"
      >
        {chartBody(DESKTOP_LINES, DESKTOP_STARS, 0.8)}
      </svg>
      {/* tablet + desktop: full-bleed cover */}
      <svg
        aria-hidden="true"
        className={`backdrop-layer pointer-events-none fixed inset-0 -z-10 hidden h-full w-full sm:block`}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {chartBody(DESKTOP_LINES, DESKTOP_STARS, 0.5)}
      </svg>
    </>
  );
}
