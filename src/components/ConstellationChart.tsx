const LINES: Array<[number, number, number, number]> = [
  [140, 180, 320, 120],
  [320, 120, 500, 190],
  [1020, 140, 1180, 230],
  [1180, 230, 1120, 340],
  [180, 700, 340, 780],
  [1240, 620, 1340, 700],
];

const STARS: Array<{ cx: number; cy: number; r: number; accent?: boolean }> = [
  { cx: 140, cy: 180, r: 2.4 },
  { cx: 320, cy: 120, r: 1.6 },
  { cx: 500, cy: 190, r: 2 },
  { cx: 1020, cy: 140, r: 1.8 },
  { cx: 1180, cy: 230, r: 2.8, accent: true },
  { cx: 1120, cy: 340, r: 1.5 },
  { cx: 180, cy: 700, r: 1.9 },
  { cx: 340, cy: 780, r: 2.3 },
  { cx: 1240, cy: 620, r: 1.6 },
  { cx: 1340, cy: 700, r: 1.7 },
  { cx: 80, cy: 420, r: 1.4 },
  { cx: 720, cy: 90, r: 1.3 },
  { cx: 900, cy: 760, r: 1.5 },
  { cx: 620, cy: 640, r: 1.2 },
];

export default function ConstellationChart() {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 h-full w-full dark:hidden`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      {LINES.map(([x1, y1, x2, y2]) => (
        <line
          key={`${x1}-${y1}-${x2}-${y2}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#e4e4e7"
          strokeWidth="0.8"
        />
      ))}
      {STARS.map((star) => (
        <circle
          key={`${star.cx}-${star.cy}`}
          cx={star.cx}
          cy={star.cy}
          r={star.r}
          fill={star.accent ? '#8b5cf6' : '#a1a1aa'}
          opacity={star.accent ? 0.9 : 0.55}
        />
      ))}
    </svg>
  );
}
