import type {
  FailureMode,
  Principle,
  SolutionArea,
  VisualCaseStudy,
} from "@/lib/content-model";

type LoopStep = {
  title: string;
  description: string;
};

export function HeroSystemMap() {
  const nodes = [
    { label: "Treasury", x: 52, y: 46 },
    { label: "Governance", x: 208, y: 42 },
    { label: "Liquidity", x: 356, y: 74 },
    { label: "Validators", x: 88, y: 188 },
    { label: "Incentives", x: 252, y: 202 },
    { label: "Subnets", x: 392, y: 210 },
    { label: "Coordination", x: 210, y: 328 },
  ];

  return (
    <div className="relative overflow-hidden border border-line bg-surface p-4 shadow-sm shadow-line/30 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-line pb-4">
        <p className="font-mono text-xs text-subtle">Economic architecture map</p>
        <p className="font-mono text-xs text-accent">pressure paths</p>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 460 390"
        className="h-auto w-full text-accent"
      >
        <path
          className="uv-flow-line"
          d="M88 188 C130 110 168 52 208 42 C270 36 320 48 356 74"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          className="uv-flow-line uv-flow-delay-1"
          d="M52 46 C110 110 192 150 252 202 C308 250 358 264 392 210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          className="uv-flow-line uv-flow-delay-2"
          d="M356 74 C320 150 290 252 210 328 C168 286 122 234 88 188"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          className="uv-flow-line uv-flow-delay-3"
          d="M52 46 C92 168 124 286 210 328 C274 326 346 284 392 210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />

        {nodes.map((node, index) => (
          <g key={node.label}>
            <circle
              className="uv-node-pulse"
              cx={node.x}
              cy={node.y}
              r="18"
              fill="var(--surface)"
              stroke="currentColor"
              strokeWidth="1"
              style={{ animationDelay: `${index * 140}ms` }}
            />
            <circle cx={node.x} cy={node.y} r="4" fill="var(--accent)" />
          </g>
        ))}
      </svg>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {nodes.map((node) => (
          <div key={node.label} className="border-t border-line pt-3">
            <p className="font-mono text-xs text-subtle">{node.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoordinationBreakdownDiagram({ items }: { items: string[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="font-serif text-4xl font-medium leading-none md:text-6xl">
          Protocols rarely fail from code.
        </p>
        <p className="mt-6 max-w-2xl text-2xl leading-tight text-muted md:text-4xl">
          They fail from coordination breakdown.
        </p>
      </div>

      <div className="relative border border-line bg-surface/50 p-5">
        <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px bg-line md:block" />
        <div className="grid gap-4">
          {items.map((item, index) => (
            <div
              key={item}
              className="relative grid gap-3 border border-line bg-background p-4 md:grid-cols-[auto_1fr]"
            >
              <span className="font-mono text-xs text-subtle">0{index + 1}</span>
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SolutionCardGrid({ items }: { items: SolutionArea[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="group min-h-64 border border-line bg-surface/40 p-5 transition-colors hover:border-line-strong"
        >
          <div className="flex items-start justify-between gap-4">
            <SystemIcon index={index} />
            <span className="font-mono text-xs text-subtle">0{index + 1}</span>
          </div>
          <h3 className="mt-10 font-serif text-3xl font-medium leading-tight">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-foreground">{item.short}</p>
          <p className="mt-5 text-sm leading-6 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function FailureModeMap({
  items,
  consequences,
}: {
  items: FailureMode[];
  consequences: string[];
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
      <div className="border border-line bg-surface/50 p-6">
        <p className="font-mono text-xs text-subtle">System risk map</p>
        <h3 className="mt-5 max-w-sm font-serif text-4xl font-medium leading-none">
          Most systems fail from misaligned incentives under stress.
        </h3>
        <div className="mt-8 grid gap-3">
          {consequences.map((item) => (
            <p key={item} className="border-t border-line pt-3 text-sm text-muted">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="relative grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="border border-line bg-background p-4 transition-colors hover:border-line-strong"
          >
            <p className="font-mono text-xs text-subtle">risk 0{index + 1}</p>
            <h4 className="mt-5 text-lg font-semibold">{item.title}</h4>
            <p className="mt-3 text-sm leading-6 text-muted">{item.consequence}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ProtocolFeedbackLoop({ steps }: { steps: LoopStep[] }) {
  return (
    <div className="border border-line bg-surface/50 p-5">
      <div className="grid gap-4 lg:grid-cols-5">
        {steps.map((step, index) => (
          <article key={step.title} className="relative border border-line bg-background p-4">
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="font-mono text-xs text-subtle">0{index + 1}</p>
              <span className="h-px flex-1 bg-line" />
            </div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 border-t border-line pt-4 font-mono text-xs text-subtle">
        Pressure does not respect internal categories. It moves through the loop.
      </p>
    </div>
  );
}

export function VisualCaseStudyGrid({ items }: { items: VisualCaseStudy[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item, index) => (
        <article key={item.title} className="border border-line bg-surface/40 p-5">
          <div className="grid gap-6 md:grid-cols-[0.42fr_0.58fr]">
            <MiniCaseDiagram index={index} />
            <div>
              <p className="font-mono text-xs text-subtle">system example 0{index + 1}</p>
              <h3 className="mt-4 font-serif text-3xl font-medium leading-tight">
                {item.title}
              </h3>
              <Signal label="What breaks" value={item.breaks} />
              <Signal label="Economic consequence" value={item.consequence} />
              <Signal label="Leverage point" value={item.leverage} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PrincipleRail({ items }: { items: Principle[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {items.map((item, index) => (
        <article key={item.title} className="border-t border-line pt-5">
          <p className="font-mono text-xs text-subtle">0{index + 1}</p>
          <h3 className="mt-6 text-xl font-semibold leading-snug">{item.title}</h3>
          <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function SystemIcon({ index }: { index: number }) {
  const offset = 18 + index * 3;

  return (
    <svg aria-hidden="true" viewBox="0 0 72 72" className="h-14 w-14 text-line-strong">
      <circle cx="18" cy="20" r="7" fill="var(--surface)" stroke="currentColor" />
      <circle cx="52" cy="18" r="7" fill="var(--surface)" stroke="currentColor" />
      <circle cx="36" cy="52" r="7" fill="var(--surface)" stroke="currentColor" />
      <path
        d={`M24 22 C${offset} 34 30 42 36 45 M46 21 C42 31 39 40 36 45`}
        fill="none"
        stroke="currentColor"
      />
      <circle cx="18" cy="20" r="2" fill="var(--foreground)" />
      <circle cx="52" cy="18" r="2" fill="var(--foreground)" />
      <circle cx="36" cy="52" r="2" fill="var(--foreground)" />
    </svg>
  );
}

function MiniCaseDiagram({ index }: { index: number }) {
  return (
    <div className="flex min-h-52 items-center justify-center border border-line bg-background p-4">
      <svg aria-hidden="true" viewBox="0 0 220 160" className="h-auto w-full text-line-strong">
        <rect x="18" y="18" width="70" height="36" fill="var(--surface)" stroke="currentColor" />
        <rect x="132" y="18" width="70" height="36" fill="var(--surface)" stroke="currentColor" />
        <rect x="74" y="104" width="72" height="36" fill="var(--surface)" stroke="currentColor" />
        <path
          className="uv-flow-line"
          d="M88 36 C116 36 112 36 132 36 M167 54 C162 82 140 98 124 104 M90 104 C62 88 50 70 53 54 M74 122 C50 124 34 106 28 84"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          style={{ animationDelay: `${index * 160}ms` }}
        />
        <circle cx="53" cy="36" r="4" fill="var(--foreground)" />
        <circle cx="167" cy="36" r="4" fill="var(--foreground)" />
        <circle cx="110" cy="122" r="4" fill="var(--foreground)" />
      </svg>
    </div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-5 border-t border-line pt-4">
      <p className="font-mono text-xs text-subtle">{label}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}
