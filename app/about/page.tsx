import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

const operatingSignals = [
  "Protocol economics",
  "Treasury architecture",
  "Governance systems",
  "Liquidity coordination",
  "Infrastructure strategy",
  "Institutional usability",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Universal Ventures, an economic systems architecture practice for coordination survivability.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Anticipatory coordination architecture for digital economies."
        lede="Universal Ventures is built around a simple operating question: how does this system break before it scales?"
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <aside className="border border-line bg-surface/50 p-6">
            <p className="font-mono text-sm text-subtle">Vishnu Govind</p>
            <h2 className="mt-8 font-serif text-4xl font-medium leading-none">
              Strategic systems architect.
            </h2>
            <div className="mt-8 grid gap-3">
              {operatingSignals.map((signal) => (
                <p key={signal} className="border-t border-line pt-3 text-sm text-muted">
                  {signal}
                </p>
              ))}
            </div>
          </aside>

          <div className="max-w-3xl">
            <p className="text-2xl leading-snug text-foreground">
              Universal Ventures works where protocol economics, coordination
              systems, treasury constraints, governance rights, and institutional
              usability become one architecture problem.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <AboutSignal
                title="Systems before mechanisms"
                copy="A token mechanism is only useful if the surrounding market, governance, and liquidity system can absorb the behavior it creates."
              />
              <AboutSignal
                title="Decisions before frameworks"
                copy="The work is to reduce ambiguity into tradeoffs, constraints, and leverage points that can guide execution."
              />
              <AboutSignal
                title="Adversarial realism"
                copy="Protocols should be designed for actors who optimize, hedge, farm, collude, exit, and route around weak constraints."
              />
              <AboutSignal
                title="Institutional legibility"
                copy="Economic architecture must be readable as risk, obligations, controls, liquidity, and operating logic."
              />
            </div>

            <p className="mt-10 text-base leading-7 text-muted">
              The practice is not built around commentary. It is built around
              shaping system constraints before fragility becomes expensive:
              incentive design, treasury structure, governance architecture,
              liquidity coordination, market structure, and survivability under
              pressure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutSignal({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="border-t border-line pt-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
    </section>
  );
}
