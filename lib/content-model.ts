export const positioning = {
  headline: "Economic and settlement architecture for institutional digital assets.",
  subheadline:
    "I design and stress-test the economic layer of tokenized systems — and publish the tools that verify the claims. Token economics, stablecoin mechanisms, settlement architecture and MiCA/DORA readiness for institutions, protocols and funds that need designs proven rather than described.",
  shortDescription:
    "Economic and settlement architecture for institutional digital asset systems.",
  trustStrip: [
    "Token economics",
    "Stablecoin mechanisms",
    "Settlement architecture",
    "MiCA / DORA readiness",
  ],
};

export const heroBrief = [
  {
    label: "What",
    value: "Token economics, stablecoin and reserve mechanisms, settlement and custody architecture, treasury and liquidity design — assessed against adversarial conditions and regulatory constraint together.",
  },
  {
    label: "Who",
    value: "Banks and advisory firms taking tokenized products to market. Protocol teams whose economics have to survive institutional diligence. Funds running technical diligence on token-heavy investments.",
  },
  {
    label: "Why",
    value: "Designs that hold in normal conditions routinely fail under the events that matter — depegs, redemption waves, liquidation cascades, supervisory review. That is when the economic layer is actually tested.",
  },
  {
    label: "Next",
    value: "Bring a system constraint. Leave with a scored assessment, the failure modes that matter, and a remediation path you can act on.",
  },
];

export const credibilityStrip = [
  "ECB Eurosystem — Project Appia consultation contributor (tokenized wholesale settlement)",
  "MiCA Crypto Alliance — research affiliation",
  "Strategic Systems Architect, Exponential Science — protocol economic & settlement design",
  "15 years across derivatives market-making, exchange infrastructure and wealth-management systems",
];

export const intersections = [
  "Incentive systems",
  "Treasury structures",
  "Governance architecture",
  "Liquidity coordination",
  "Market infrastructure",
  "Institutional usability",
];

export const progressiveDisclosureLabels = {
  exploreSystem: "Explore System",
  inspectDynamics: "Inspect Dynamics",
  viewMechanism: "View Mechanism",
  expandAnalysis: "Expand Analysis",
  openFramework: "Open Framework",
  traceInteractions: "Trace Interactions",
  viewFailureModes: "View Failure Modes",
  exploreCoordinationLogic: "Explore Coordination Logic",
};

export const whatWeActuallyDo = {
  title: "Architecture, intelligence, and operating models for digital economies.",
  summary:
    "The practice connects economic design, system stress testing, governance structure, liquidity strategy, and institutional translation into one coherent operating surface.",
  signals: [
    "Map how participants optimize.",
    "Clarify what must hold under volatility.",
    "Translate pressure into operating constraints.",
  ],
};

export const professionalSignals = [
  {
    label: "Architecture",
    title: "Economic systems that can be operated, governed, and explained.",
    description:
      "Design token, treasury, governance, and liquidity systems around pressure, not only launch assumptions.",
  },
  {
    label: "Intelligence",
    title: "Research that identifies how systems break before they scale.",
    description:
      "Surface incentive leakage, liquidity extraction, governance latency, and reflexive treasury exposure early.",
  },
  {
    label: "Implementation",
    title: "Decision structures for teams managing real market behavior.",
    description:
      "Turn complex system dynamics into constraints, tradeoffs, operating models, and coordination paths.",
  },
];

export const audienceSegments = [
  {
    title: "Protocols",
    description:
      "Design incentives, emissions, staking, governance, and market structure for systems moving from launch to durable operation.",
    action: "Strengthen Protocol Architecture",
  },
  {
    title: "DAOs",
    description:
      "Clarify decision rights, treasury policy, delegation, escalation paths, and coordination capacity under volatility.",
    action: "Improve Coordination Systems",
  },
  {
    title: "Digital asset networks",
    description:
      "Model how validators, liquidity, subnets, applications, and token flows interact as network complexity increases.",
    action: "Map Network Economics",
  },
  {
    title: "Institutions",
    description:
      "Translate protocol economics into risk surfaces, controls, obligations, liquidity assumptions, and operating logic.",
    action: "Make Systems Legible",
  },
];

export const insightHighlights = [
  {
    type: "System note",
    title: "Most protocol failures are coordination failures.",
    summary:
      "The visible failure is often price, governance, or liquidity. The root failure is usually system design under pressure.",
  },
  {
    type: "Operating view",
    title: "Treasury, liquidity, and incentives should be designed together.",
    summary:
      "When these systems separate, protocols lose control exactly when volatility makes control most valuable.",
  },
  {
    type: "Research focus",
    title: "Institutional adoption requires economic legibility.",
    summary:
      "Serious participants need to understand constraints, obligations, control rights, and risk before they can trust the system.",
  },
];

export const evidenceMetrics = [
  {
    value: "11",
    label: "open-source verification instruments",
    detail: "Stablecoin stress-testing, NAV integrity, RWA risk, Canton audit evidence, EVM contention profiling, agent constraint enforcement.",
  },
  {
    value: "40+",
    label: "published technical articles",
    detail: "Coinmonks, Block Magnates, DataDrivenInvestor — tokenization, mechanism design, DeFi risk architecture, agentic AI governance.",
  },
  {
    value: "2",
    label: "published venture theses",
    detail: "Synchronization Debt (institutional DLT) and the Integration Moat (quantum), each instrumented with working tooling.",
  },
  {
    value: "3",
    label: "engagement modes",
    detail: "Fixed-fee diagnostic · architecture engagement · embedded advisory.",
  },
];

export const trustSignals = [
  "Public implementation artifacts, not only written positioning.",
  "Research connected to execution, market infrastructure, and coordination design.",
  "Artifacts designed to reduce uncertainty before governance or capital decisions harden.",
];

export const proofObjects = [
  {
    title: "PegLab — Stablecoin Stress-Testing Workbench",
    type: "Instrument",
    source: "github.com/vishnugovind10/peglab",
    href: "https://github.com/vishnugovind10/peglab",
    problem: "Reserve and peg mechanisms are usually argued, not simulated.",
    output: "Depeg and collateral stress-testing tested against reserve stress, not asserted.",
  },
  {
    title: "NavBridge — NAV Integrity Monitoring",
    type: "Instrument",
    source: "github.com/vishnugovind10/navbridge",
    href: "https://github.com/vishnugovind10/navbridge",
    problem: "Tokenized funds can rarely evidence that on-chain state and the fund's own books agree.",
    output: "Reconciliation control an auditor or supervisor asks for first.",
  },
  {
    title: "Canton Control Plane / Observer / ProofPack",
    type: "Instrument",
    source: "github.com/vishnugovind10/canton-synch-control",
    href: "https://github.com/vishnugovind10/canton-synch-control",
    problem: "Privacy-partitioned ledgers make completeness and audit evidence hard.",
    output: "Companion tooling to the Synchronization Debt thesis — theory and instrument published together.",
  },
];

export const problemSpace = [
  {
    title: "Capital inefficiency",
    consequence: "Incentives fund activity that does not become durable participation.",
    mechanism: "Reward routing, emissions pressure, and participant exit behavior.",
    artifact: "Incentive map and sensitivity table.",
  },
  {
    title: "Treasury depletion",
    consequence: "Runway, liquidity support, and market confidence become reflexively linked.",
    mechanism: "Reserve policy, emissions, unlocks, and drawdown scenarios.",
    artifact: "Treasury scenario matrix.",
  },
  {
    title: "Governance capture",
    consequence: "Control concentrates faster than legitimacy or response capacity can adapt.",
    mechanism: "Delegation inertia, liquid voting power, veto rights, and escalation paths.",
    artifact: "Governance tree and decision-rights map.",
  },
  {
    title: "Liquidity fragility",
    consequence: "Depth disappears when incentives change or volatility arrives.",
    mechanism: "Routing leakage, market-maker dependence, spread quality, and rented capital.",
    artifact: "Liquidity routing diagram.",
  },
  {
    title: "Exploit surfaces",
    consequence: "Mechanism complexity creates pathways for actors to extract value from design gaps.",
    mechanism: "Adversarial testing, stress cases, and failure-mode review.",
    artifact: "Failure-mode register.",
  },
  {
    title: "Coordination breakdown",
    consequence: "Teams lose response capacity as participants optimize locally.",
    mechanism: "Authority boundaries, shared constraints, and coordination cadence.",
    artifact: "Operating model and escalation map.",
  },
];

export const buyerOutcomes = [
  {
    before: "Emissions, liquidity incentives, and treasury policy are being discussed separately.",
    work: "Build a shared economic model across incentives, runway, market depth, and participant behavior.",
    after: "The team can see which tradeoffs materially affect capital efficiency and survivability.",
  },
  {
    before: "Governance looks active but hard decisions still bottleneck or fragment.",
    work: "Map decision rights, escalation paths, delegation risks, and intervention constraints.",
    after: "The system has clearer authority boundaries before volatility forces urgent coordination.",
  },
  {
    before: "Liquidity appears healthy, but routing, quality, and dependency risk are unclear.",
    work: "Review market structure, execution surfaces, funding exposure, and liquidity incentives.",
    after: "The team can separate durable market quality from rented or extractive capital.",
  },
  {
    before: "External stakeholders cannot evaluate the system without dense internal explanation.",
    work: "Translate protocol-native assumptions into risk maps, controls, artifacts, and diligence language.",
    after: "Institutional partners can review the economic logic without flattening the system.",
  },
];

export const engagementFit = [
  {
    title: "A mechanism is about to become policy.",
    description:
      "Use the work before emissions, staking, treasury, liquidity, or governance changes become expensive to reverse.",
  },
  {
    title: "Growth is increasing coordination risk.",
    description:
      "Use the work when more markets, validators, subnets, delegates, or partners are adding operating complexity.",
  },
  {
    title: "The team needs a decision artifact.",
    description:
      "Use the work when internal alignment or external diligence needs a map, matrix, model, or evidence pack.",
  },
  {
    title: "Failure modes are known but not structured.",
    description:
      "Use the work when risks are visible but the team needs them translated into priorities and constraints.",
  },
];

export const selectedWork = [
  {
    context: "Protocol economics review",
    problem: "Emissions and liquidity incentives were creating weak retention signals.",
    evidence: "Scenario model, incentive map, and treasury runway sensitivity.",
    outcome: "Clearer allocation logic and pressure-tested operating constraints.",
  },
  {
    context: "Governance and coordination assessment",
    problem: "Decision rights were too broad for fast response during market stress.",
    evidence: "Governance tree, escalation map, and intervention-rights matrix.",
    outcome: "Reduced decision ambiguity and clearer response paths.",
  },
  {
    context: "Market infrastructure analysis",
    problem: "Liquidity depth looked healthy while routing and capital quality were fragile.",
    evidence: "Liquidity routing diagram and execution-quality review.",
    outcome: "Separated useful market depth from rented or extractive liquidity.",
  },
];

export const systemArtifacts = [
  {
    title: "PegLab — Stablecoin Depeg & Collateral Stress-Testing Workbench",
    source: "GitHub: peglab",
    href: "https://github.com/vishnugovind10/peglab",
    visual: "peglab",
    problem: "Reserve and peg mechanisms are usually argued, not simulated.",
    capability: "Simulates depeg pathways, collateral drawdown, and reserve stress across peg-defense mechanisms.",
    relevance: "Shows mechanism design tested against reserve stress, not asserted.",
  },
  {
    title: "NavBridge — NAV Integrity Monitoring for Tokenized Funds",
    source: "GitHub: navbridge",
    href: "https://github.com/vishnugovind10/navbridge",
    visual: "navbridge",
    problem: "Tokenized funds can rarely evidence that on-chain state and the fund's own books agree.",
    capability: "Reconciles on-chain token supply and NAV against off-chain fund accounting in real time.",
    relevance: "The control an auditor or supervisor asks for first.",
  },
  {
    title: "Canton Control Plane / Observer / ProofPack",
    source: "GitHub: canton-synch-control, canton-observer, canton-proofpack",
    href: "https://github.com/vishnugovind10/canton-synch-control",
    visual: "canton",
    problem: "Privacy-partitioned ledgers make completeness and audit evidence hard.",
    capability: "Measures synchronization debt and produces tamper-evident audit evidence across Canton Network deployments.",
    relevance: "Companion tooling to the Synchronization Debt thesis — theory and instrument published together.",
  },
  {
    title: "Haircut — Institutional RWA Risk Terminal",
    source: "GitHub: haircut",
    href: "https://github.com/vishnugovind10/haircut",
    visual: "haircut",
    problem: "Redemption risk in tokenized RWA pools is scattered across vault contracts, withdrawal queues, and oracles.",
    capability: "Dynamic haircuts, NAV VaR and liquidity concentration over live ERC-4626 pools, Centrifuge, Maple and Ondo.",
    relevance: "Connects portfolio risk practice to on-chain exposure.",
  },
  {
    title: "Agent Warrant — Verifiable Constraint Enforcement for Autonomous Agents",
    source: "GitHub: warrant",
    href: "https://github.com/vishnugovind10/warrant",
    visual: "warrant",
    problem: "Agent logs are not evidence — they can be edited, and compliant-sounding text can coexist with violating actions.",
    capability: "Signed warrants, Merkle constraint commitments, and tamper-evident audit logs (Rust + Python).",
    relevance: "Verifiable authorization boundaries for agents wired into payments, trading, and infrastructure.",
  },
  {
    title: "Slotscope — EVM State-Contention Profiler",
    source: "GitHub: slotscope",
    href: "https://github.com/vishnugovind10/slotscope",
    visual: "slotscope",
    problem: "Parallel-execution chains punish contended contract designs, and compliance registries write to shared state on every transfer.",
    capability: "Profiles EVM state contention and identifies where parallel execution degrades under load.",
    relevance: "The measurement instrument behind the compliance-architecture thesis.",
  },
];

export const earlierWork = [
  {
    title: "Market Making Engine",
    source: "GitHub: MarketMaking",
    href: "https://github.com/vishnugovind10/MarketMaking",
    visual: "market-making",
    problem: "Protocols need liquidity systems that account for spread, inventory, P&L, and stop conditions.",
    capability: "Demonstrates order-book analysis, bid-ask logic, P&L monitoring, and risk stop conditions.",
    relevance: "Market microstructure fluency — 21 stars, 6 forks.",
  },
  {
    title: "TWAP Execution Infrastructure",
    source: "GitHub: TWAPexecution",
    href: "https://github.com/vishnugovind10/TWAPexecution",
    visual: "twap",
    problem: "Large orders can move markets when execution is not broken into disciplined time intervals.",
    capability: "Implements a time-weighted execution logic using exchange price data and scheduled order slices.",
    relevance: "Translates execution theory into code.",
  },
  {
    title: "Funding Analytics Infrastructure",
    source: "GitHub: institutional-crypto-funding-analyzer",
    href: "https://github.com/vishnugovind10/institutional-crypto-funding-analyzer",
    visual: "funding",
    problem: "Funding-rate exposure is hard to evaluate without exchange data, stress tests, and risk metrics.",
    capability: "Models multi-exchange funding rates, backtests strategies, and includes risk-management views.",
    relevance: "Connects market infrastructure, analytics, and institutional operating needs.",
  },
];

export const visualProofExamples = [
  {
    title: "Reserve stress waterfall",
    visual: "reserve-waterfall",
    description: "Shows how collateral quality, drawdown speed, and redemption pressure cascade through a reserve.",
  },
  {
    title: "Redemption queue depth",
    visual: "redemption-queue",
    description: "Models how fast a fund or stablecoin can actually pay out under a concentrated exit.",
  },
  {
    title: "MiCA / DORA control heatmap",
    visual: "regulatory-heatmap",
    description: "Scores each control point green, amber, or red against evidence, not policy language.",
  },
  {
    title: "Settlement synchronization map",
    visual: "settlement-sync",
    description: "Tracks how far privacy-partitioned ledger domains drift before synchronization debt becomes an audit gap.",
  },
  {
    title: "NAV drift monitor",
    visual: "nav-drift",
    description: "Flags the moment on-chain token state and off-chain fund accounting stop agreeing.",
  },
  {
    title: "Constraint commitment tree",
    visual: "constraint-tree",
    description: "Turns an agent's or contract's authorization boundary into a signed, tamper-evident record.",
  },
];

export const advisoryServices = [
  {
    title: "Token & Reserve Architecture",
    problem: "Stablecoin reserves, token economics, and redemption mechanics are often designed and documented separately.",
    consequence: "Capital allocation becomes harder to govern when reserve policy and token design drift apart.",
    method: "Map reserve composition, redemption rights, peg-defense mechanisms, and stress scenarios together.",
    deliverable: "Reserve architecture memo, peg-stress map, and scenario matrix.",
  },
  {
    title: "Settlement & Custody Systems",
    problem: "Settlement finality, custody segregation, and upgrade-key governance can look sound on paper while remaining unverified on-chain.",
    consequence: "Audit and supervisory review expose gaps between the policy file and the deployed contracts.",
    method: "Verify custody, segregation, upgrade-path, and reconciliation claims against deployed contracts, not descriptions.",
    deliverable: "Settlement architecture map, custody control review, and audit evidence pack.",
  },
  {
    title: "Tokenized Fund & RWA Infrastructure",
    problem: "NAV, redemption liquidity, and collateral quality can appear healthy while reconciliation and concentration risk remain unclear.",
    consequence: "Capital becomes expensive, extractive, or unreliable when fund infrastructure is treated as external plumbing.",
    method: "Reconcile on-chain state against fund books, and model redemption depth, haircuts, and NAV VaR.",
    deliverable: "NAV reconciliation report, liquidity concentration review, and remediation priorities.",
  },
  {
    title: "Regulatory Translation (MiCA / DORA)",
    problem: "Serious partners and supervisors need risk, controls, obligations, and operating logic made legible and evidenced.",
    consequence: "Adoption slows when economic design cannot be reviewed, challenged, or evidenced by non-native stakeholders.",
    method: "Translate token-native systems into diligence-ready, evidence-based MiCA/DORA control assessments.",
    deliverable: "Scored control heatmap, findings register, and prioritised remediation roadmap.",
  },
];

export const operatingModel = [
  {
    phase: "01",
    title: "Diagnose",
    input: "System documentation, token flows, governance process, liquidity programs, and operating constraints.",
    mechanism: "Map actors, incentives, decision rights, treasury exposure, and market structure dependencies.",
    output: "Pressure map and initial failure-mode register.",
    reduction: "Clarifies what must be solved before proposing mechanisms.",
  },
  {
    phase: "02",
    title: "Model",
    input: "Failure modes, economic assumptions, actor behavior, and available data.",
    mechanism: "Run scenario analysis, sensitivity checks, adversarial cases, and mechanism comparisons.",
    output: "Scenario matrix, sensitivity table, and design tradeoff memo.",
    reduction: "Shows which variables materially affect survivability.",
  },
  {
    phase: "03",
    title: "Architect",
    input: "Validated constraints, governance needs, market realities, and implementation limits.",
    mechanism: "Convert tradeoffs into token, treasury, governance, liquidity, and coordination design choices.",
    output: "Architecture memo, operating model, artifact pack, and implementation priorities.",
    reduction: "Turns ambiguity into decisions teams can review and execute.",
  },
  {
    phase: "04",
    title: "Translate",
    input: "Architecture decisions, residual risks, assumptions, and operating responsibilities.",
    mechanism: "Convert system logic into stakeholder-ready artifacts and review surfaces.",
    output: "Evidence pack, risk summary, and engagement-ready briefing.",
    reduction: "Improves internal alignment and external diligence readability.",
  },
];

export const validationInfrastructure = [
  {
    title: "Simulation workflows",
    consequence: "Model how treasury, incentives, liquidity, and governance assumptions behave across states.",
    method: "Scenario runs, state transitions, threshold checks, and parameter comparison.",
    tools: "cadCAD or TokenSPICE when simulation scope requires formal modeling.",
    artifact: "Simulation output and parameter log.",
  },
  {
    title: "Adversarial testing",
    consequence: "Expose how rational actors extract, hedge, capture, route around, or abandon a mechanism.",
    method: "Actor strategy mapping, attack surfaces, incentive leakage review, and failure-mode tests.",
    tools: "Machinations where mechanism loops need fast interactive stress testing.",
    artifact: "Failure-mode register and mitigation map.",
  },
  {
    title: "Scenario analysis",
    consequence: "Evaluate decisions under volatility, unlocks, emissions changes, liquidity shocks, and governance delay.",
    method: "Base, stress, drawdown, and recovery cases with explicit assumptions.",
    tools: "Spreadsheet models or lightweight code when formal simulation would add noise.",
    artifact: "Treasury and liquidity scenario matrix.",
  },
  {
    title: "Sensitivity analysis",
    consequence: "Identify the variables that create nonlinear risk or strategic loss of control.",
    method: "Parameter sweeps across rewards, runway, depth, concentration, and participation quality.",
    tools: "Code notebooks or structured tables depending on evidence needs.",
    artifact: "Sensitivity table and decision threshold summary.",
  },
];

export const observatoryHighlights = [
  {
    label: "Research objects",
    title: "System theses with outputs",
    description: "Published analysis is framed as decision support: thesis, system implication, and artifact path.",
    href: "/research",
  },
  {
    label: "Systems",
    title: "Implementation evidence",
    description: "Repositories show stablecoin stress-testing, NAV reconciliation, settlement audit evidence, and RWA risk tooling.",
    href: "/research",
  },
  {
    label: "Artifacts",
    title: "Reviewable outputs",
    description: "Maps, matrices, simulations, and evidence packs make system design auditable before deployment.",
    href: "/systems",
  },
];

export const systemsCategories = [
  {
    title: "Economic Architecture",
    problem: "Token, treasury, emissions, and liquidity assumptions drift apart.",
    consequence: "Capital inefficiency and treasury depletion increase when economic assumptions are not reviewed as one system.",
    method: "Build one model for value flows, participant behavior, and stress conditions.",
    output: "Architecture memo and treasury scenario matrix.",
    artifact: "Token / economic modeling system",
  },
  {
    title: "Coordination Systems",
    problem: "Governance bottlenecks slow response when market conditions change.",
    consequence: "Governance capture and coordination breakdown become more likely when authority and escalation paths are unclear.",
    method: "Clarify authority, escalation paths, delegated rights, and review cadence.",
    output: "Governance tree and coordination operating model.",
    artifact: "Decision-rights map",
  },
  {
    title: "Market Infrastructure",
    problem: "Liquidity programs can subsidize volume without improving durable market quality.",
    consequence: "Liquidity fragility increases when capital is rented without improving routing, depth quality, or control.",
    method: "Analyze routing, spread, inventory risk, funding rates, and market-maker incentives.",
    output: "Liquidity routing diagram and execution-risk review.",
    artifact: "TWAP, market-making, and funding analytics systems",
  },
  {
    title: "Institutional Translation",
    problem: "Strong systems lose trust when risk and control surfaces are hard to evaluate.",
    consequence: "Institutional ecosystems move slower when infrastructure cannot be reviewed, explained, or governed.",
    method: "Convert design logic into diligence language, controls, assumptions, and operating constraints.",
    output: "Institutional readiness brief and evidence pack.",
    artifact: "Risk and controls summary",
  },
];

export const researchEvidence = [
  {
    title: "The Physics of Finality",
    href: "https://medium.com/coinmonks/the-physics-of-finality-how-alpenglow-turns-geography-into-governance-d71405f756c8",
    thesis: "High-speed finality turns geography, latency, and topology into economic variables.",
    insight: "Infrastructure constraints can centralize practical coordination power even when governance remains formally distributed.",
    relatedSystems: "Coordination Fabric; routing pressure; validator economics",
  },
  {
    title: "The Rise of the Agentic Economy",
    href: "https://medium.com/coinmonks/the-rise-of-the-agentic-economy-how-ai-agents-are-rewriting-the-rules-of-money-ee876d376452",
    thesis: "Autonomous economic actors change how verification, incentives, and trust need to be designed.",
    insight: "The cost of synthetic output can fall faster than the cost of verification, creating new incentive attacks.",
    relatedSystems: "Incentive maps; verification economics; coordination systems",
  },
  {
    title: "The Ghosts in the Machine",
    href: "https://vishnugovind10.medium.com/the-ghosts-in-the-machine-what-market-making-taught-me-about-building-the-future-000dea5888da",
    thesis: "Market-making infrastructure reveals hidden assumptions about human behavior and coordination.",
    insight: "Execution code is not neutral plumbing; every parameter encodes a system preference.",
    relatedSystems: "Market Making Engine; liquidity coordination; market infrastructure",
  },
  {
    title: "The Tokenization Trade Thesis",
    href: "https://vishnugovind10.medium.com/the-16-trillion-revolution-how-tokenization-is-rewriting-global-trade-6ddf9e48ad09",
    thesis: "Tokenization only works when economic design, financing needs, and institutional usability align.",
    insight: "The tokenomics problem is not issuance; it is building a sustainable economic system around the asset.",
    relatedSystems: "Treasury scenarios; institutional translation; economic architecture",
  },
];

export const repositoryEvidence = [
  {
    title: "institutional-crypto-funding-analyzer",
    href: "https://github.com/vishnugovind10/institutional-crypto-funding-analyzer",
    description: "Funding-rate analytics and backtesting infrastructure across major derivatives exchanges.",
    capability: "Real-time data, backtesting, slippage, stress testing, VaR/CVaR, and reporting.",
    proof: "Python package structure with config, data, docs, source modules, and tests.",
    relevance: "Shows implementation depth around funding exposure and market-risk analytics.",
  },
  {
    title: "MarketMaking",
    href: "https://github.com/vishnugovind10/MarketMaking",
    description: "Crypto market-making algorithm focused on order-book analysis and stop conditions.",
    capability: "Bid-ask logic, inventory-aware monitoring, P&L tracking, and risk controls.",
    proof: "Python implementation plus market-making flow diagrams.",
    relevance: "Supports liquidity coordination and market infrastructure advisory work.",
  },
  {
    title: "TWAPexecution",
    href: "https://github.com/vishnugovind10/TWAPexecution",
    description: "Algorithmic execution prototype for time-weighted average price order slicing.",
    capability: "Scheduled execution, price-data integration, and market-impact reduction logic.",
    proof: "Python TWAP script and implementation notes.",
    relevance: "Connects market microstructure theory to executable trading infrastructure.",
  },
  {
    title: "coordination-fabric",
    href: "https://github.com/vishnugovind10/coordination-fabric",
    description: "Deterministic infrastructure observatory for coordination under routing and congestion pressure.",
    capability: "Scenario selection, pressure states, topology maps, operational metrics, and exportable snapshots.",
    proof: "Next.js/TypeScript system with local simulation and coordination-engine modules.",
    relevance: "Bridges research theses into visual systems interfaces and explainable artifacts.",
  },
];

export const engagementReasons = [
  "Emissions are creating sell pressure or weak retention.",
  "Governance is too slow for decisions that matter.",
  "Liquidity looks healthy but quality, routing, or dependency risk is unclear.",
  "Treasury policy, runway, and market confidence are becoming reflexive.",
  "Validator, subnet, delegate, or ecosystem incentives are drifting.",
];

export const scopeAnchors = [
  {
    title: "Assessment",
    duration: "2-3 weeks",
    pricing: "Starts EUR 2-5k",
    description: "Evidence review, pressure map, risk surface, and prioritized recommendations.",
  },
  {
    title: "Architecture Engagement",
    duration: "4-8 weeks",
    pricing: "Typically EUR 5-20k+",
    description: "System model, design constraints, artifact pack, and implementation-ready outputs.",
  },
  {
    title: "Retainer Advisory",
    duration: "Monthly cadence",
    pricing: "Scoped",
    description: "Ongoing review, decision support, research translation, and architecture iteration.",
  },
];

export const founderProfile = {
  name: "Vishnu Govind",
  role: "Founder, Universal Ventures — Utrecht",
  focus:
    "I architect the economic and settlement layer of institutional digital asset systems: where token design, DLT infrastructure and regulatory constraint meet.",
  why:
    "Currently Strategic Systems Architect at Exponential Science, holding architectural authority over a protocol's economic and settlement design, and running Universal Ventures alongside it. Before digital assets: close to fifteen years across derivatives market-making (Mercantile Exchange Nepal), algorithmic proprietary trading (Hold Brothers, NYC), exchange and trading-systems product management, wealth-management infrastructure at Envestnet, and structured project finance. That background is why I treat incentives and liquidity as things that have to hold under stress rather than things that work on a whiteboard.",
};

export const credentials = [
  "Formal response to the ECB Eurosystem's Project Appia consultation on tokenized wholesale settlement",
  "Research affiliation, MiCA Crypto Alliance",
  "Token-engineering diligence on venture investments, translated into enforceable deal terms",
  "Fundraising strategy and partnerships (volunteer), WIQD — Quantum Delta NL",
];

export const education = [
  "MBA Financial Management — IMT Ghaziabad",
  "BTech Computer Science & Systems Engineering — University of Kerala",
  "Financial Engineering & Risk Management certificate — Columbia University",
];

export const workingPrinciples = [
  "Constraint-first",
  "Artifact-led",
  "Research-driven",
  "Adversarial thinking",
  "Implementation-oriented",
];

export const researchObjectFilters = [
  "Stablecoins",
  "Tokenized Funds",
  "Settlement",
  "RWA",
  "Compliance",
  "Agentic AI",
  "Market Design",
];

export const researchObjects = [
  {
    title: "peglab",
    href: "https://github.com/vishnugovind10/peglab",
    type: "Repository",
    domain: "Stablecoins",
    problem: "Identify where reserve and peg-defense mechanisms break under redemption and collateral stress.",
    implementation: "High",
    readTime: "Code",
  },
  {
    title: "navbridge",
    href: "https://github.com/vishnugovind10/navbridge",
    type: "Repository",
    domain: "Tokenized Funds",
    problem: "Reconcile on-chain token state against off-chain fund accounting to evidence NAV integrity.",
    implementation: "High",
    readTime: "Code",
  },
  {
    title: "canton-synch-control",
    href: "https://github.com/vishnugovind10/canton-synch-control",
    type: "Repository",
    domain: "Settlement",
    problem: "Measure synchronization debt inside Canton Network deployments and produce audit evidence.",
    implementation: "High",
    readTime: "Code",
  },
  {
    title: "haircut",
    href: "https://github.com/vishnugovind10/haircut",
    type: "Repository",
    domain: "RWA",
    problem: "Quantify liquidity and redemption risk in tokenized real-world-asset pools with dynamic haircuts and NAV VaR.",
    implementation: "High",
    readTime: "Code",
  },
  {
    title: "warrant",
    href: "https://github.com/vishnugovind10/warrant",
    type: "Repository",
    domain: "Compliance",
    problem: "Provide verifiable evidence, not just logs, that an AI agent stayed inside its authorization boundary.",
    implementation: "High",
    readTime: "Code",
  },
  {
    title: "slotscope",
    href: "https://github.com/vishnugovind10/slotscope",
    type: "Repository",
    domain: "Settlement",
    problem: "Profile EVM state contention where parallel execution and compliance registries collide under load.",
    implementation: "High",
    readTime: "Code",
  },
  {
    title: "The Physics of Finality",
    href: "https://medium.com/coinmonks/the-physics-of-finality-how-alpenglow-turns-geography-into-governance-d71405f756c8",
    type: "Research Note",
    domain: "Settlement",
    problem: "Explain how latency, topology, and geography become economic and governance variables.",
    implementation: "Medium",
    readTime: "Essay",
  },
  {
    title: "The Rise of the Agentic Economy",
    href: "https://medium.com/coinmonks/the-rise-of-the-agentic-economy-how-ai-agents-are-rewriting-the-rules-of-money-ee876d376452",
    type: "Research Note",
    domain: "Agentic AI",
    problem: "Explain how autonomous economic actors change how verification, incentives, and trust need to be designed.",
    implementation: "Medium",
    readTime: "Essay",
  },
  {
    title: "institutional-crypto-funding-analyzer",
    href: "https://github.com/vishnugovind10/institutional-crypto-funding-analyzer",
    type: "Repository",
    domain: "Market Design",
    problem: "Analyze funding exposure, stress scenarios, and risk metrics across exchange infrastructure.",
    implementation: "High",
    readTime: "Code",
  },
  {
    title: "coordination-fabric",
    href: "https://github.com/vishnugovind10/coordination-fabric",
    type: "Repository",
    domain: "Settlement",
    problem: "Visualize infrastructure coordination under routing, congestion, and pressure-state changes.",
    implementation: "High",
    readTime: "Code",
  },
];

export type ProblemOutcomeCard = {
  problem: string;
  outcome: string;
  summary: string;
  consequence: string;
  action: string;
  detail: string;
};

export const problemOutcomeCards: ProblemOutcomeCard[] = [
  {
    problem: "Incentive Leakage",
    outcome: "Durable Participation",
    summary: "Prevent rewards from funding behavior the system cannot retain.",
    consequence: "Subsidies become expensive churn when actors farm, hedge, and exit faster than value accrues.",
    action: progressiveDisclosureLabels.traceInteractions,
    detail:
      "The work traces how emissions, staking rewards, delegation, vesting, and user behavior route through the system. The goal is to identify where incentives leak and redesign constraints around behavior that can survive after subsidies change.",
  },
  {
    problem: "Governance Fragility",
    outcome: "Better Coordination",
    summary: "Reduce the decision surface before pressure turns governance into latency.",
    consequence: "Legitimacy weakens when voting power, delegation inertia, and escalation rights cannot respond in time.",
    action: progressiveDisclosureLabels.exploreCoordinationLogic,
    detail:
      "Governance is treated as an operating system: what requires broad legitimacy, what needs delegated authority, what should be pre-constrained, and what attack surfaces emerge when decisions become liquid or time-sensitive.",
  },
  {
    problem: "Liquidity Instability",
    outcome: "Sustainable Growth",
    summary: "Separate productive market depth from rented liquidity.",
    consequence: "Capital becomes extractive when liquidity programs overpay for presence without improving routing or retention.",
    action: progressiveDisclosureLabels.inspectDynamics,
    detail:
      "The analysis separates depth quality, market-maker dependence, routing leakage, emissions pressure, and exit behavior. The design objective is liquidity that supports system control instead of temporarily masking fragility.",
  },
  {
    problem: "Treasury Misalignment",
    outcome: "Economic Resilience",
    summary: "Align reserves, emissions, liquidity, and runway before drawdown creates reflexivity.",
    consequence: "Treasury health deteriorates quickly when confidence, token price, liquidity, and operating capacity move together.",
    action: progressiveDisclosureLabels.viewMechanism,
    detail:
      "Treasury architecture is mapped across reserve policy, budget constraints, emissions, unlocks, liquidity support, and stress scenarios. The output is a clearer operating envelope for how the system funds growth without amplifying market pressure.",
  },
];

export type SystemBreakPattern = {
  title: string;
  summary: string;
  consequence: string;
  action: string;
  detail: string;
};

export const whySystemsBreak: SystemBreakPattern[] = [
  {
    title: "Token systems collapse when incentives reward the wrong behavior.",
    summary: "Measured activity can grow while durable participation weakens.",
    consequence: "Emissions become a cost center instead of a coordination layer.",
    action: progressiveDisclosureLabels.inspectDynamics,
    detail:
      "A token system can look healthy while users, validators, delegates, and capital providers optimize around extraction. The important question is not whether incentives create motion, but whether the motion remains useful when the incentive changes.",
  },
  {
    title: "Governance fails when legitimacy and response speed diverge.",
    summary: "The system can be participatory and still unable to make hard decisions.",
    consequence: "Capture, delay, or ambiguity becomes an operating risk.",
    action: progressiveDisclosureLabels.exploreCoordinationLogic,
    detail:
      "Under stress, governance must route decisions through clear authority, constraints, and escalation paths. Without that structure, token liquidity, delegation inertia, voter apathy, and short-term incentives become part of the attack surface.",
  },
  {
    title: "Liquidity becomes extractive when it is rented without control.",
    summary: "Depth is not the same thing as resilience.",
    consequence: "Markets can appear liquid until incentives fall or volatility arrives.",
    action: progressiveDisclosureLabels.traceInteractions,
    detail:
      "Liquidity programs should be evaluated by routing quality, capital behavior, exit risk, and strategic usefulness. Otherwise, protocols pay for temporary depth while losing control of where value, users, and price discovery move.",
  },
  {
    title: "Coordination weakens when growth fragments the system.",
    summary: "Expansion can add surface area faster than operating capacity.",
    consequence: "Subnets, apps, markets, and contributors optimize locally while the base system loses coherence.",
    action: progressiveDisclosureLabels.viewFailureModes,
    detail:
      "Growth increases the number of actors, incentives, interfaces, and failure paths the system must coordinate. Survivable architecture defines what should remain shared, what can become modular, and where value must route back into the core system.",
  },
];

export type SolutionArea = {
  title: string;
  short: string;
  description: string;
};

export const solutionAreas: SolutionArea[] = [
  {
    title: "Incentive Architecture",
    short: "Shape behavior before pressure arrives.",
    description:
      "Design reward, penalty, delegation, staking, and participation logic around how actors actually optimize.",
  },
  {
    title: "Treasury & Emissions",
    short: "Protect runway, depth, and credibility.",
    description:
      "Connect reserve policy, emissions, liquidity programs, and capital deployment to real drawdown scenarios.",
  },
  {
    title: "Governance Systems",
    short: "Reduce decision surface without losing legitimacy.",
    description:
      "Clarify intervention rights, escalation paths, delegation logic, and response capacity under stress.",
  },
  {
    title: "Mainnet/Subnet Economics",
    short: "Prevent ecosystem growth from cannibalizing itself.",
    description:
      "Map value flow, validator incentives, security costs, routing leakage, and network-level coordination tradeoffs.",
  },
  {
    title: "Liquidity Coordination",
    short: "Separate productive depth from rented liquidity.",
    description:
      "Design liquidity structures around market quality, participant behavior, incentive efficiency, and exit risk.",
  },
  {
    title: "Institutional Infrastructure",
    short: "Make digital economies legible to serious capital.",
    description:
      "Translate protocol economics into controls, obligations, risk surfaces, and usable operating logic.",
  },
];

export const whatWeDo = solutionAreas.map((area) => ({
  title: area.title,
  description: area.description,
}));

export type CoreSystemDomain = SolutionArea & {
  consequence: string;
  action: string;
  detail: string;
};

export const coreSystemDomains: CoreSystemDomain[] = solutionAreas.map((area, index) => {
  const consequences = [
    "Poorly routed incentives can make activity look strong while participation quality decays.",
    "Weak reserve logic turns market stress into operating stress.",
    "Unclear decision rights make urgent coordination expensive.",
    "Expansion can fragment value flow, security budgets, and participant attention.",
    "Rented liquidity can become an exit surface instead of infrastructure.",
    "Institutional adoption slows when risk, control, and obligations remain illegible.",
  ];

  const details = [
    "Stress-test rewards, penalties, staking, vesting, delegation, and user behavior against actors who optimize, hedge, farm, and exit.",
    "Connect runway, emissions, unlocks, liquidity support, and reserve policy into a single operating envelope.",
    "Clarify what governance should decide, what should be constrained in advance, and how the system responds when timing matters.",
    "Map validator incentives, security cost, value routing, subnet growth, and ecosystem leakage before expansion compounds complexity.",
    "Separate useful market depth from capital that only stays while subsidies are high.",
    "Translate digital economy design into controls, risk surfaces, obligations, liquidity assumptions, and operating language.",
  ];

  const actions = [
    progressiveDisclosureLabels.inspectDynamics,
    progressiveDisclosureLabels.viewMechanism,
    progressiveDisclosureLabels.exploreCoordinationLogic,
    progressiveDisclosureLabels.traceInteractions,
    progressiveDisclosureLabels.viewFailureModes,
    progressiveDisclosureLabels.openFramework,
  ];

  return {
    ...area,
    consequence: consequences[index],
    detail: details[index],
    action: actions[index],
  };
});

export type FailureMode = {
  title: string;
  consequence: string;
};

export const failureModes: FailureMode[] = [
  {
    title: "Governance Capture",
    consequence: "Control concentrates faster than legitimacy can respond.",
  },
  {
    title: "Liquidity Extraction",
    consequence: "Depth leaves once incentives stop overpaying for presence.",
  },
  {
    title: "Mercenary Capital",
    consequence: "Participation routes toward subsidy, not system value.",
  },
  {
    title: "Treasury Collapse",
    consequence: "Runway becomes reflexively tied to market confidence.",
  },
  {
    title: "Incentive Instability",
    consequence: "Rewards amplify behavior the system cannot afford.",
  },
  {
    title: "Routing Leakage",
    consequence: "Value escapes the architecture through better external paths.",
  },
  {
    title: "Coordination Fragmentation",
    consequence: "Actors optimize locally while the system loses coherence.",
  },
  {
    title: "Subnet Cannibalization",
    consequence: "Expansion competes with the main network for security and flow.",
  },
  {
    title: "Staking Dilution",
    consequence: "Yield compresses while participation risk compounds.",
  },
];

export const coordinationBreakdowns = [
  "Incentive drift",
  "Liquidity extraction",
  "Governance fragmentation",
  "Treasury reflexivity",
  "Routing leakage",
];

export const economicConsequences = [
  "Liquidity instability",
  "Treasury deterioration",
  "Governance paralysis",
  "Ecosystem fragmentation",
  "User flight",
  "Incentive leakage",
  "Strategic loss of control",
];

export type VisualCaseStudy = {
  title: string;
  breaks: string;
  consequence: string;
  leverage: string;
};

export const visualCaseStudies: VisualCaseStudy[] = [
  {
    title: "Treasury Reflexivity Loop",
    breaks: "Token drawdown reduces treasury capacity, which weakens confidence and accelerates sell pressure.",
    consequence: "Runway, liquidity, and credibility begin moving in the same direction.",
    leverage: "Separate reserves, emissions, and market support into explicit operating constraints.",
  },
  {
    title: "Subnet Cannibalization",
    breaks: "New economic zones compete with the base network for validators, liquidity, attention, and incentives.",
    consequence: "Growth looks expansive while coordination capacity becomes thinner.",
    leverage: "Define value flow, security budgets, and routing logic before expansion compounds leakage.",
  },
  {
    title: "Staking Yield Compression",
    breaks: "More participants chase yield while emissions, liquidity, and token demand fail to scale together.",
    consequence: "Nominal security rises while real incentive quality deteriorates.",
    leverage: "Model yield against dilution, exit liquidity, validator behavior, and long-term participation cost.",
  },
  {
    title: "Governance Capture Risk",
    breaks: "Liquid voting power, delegation inertia, and short-term incentives distort protocol decisions.",
    consequence: "Governance becomes a market structure problem, not a participation problem.",
    leverage: "Reduce attackable surface area and clarify escalation rights before pressure arrives.",
  },
  {
    title: "Liquidity Routing Leakage",
    breaks: "Users and capital route through external venues when the protocol does not own the useful path.",
    consequence: "Activity grows while value capture and system control decline.",
    leverage: "Map the routing incentives and make the economically useful path native to the architecture.",
  },
];

export type Principle = {
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    title: "Complexity compounds coordination risk.",
    description:
      "Every new mechanism adds a dependency, a governance burden, and another path for reflexive behavior.",
  },
  {
    title: "Incentives shape behavior.",
    description:
      "Participants follow the system they are paid to use, not the system the protocol intended to describe.",
  },
  {
    title: "Systems collapse reflexively.",
    description:
      "Liquidity, confidence, governance, and treasury health often move together under stress.",
  },
  {
    title: "Coordination is infrastructure.",
    description:
      "The ability to align actors over time is a core protocol primitive, not a social afterthought.",
  },
  {
    title: "Simplicity scales.",
    description:
      "Clear constraints outperform mechanism sprawl when capital, users, and institutions start optimizing.",
  },
];

export const operatingPrinciples = principles.slice(0, 3);

export const protocolLoop = [
  {
    title: "Incentives",
    description: "Rewards and constraints route participant behavior.",
  },
  {
    title: "Behavior",
    description: "Actors arbitrage, govern, stake, exit, and coordinate.",
  },
  {
    title: "Liquidity",
    description: "Capital quality shapes confidence and execution capacity.",
  },
  {
    title: "Governance",
    description: "Decision latency and control rights determine response.",
  },
  {
    title: "Survivability",
    description: "The system either absorbs pressure or amplifies it.",
  },
];

export const strategicEngagementSteps = [
  {
    title: "Pressure map",
    summary: "Clarify where incentives, liquidity, governance, treasury, and participant behavior already create stress.",
    detail:
      "The starting point is not a generic audit. It is a system map: what actors want, where value routes, which constraints matter, and which feedback loops can become reflexive.",
  },
  {
    title: "Failure model",
    summary: "Identify the few breakdown patterns that would materially change survivability.",
    detail:
      "The work compresses broad complexity into the risks that matter most: leakage, capture, runway pressure, liquidity fragility, governance latency, and coordination fragmentation.",
  },
  {
    title: "Architecture response",
    summary: "Translate analysis into constraints, mechanisms, operating logic, and decision paths.",
    detail:
      "Outputs are designed for execution: clearer incentive structures, treasury envelopes, governance rights, liquidity programs, and coordination rules that teams can actually operate.",
  },
];

export const observatoryZones = [
  {
    title: "Failure dynamics",
    description: "How incentives, liquidity, governance, and treasury systems destabilize under pressure.",
  },
  {
    title: "Market structure",
    description: "How routing, depth quality, emissions, and capital behavior shape protocol control.",
  },
  {
    title: "Coordination architecture",
    description: "How decision rights, constraints, and institutional usability determine survivability.",
  },
];

export const thesisSections = [
  {
    title: "Protocols rarely fail from code.",
    body:
      "They fail when incentive systems, liquidity structures, governance rights, and treasury constraints begin pulling participants in different directions.",
  },
  {
    title: "Complexity is a coordination tax.",
    body:
      "Mechanism sprawl can look sophisticated before launch. Under pressure, it becomes a set of hidden obligations the system has to govern, fund, and explain.",
  },
  {
    title: "Markets are adversarial interfaces.",
    body:
      "Liquidity programs, staking systems, emissions, and governance rights should be designed for actors who borrow, hedge, route around, collude, and leave.",
  },
  {
    title: "Constraints create survivability.",
    body:
      "Durable systems make hard limits legible: runway, depth, validator concentration, governance latency, incentive budget, and institutional operating risk.",
  },
  {
    title: "Coordination is the operating system.",
    body:
      "A protocol economy coordinates capital, execution, risk, legitimacy, and attention. Failure moves through those layers as one system.",
  },
  {
    title: "The work is decision compression.",
    body:
      "The goal is not endless modeling. It is turning ambiguity into tradeoffs, leverage points, operating constraints, and decisions a system can survive.",
  },
];

export type FocusArea = {
  index: string;
  title: string;
  problem: string;
  challenge: string;
  failure: string;
  approach: string;
};

export const focusAreas: FocusArea[] = [
  {
    index: "01",
    title: "Incentive Architecture",
    problem:
      "Protocols often reward the behavior they can measure, not the behavior they need.",
    challenge:
      "Participants can farm, hedge, delegate, exit, or route around incentives faster than governance can react.",
    failure:
      "Static token models underprice strategic behavior and overestimate honest participation.",
    approach:
      "Stress rewards, penalties, staking, vesting, and delegation against adversarial capital and real market exits.",
  },
  {
    index: "02",
    title: "Treasury & Emissions",
    problem:
      "Treasuries are expected to fund growth, defend confidence, support liquidity, and absorb shocks at the same time.",
    challenge:
      "Runway, emissions, unlocks, market depth, and liquidity incentives become reflexive under drawdown.",
    failure:
      "Many programs rent liquidity without measuring whether it becomes structurally useful.",
    approach:
      "Design treasury and emissions policy as one operating system with reserve logic, budget constraints, and stress scenarios.",
  },
  {
    index: "03",
    title: "Governance Systems",
    problem:
      "Governance needs legitimacy and speed, but every decision surface can become an attack surface.",
    challenge:
      "Voting power, delegation, veto rights, token liquidity, and contributor incentives distort response under pressure.",
    failure:
      "Participation optics can hide the fact that the system cannot make hard decisions when timing matters.",
    approach:
      "Reduce routine governance, define escalation paths, and clarify intervention rights before pressure arrives.",
  },
  {
    index: "04",
    title: "Market Structure & Liquidity",
    problem:
      "Token markets turn liquidity, price, narrative, unlocks, and governance into one feedback system.",
    challenge:
      "The token often becomes a funding source, confidence signal, governance asset, and exit venue at once.",
    failure:
      "Protocols treat market structure as external plumbing instead of an internal design constraint.",
    approach:
      "Map depth quality, order flow, incentive efficiency, and reflexive exposure before scaling market programs.",
  },
  {
    index: "05",
    title: "Mainnet / Subnet Economics",
    problem:
      "Network expansion can create new economic zones that compete with the base system for liquidity, security, and attention.",
    challenge:
      "Validators, users, incentives, and application flow may fragment before the network has coherent value routing.",
    failure:
      "Expansion can look like growth while it quietly cannibalizes security budgets and liquidity depth.",
    approach:
      "Define security cost, routing logic, value capture, and incentive boundaries before new zones scale.",
  },
  {
    index: "06",
    title: "Institutional Coordination Infrastructure",
    problem:
      "Institutions evaluate protocols through controls, obligations, liquidity, governance rights, and risk exposure.",
    challenge:
      "Crypto-native systems often communicate through culture while serious capital evaluates through constraints.",
    failure:
      "Strong systems can remain unusable when their risk architecture is not legible.",
    approach:
      "Translate protocol economics into institutional operating language without flattening the system logic.",
  },
];

export const futureEvolution = [
  "Research archives",
  "Systems diagrams",
  "Framework essays",
  "Governance papers",
  "Protocol case studies",
];
