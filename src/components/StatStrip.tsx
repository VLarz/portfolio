type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: `$10M+`, label: `DeFi loans` },
  { value: `1M+`, label: `Users served` },
  { value: `40+`, label: `Products shipped` },
  { value: `6y`, label: `Experience` },
];

export default function StatStrip() {
  return (
    <div
      className={`mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-line pt-6`}
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
