const layers = [
  ["Governance", "Constraints", "Legibility"],
  ["Liquidity", "Treasury", "Market structure"],
  ["Incentives", "Risk", "Coordination"],
];

export function SystemDiagram() {
  return (
    <section className="border-b border-line" aria-label="Coordination system map">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
        <div className="grid min-h-80 border-y border-line md:grid-cols-[0.32fr_0.68fr]">
          <div className="flex flex-col justify-between border-b border-line py-8 md:border-b-0 md:border-r md:pr-8">
            <div>
              <p className="font-mono text-sm text-subtle">System map</p>
              <h2 className="mt-5 max-w-xs font-serif text-3xl font-medium leading-tight">
                Markets, governance, liquidity, and incentives designed together.
              </h2>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-6 text-muted">
              A protocol economy becomes fragile when its primitives are optimized in
              isolation. The work is to make the constraints coherent before pressure arrives.
            </p>
          </div>
          <div className="grid gap-0 py-6 md:pl-8">
            {layers.map((row, rowIndex) => (
              <div
                key={row.join("-")}
                className="grid grid-cols-1 border-b border-line last:border-b-0 sm:grid-cols-3"
              >
                {row.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="min-h-24 border-b border-line p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <p className="font-mono text-xs text-subtle">
                      0{rowIndex + 1}.0{itemIndex + 1}
                    </p>
                    <p className="mt-5 text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
