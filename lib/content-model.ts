export const positioning = {
  headline: "Designing Survivable Economic Systems for Web3",
  subheadline:
    "We help protocols and digital economies solve coordination, treasury, incentive, and market-structure problems before they become existential failures.",
  shortDescription:
    "Anticipatory coordination architecture for emerging digital economies.",
  trustStrip: [
    "Protocol Architecture",
    "Treasury Systems",
    "Coordination Design",
    "Incentive Infrastructure",
  ],
};

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
  title: "Design systems that remain functional under real market pressure.",
  summary:
    "Universal Ventures helps protocols, DAOs, digital asset networks, and institutions turn token, treasury, governance, liquidity, and coordination complexity into operating architecture.",
  signals: [
    "Map how participants actually optimize.",
    "Clarify what must hold under volatility.",
    "Convert failure patterns into design constraints.",
  ],
};

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
