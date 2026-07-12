import { TICKER } from "../data";

export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="relative z-10 border-y border-white/10 bg-black py-4">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-[13px] uppercase tracking-[0.2em] text-white/45"
          >
            {t}
            <span className="text-bio-cyan">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
