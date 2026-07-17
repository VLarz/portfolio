type Stat = {
  value: string;
  label: string;
};

const CAREER_START = new Date(2020, 1); // February 2020

function yearsSince(start: Date): string {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years -= 1;
  }
  return `${years}y`;
}

const stats: Stat[] = [
  { value: `$10M+`, label: `DeFi loans` },
  { value: `1M+`, label: `Users served` },
  { value: `40+`, label: `Products shipped` },
  { value: yearsSince(CAREER_START), label: `Experience` },
];

export default function StatStrip() {
  return (
    <div
      className={`mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-4`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className={`text-center`}>
          <div className={`text-xl font-extrabold`}>{stat.value}</div>
          <div
            className={`text-[10px] uppercase tracking-[0.2em] text-fg-subtle`}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
