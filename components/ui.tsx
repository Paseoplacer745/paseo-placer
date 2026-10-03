import type { ReactNode } from "react";

export function Kicker({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <div className="kicker" style={color ? { color } : undefined}>
      <span className="h-px w-10" style={{ background: color ?? "var(--color-gold)" }} />
      <span>{children}</span>
    </div>
  );
}

export function SectionHead({ kicker, title, aside, id }: { kicker: string; title: ReactNode; aside?: ReactNode; id?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex flex-col gap-3.5">
        <Kicker>{kicker}</Kicker>
        <h2 id={id} className="h-section">{title}</h2>
      </div>
      {aside}
    </div>
  );
}
