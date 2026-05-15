import type { FocusArea } from "@/lib/content-model";

export function FocusAreaBlock({ area }: { area: FocusArea }) {
  return (
    <article className="border-b border-line py-10">
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="font-mono text-xs text-subtle">{area.index}</p>
          <h2 className="mt-4 max-w-sm font-serif text-3xl font-medium leading-tight">
            {area.title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Signal label="Problem space" value={area.problem} />
          <Signal label="Systemic challenge" value={area.challenge} />
          <Signal label="Why current approaches fail" value={area.failure} />
          <Signal label="Universal Ventures approach" value={area.approach} />
        </div>
      </div>
    </article>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <h3 className="font-mono text-xs text-subtle">{label}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}
