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
