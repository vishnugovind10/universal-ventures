export function ProofVisual({ type }: { type: string }) {
  if (type === "incentive-map") {
    return <IncentiveMap />;
  }

  if (type === "treasury-matrix") {
    return <TreasuryScenarioMatrix />;
  }

  if (type === "funding") {
    return <FundingMatrix />;
  }

  if (type === "simulation-output") {
    return <SimulationOutput />;
  }

  if (type === "economic-map") {
    return <EconomicSystemMap />;
  }

  if (type === "token-model") {
    return <TokenModelMap />;
  }

  if (type === "governance") {
    return <GovernanceTree />;
  }

  if (type === "liquidity") {
    return <LiquidityRouting />;
  }

  if (type === "market-making") {
    return <MarketMakingVisual />;
  }

  return <TwapVisual />;
}

function IncentiveMap() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <rect x="132" y="74" width="96" height="42" fill="var(--accent-muted)" stroke="currentColor" />
      <text x="154" y="100" fill="var(--foreground)" fontSize="12">reward</text>
      {[
        ["users", 34, 28],
        ["stakers", 246, 30],
        ["delegates", 32, 132],
        ["builders", 246, 132],
      ].map(([label, x, y]) => (
        <g key={String(label)}>
          <rect x={Number(x)} y={Number(y)} width="82" height="32" fill="var(--surface)" stroke="currentColor" />
          <text x={Number(x) + 14} y={Number(y) + 21} fill="var(--foreground)" fontSize="12">{label}</text>
          <path d={`M${Number(x) + 82} ${Number(y) + 16} C132 78 132 112 132 95`} fill="none" stroke="currentColor" />
        </g>
      ))}
    </svg>
  );
}

function TreasuryScenarioMatrix() {
  const cells = [
    ["Scenario", "Runway", "Support"],
    ["Base", "18m", "Normal"],
    ["Drawdown", "11m", "Constrained"],
    ["Stress", "7m", "Defensive"],
  ];

  return (
    <div className="grid grid-cols-3 border border-line text-xs">
      {cells.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            className={`border-b border-r border-line px-3 py-3 ${
              rowIndex === 0 ? "bg-accent-muted font-semibold text-foreground" : "bg-surface"
            }`}
          >
            {cell}
          </div>
        )),
      )}
    </div>
  );
}

function TwapVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="28" y1="148" x2="332" y2="148" stroke="var(--line)" />
      <line x1="46" y1="38" x2="46" y2="154" stroke="var(--line)" />
      {[0, 1, 2, 3, 4].map((item) => (
        <g key={item}>
          <rect
            x={70 + item * 48}
            y={112 - item * 10}
            width="26"
            height={36 + item * 10}
            fill="var(--accent-muted)"
            stroke="currentColor"
          />
          <circle cx={83 + item * 48} cy={70 + item * 8} r="4" fill="currentColor" />
        </g>
      ))}
      <path
        d="M83 70 C122 78 156 62 178 82 C214 112 242 80 275 102"
        fill="none"
        stroke="currentColor"
      />
      <text x="28" y="22" fill="var(--muted)" fontSize="12">
        execution slices / market impact
      </text>
    </svg>
  );
}

function MarketMakingVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <rect x="36" y="38" width="110" height="38" fill="var(--accent-muted)" stroke="currentColor" />
      <rect x="214" y="38" width="110" height="38" fill="var(--surface)" stroke="currentColor" />
      <rect x="124" y="114" width="112" height="38" fill="var(--surface-muted)" stroke="currentColor" />
      <path d="M146 57 H214 M236 76 L236 114 M124 133 H74 V76" fill="none" stroke="currentColor" />
      <circle cx="91" cy="57" r="5" fill="currentColor" />
      <circle cx="269" cy="57" r="5" fill="currentColor" />
      <circle cx="180" cy="133" r="5" fill="currentColor" />
      <text x="52" y="62" fill="var(--foreground)" fontSize="12">
        bid
      </text>
      <text x="253" y="62" fill="var(--foreground)" fontSize="12">
        ask
      </text>
      <text x="151" y="138" fill="var(--foreground)" fontSize="12">
        inventory
      </text>
    </svg>
  );
}

function FundingMatrix() {
  const cells = [
    ["Funding", "Signal", "Risk"],
    ["Binance", "+", "Low"],
    ["Bybit", "-", "Med"],
    ["Kraken", "+", "High"],
  ];

  return (
    <div className="grid grid-cols-3 border border-line text-xs">
      {cells.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            className={`border-b border-r border-line px-3 py-3 ${
              rowIndex === 0 ? "bg-accent-muted font-semibold text-foreground" : "bg-surface"
            }`}
          >
            {cell}
          </div>
        )),
      )}
    </div>
  );
}

function TokenModelMap() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      {[
        ["Treasury", 54, 48],
        ["Emissions", 214, 46],
        ["Liquidity", 64, 128],
        ["Governance", 226, 128],
      ].map(([label, x, y]) => (
        <g key={String(label)}>
          <rect
            x={Number(x)}
            y={Number(y)}
            width="96"
            height="34"
            fill="var(--surface)"
            stroke="currentColor"
          />
          <text x={Number(x) + 12} y={Number(y) + 22} fill="var(--foreground)" fontSize="12">
            {label}
          </text>
        </g>
      ))}
      <path d="M150 65 H214 M112 82 V128 M160 145 H226 M262 80 V128" fill="none" stroke="currentColor" />
      <circle cx="180" cy="96" r="16" fill="var(--accent-muted)" stroke="currentColor" />
      <text x="166" y="101" fill="var(--foreground)" fontSize="12">
        token
      </text>
    </svg>
  );
}

function SimulationOutput() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="36" y1="146" x2="326" y2="146" stroke="var(--line)" />
      <line x1="46" y1="34" x2="46" y2="154" stroke="var(--line)" />
      <path
        d="M52 132 C82 126 96 104 122 112 C154 122 166 64 196 76 C226 88 238 132 266 108 C292 86 304 58 326 64"
        fill="none"
        stroke="currentColor"
      />
      <path d="M52 102 H326" stroke="var(--line-strong)" strokeDasharray="4 6" />
      <circle cx="196" cy="76" r="5" fill="currentColor" />
      <circle cx="326" cy="64" r="5" fill="currentColor" />
      <text x="56" y="24" fill="var(--muted)" fontSize="12">stress threshold / state change</text>
      <text x="268" y="96" fill="var(--foreground)" fontSize="12">alert</text>
    </svg>
  );
}

function EconomicSystemMap() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <circle cx="180" cy="94" r="28" fill="var(--accent-muted)" stroke="currentColor" />
      <text x="160" y="99" fill="var(--foreground)" fontSize="12">token</text>
      {[
        ["Treasury", 34, 28],
        ["Market", 238, 28],
        ["Governance", 30, 130],
        ["Incentives", 232, 130],
      ].map(([label, x, y]) => (
        <g key={String(label)}>
          <rect x={Number(x)} y={Number(y)} width="94" height="32" fill="var(--surface)" stroke="currentColor" />
          <text x={Number(x) + 11} y={Number(y) + 21} fill="var(--foreground)" fontSize="12">{label}</text>
        </g>
      ))}
      <path d="M128 44 C150 56 166 68 180 94 M238 44 C214 56 196 70 180 94 M124 146 C150 132 168 116 180 94 M232 146 C214 130 196 114 180 94" fill="none" stroke="currentColor" />
    </svg>
  );
}

function GovernanceTree() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <rect x="118" y="24" width="124" height="34" fill="var(--accent-muted)" stroke="currentColor" />
      <text x="145" y="46" fill="var(--foreground)" fontSize="12">Decision</text>
      {[38, 132, 226].map((x, index) => (
        <g key={x}>
          <rect x={x} y="118" width="92" height="34" fill="var(--surface)" stroke="currentColor" />
          <text x={x + 18} y="140" fill="var(--foreground)" fontSize="12">
            {["Routine", "Escalate", "Veto"][index]}
          </text>
          <path d={`M180 58 C180 92 ${x + 46} 92 ${x + 46} 118`} fill="none" stroke="currentColor" />
        </g>
      ))}
    </svg>
  );
}

function LiquidityRouting() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <circle cx="72" cy="94" r="30" fill="var(--accent-muted)" stroke="currentColor" />
      <circle cx="180" cy="54" r="30" fill="var(--surface)" stroke="currentColor" />
      <circle cx="180" cy="136" r="30" fill="var(--surface)" stroke="currentColor" />
      <circle cx="292" cy="94" r="30" fill="var(--surface-muted)" stroke="currentColor" />
      <path d="M102 94 C132 64 142 54 150 54 M102 94 C132 124 142 136 150 136 M210 54 C244 62 260 72 270 94 M210 136 C244 128 260 116 270 94" fill="none" stroke="currentColor" />
      <text x="54" y="99" fill="var(--foreground)" fontSize="12">flow</text>
      <text x="159" y="59" fill="var(--foreground)" fontSize="12">venue</text>
      <text x="154" y="141" fill="var(--foreground)" fontSize="12">pool</text>
      <text x="276" y="99" fill="var(--foreground)" fontSize="12">depth</text>
    </svg>
  );
}
