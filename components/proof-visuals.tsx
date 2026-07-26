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

  if (type === "peglab") {
    return <PegStressVisual />;
  }

  if (type === "navbridge") {
    return <NavReconciliationVisual />;
  }

  if (type === "canton") {
    return <CantonSyncVisual />;
  }

  if (type === "haircut") {
    return <HaircutVisual />;
  }

  if (type === "warrant") {
    return <WarrantVisual />;
  }

  if (type === "slotscope") {
    return <SlotscopeVisual />;
  }

  if (type === "reserve-waterfall") {
    return <ReserveWaterfallVisual />;
  }

  if (type === "redemption-queue") {
    return <RedemptionQueueVisual />;
  }

  if (type === "regulatory-heatmap") {
    return <RegulatoryHeatmapVisual />;
  }

  if (type === "settlement-sync") {
    return <SettlementSyncVisual />;
  }

  if (type === "nav-drift") {
    return <NavDriftVisual />;
  }

  if (type === "constraint-tree") {
    return <ConstraintTreeVisual />;
  }

  return <TwapVisual />;
}

function ReserveWaterfallVisual() {
  const bars = [
    { label: "Reserve", h: 118, tone: "var(--surface)" },
    { label: "Impaired", h: 92, tone: "var(--accent-muted)" },
    { label: "Stressed", h: 64, tone: "var(--accent-muted)" },
    { label: "Redemptions", h: 40, tone: "var(--surface-muted)" },
  ];

  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="30" y1="152" x2="330" y2="152" stroke="var(--line)" />
      {bars.map((bar, index) => (
        <g key={bar.label}>
          <rect
            x={54 + index * 72}
            y={152 - bar.h}
            width="48"
            height={bar.h}
            fill={bar.tone}
            stroke="currentColor"
          />
          <text x={54 + index * 72} y="170" fill="var(--muted)" fontSize="10">
            {bar.label}
          </text>
        </g>
      ))}
      <path d="M78 34 C140 34 220 34 280 34" stroke="var(--line-strong)" strokeDasharray="4 6" />
      <text x="30" y="24" fill="var(--muted)" fontSize="12">par value</text>
    </svg>
  );
}

function RedemptionQueueVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="30" y1="150" x2="330" y2="150" stroke="var(--line)" />
      <line x1="46" y1="30" x2="46" y2="154" stroke="var(--line)" />
      <path
        d="M52 60 C90 62 108 66 132 78 C160 92 176 118 206 130 C240 144 280 146 326 148"
        fill="none"
        stroke="currentColor"
      />
      <rect x="132" y="30" width="94" height="46" fill="var(--accent-muted)" stroke="currentColor" opacity="0.5" />
      <text x="142" y="52" fill="var(--foreground)" fontSize="11">payout gap</text>
      <text x="30" y="20" fill="var(--muted)" fontSize="12">queue depth over time</text>
    </svg>
  );
}

function RegulatoryHeatmapVisual() {
  const rows = 3;
  const cols = 5;
  const scores = [2, 1, 0, 1, 2, 0, 0, 1, 2, 1, 1, 0, 1, 2, 0];
  const tones = ["var(--surface)", "var(--accent-muted)", "var(--line-strong)"];

  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const i = row * cols + col;
          return (
            <rect
              key={i}
              x={30 + col * 62}
              y={30 + row * 46}
              width="52"
              height="36"
              fill={tones[scores[i]]}
              stroke="currentColor"
            />
          );
        }),
      )}
      <text x="30" y="182" fill="var(--muted)" fontSize="11">perimeter · MiCA · DORA · token-native · evidence</text>
    </svg>
  );
}

function SettlementSyncVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="30" y1="150" x2="330" y2="150" stroke="var(--line)" />
      <line x1="46" y1="30" x2="46" y2="154" stroke="var(--line)" />
      <path
        d="M52 60 C110 58 160 60 200 64"
        fill="none"
        stroke="var(--line-strong)"
      />
      <path
        d="M52 60 C110 76 160 104 200 132 C246 150 288 148 326 130"
        fill="none"
        stroke="currentColor"
      />
      <line x1="200" y1="64" x2="200" y2="132" stroke="currentColor" strokeDasharray="3 5" />
      <text x="208" y="100" fill="var(--foreground)" fontSize="11">sync debt</text>
      <text x="30" y="20" fill="var(--muted)" fontSize="12">domain drift over time</text>
    </svg>
  );
}

function NavDriftVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="30" y1="150" x2="330" y2="150" stroke="var(--line)" />
      <path
        d="M40 84 C100 82 160 80 220 78 C260 76 300 74 330 72"
        fill="none"
        stroke="var(--line-strong)"
      />
      <path
        d="M40 88 C100 90 160 96 220 108 C260 118 300 128 330 138"
        fill="none"
        stroke="currentColor"
      />
      <circle cx="220" cy="108" r="5" fill="currentColor" />
      <line x1="220" y1="78" x2="220" y2="108" stroke="currentColor" strokeDasharray="3 5" />
      <text x="228" y="96" fill="var(--foreground)" fontSize="11">drift flagged</text>
      <text x="30" y="24" fill="var(--muted)" fontSize="12">on-chain vs. fund books</text>
    </svg>
  );
}

function ConstraintTreeVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <rect x="140" y="20" width="80" height="32" fill="var(--accent-muted)" stroke="currentColor" />
      <text x="152" y="41" fill="var(--foreground)" fontSize="11">root hash</text>
      {[40, 140, 240].map((x) => (
        <g key={x}>
          <rect x={x} y="90" width="80" height="30" fill="var(--surface)" stroke="currentColor" />
          <path d={`M180 52 C180 74 ${x + 40} 74 ${x + 40} 90`} fill="none" stroke="currentColor" />
        </g>
      ))}
      {[10, 90, 170, 250].map((x, index) => (
        <g key={x}>
          <rect x={x} y="146" width="60" height="26" fill="var(--surface-muted)" stroke="currentColor" />
          <text x={x + 8} y="163" fill="var(--foreground)" fontSize="10">
            {["auth", "limit", "action", "log"][index]}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PegStressVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="30" y1="94" x2="330" y2="94" stroke="var(--line-strong)" strokeDasharray="4 6" />
      <path
        d="M30 94 C70 96 96 92 128 100 C160 108 176 132 200 150 C224 168 260 158 330 132"
        fill="none"
        stroke="currentColor"
      />
      <circle cx="200" cy="150" r="5" fill="currentColor" />
      <text x="30" y="24" fill="var(--muted)" fontSize="12">peg</text>
      <text x="176" y="168" fill="var(--foreground)" fontSize="12">depeg event</text>
    </svg>
  );
}

function NavReconciliationVisual() {
  const cells = [
    ["Ledger", "On-chain", "Books"],
    ["Supply", "1.000", "1.000"],
    ["NAV", "1.021", "1.019"],
    ["Delta", "flag", "flag"],
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

function CantonSyncVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <rect x="34" y="30" width="100" height="46" fill="var(--accent-muted)" stroke="currentColor" />
      <rect x="228" y="30" width="100" height="46" fill="var(--surface)" stroke="currentColor" />
      <rect x="130" y="120" width="100" height="46" fill="var(--surface-muted)" stroke="currentColor" />
      <path d="M134 53 H228 M180 76 V120 M84 76 V143 H130 M278 76 V143 H230" fill="none" stroke="currentColor" />
      <text x="46" y="57" fill="var(--foreground)" fontSize="12">domain A</text>
      <text x="240" y="57" fill="var(--foreground)" fontSize="12">domain B</text>
      <text x="146" y="147" fill="var(--foreground)" fontSize="12">sync debt</text>
    </svg>
  );
}

function HaircutVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="30" y1="150" x2="330" y2="150" stroke="var(--line)" />
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <rect
          key={item}
          x={48 + item * 46}
          y={150 - (24 + item * 14)}
          width="26"
          height={24 + item * 14}
          fill={item > 3 ? "var(--accent-muted)" : "var(--surface)"}
          stroke="currentColor"
        />
      ))}
      <text x="30" y="24" fill="var(--muted)" fontSize="12">liquidity concentration</text>
      <text x="266" y="52" fill="var(--foreground)" fontSize="12">haircut</text>
    </svg>
  );
}

function WarrantVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <rect x="130" y="20" width="100" height="34" fill="var(--accent-muted)" stroke="currentColor" />
      <text x="150" y="42" fill="var(--foreground)" fontSize="12">warrant</text>
      {[40, 140, 240].map((x, index) => (
        <g key={x}>
          <rect x={x} y="126" width="80" height="34" fill="var(--surface)" stroke="currentColor" />
          <text x={x + 12} y="148" fill="var(--foreground)" fontSize="11">
            {["action", "action", "action"][index]}
          </text>
          <path d={`M180 54 C180 90 ${x + 40} 90 ${x + 40} 126`} fill="none" stroke="currentColor" />
        </g>
      ))}
      <text x="40" y="182" fill="var(--muted)" fontSize="11">merkle constraint commitments</text>
    </svg>
  );
}

function SlotscopeVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-auto w-full text-accent" aria-hidden="true">
      <line x1="30" y1="150" x2="330" y2="150" stroke="var(--line)" />
      <line x1="46" y1="30" x2="46" y2="154" stroke="var(--line)" />
      {[0, 1, 2, 3, 4, 5, 6].map((item) => (
        <rect
          key={item}
          x={58 + item * 38}
          y={150 - (18 + ((item * 37) % 90))}
          width="22"
          height={18 + ((item * 37) % 90)}
          fill={(item * 37) % 90 > 60 ? "var(--accent-muted)" : "var(--surface)"}
          stroke="currentColor"
        />
      ))}
      <text x="30" y="20" fill="var(--muted)" fontSize="12">state-slot contention</text>
    </svg>
  );
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
