export const intersections = [
  "Token systems",
  "Liquidity architecture",
  "Market structure",
  "Governance systems",
  "Treasury coordination",
  "Adaptive economic infrastructure",
];

export const whatWeDo = [
  {
    title: "Economic Systems Architecture",
    description:
      "Translate protocol intent into incentive, liquidity, treasury, and governance structures that remain coherent when participants optimize against them.",
  },
  {
    title: "Liquidity & Treasury Design",
    description:
      "Design reserves, emissions, liquidity programs, and capital deployment logic around runway, drawdown tolerance, depth quality, and long-term solvency.",
  },
  {
    title: "Mechanism & Incentive Engineering",
    description:
      "Model how actors respond when rewards, penalties, vesting, delegation, and market access become economically meaningful.",
  },
  {
    title: "Strategic Deployment & Coordination",
    description:
      "Sequence protocol changes so capital, governance, infrastructure, and market participants can absorb new constraints without destabilizing the system.",
  },
  {
    title: "Governance & Institutional Design",
    description:
      "Reduce unnecessary governance surface area while preserving accountability, institutional readability, and the ability to intervene under pressure.",
  },
];

export const operatingPrinciples = [
  {
    title: "Survivability before growth",
    description:
      "A protocol that scales faster than its coordination capacity is borrowing fragility from the future.",
  },
  {
    title: "Constraints over complexity",
    description:
      "Durability usually comes from fewer, clearer primitives rather than a larger stack of compensating mechanisms.",
  },
  {
    title: "Markets are adversarial interfaces",
    description:
      "Liquidity, governance, and incentives should be designed as systems that rational actors will probe, not politely use.",
  },
];

export const thesisSections = [
  {
    title: "Protocol minimalism",
    body:
      "Minimalism is not aesthetic reduction. It is a way of removing mechanisms that create hidden obligations, governance load, and reflexive failure paths. A protocol economy becomes stronger when participants can understand its constraints and when those constraints are few enough to enforce.",
  },
  {
    title: "Adversarial system design",
    body:
      "Tokenized systems should assume that incentives will be exploited to their limit. The question is not whether actors behave well, but whether the architecture remains coherent when they behave rationally, strategically, and under stress.",
  },
  {
    title: "Constraint-driven architecture",
    body:
      "Durable systems begin with explicit constraints: liquidity depth, treasury runway, governance latency, validator concentration, market access, jurisdictional pressure, and operational cost. Design quality comes from aligning mechanisms with these constraints instead of hiding them.",
  },
  {
    title: "Coordination-first thinking",
    body:
      "A protocol economy coordinates capital, attention, risk, execution, and legitimacy. Markets, governance, liquidity, and incentives cannot be treated as separate modules because pressure moves through them as one system.",
  },
  {
    title: "Survivability over short-term growth",
    body:
      "Growth that depends on subsidies, narrative momentum, or unpriced liquidity often becomes a debt instrument. The healthier objective is structural participation: capital that remains because the system creates utility, not because it overpays for presence.",
  },
  {
    title: "Operational realism",
    body:
      "Economic architecture has to survive infrastructure latency, governance delay, thin liquidity, regulatory ambiguity, treasury limits, and human coordination failure. A system that only works in a clean model has not yet been designed.",
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
    title: "Treasury & Liquidity Systems",
    problem:
      "Protocol treasuries are often asked to fund growth, provide confidence, absorb shocks, and support liquidity at the same time.",
    challenge:
      "Runway, depth, incentives, vesting, and market maker behavior interact under stress.",
    failure:
      "Many programs rent liquidity through emissions without measuring whether the capital becomes structurally useful.",
    approach:
      "Design liquidity and treasury policy as one balance sheet, with explicit reserve logic, incentive efficiency, and drawdown scenarios.",
  },
  {
    index: "02",
    title: "Adaptive Governance",
    problem:
      "Governance must coordinate legitimate change without turning every parameter into an attack surface.",
    challenge:
      "Voting power, delegation, veto rights, latency, and contributor incentives can all distort protocol response.",
    failure:
      "Governance systems often maximize participation optics while ignoring how decisions behave during pressure.",
    approach:
      "Minimize routine governance, clarify intervention rights, and design escalation paths for moments when speed and legitimacy collide.",
  },
  {
    index: "03",
    title: "Market Structure Research",
    problem:
      "Token markets are shaped by order flow, liquidity concentration, vesting, incentives, leverage, and narrative feedback.",
    challenge:
      "The token price often becomes a governance signal, funding source, and legitimacy proxy at once.",
    failure:
      "Protocols treat market structure as an exchange-side issue instead of a design constraint inside the economy.",
    approach:
      "Map the microstructure around supply, demand, liquidity depth, unlocks, and reflexive incentives before designing emissions or value accrual.",
  },
  {
    index: "04",
    title: "Tokenized Infrastructure",
    problem:
      "Infrastructure tokens must connect utility, access, settlement, governance, and capital formation without collapsing into narrative assets.",
    challenge:
      "Technical performance and economic capture often evolve on different timelines.",
    failure:
      "Many infrastructure tokens attach a token to a system without defining what economic work the token must perform.",
    approach:
      "Define the token as a constraint-bearing component of the infrastructure, then test whether it improves coordination under real demand.",
  },
  {
    index: "05",
    title: "Mechanism Design Under Adversarial Conditions",
    problem:
      "Mechanisms that look balanced in normal conditions can fail once actors can borrow, hedge, collude, farm, or route around them.",
    challenge:
      "Attackers exploit timing, subsidies, governance windows, verification gaps, and liquidity thinness.",
    failure:
      "Static incentive models underprice strategic behavior and overestimate honest participation.",
    approach:
      "Stress mechanisms against mercenary capital, governance capture, liquidity exits, and machine-speed coordination.",
  },
  {
    index: "06",
    title: "Institutional Translation for Digital Economies",
    problem:
      "Institutional participants need legibility around risk, obligations, liquidity, controls, and economic purpose.",
    challenge:
      "Crypto-native systems often communicate through culture while institutions evaluate through constraints.",
    failure:
      "Strong protocols can remain inaccessible when their risk architecture is not expressed in institutional language.",
    approach:
      "Translate protocol economics into capital structure, risk controls, treasury policy, governance rights, and operational exposure.",
  },
  {
    index: "07",
    title: "Coordination Infrastructure",
    problem:
      "Autonomous systems, agents, protocols, and markets increasingly coordinate at speeds human governance was not built to absorb.",
    challenge:
      "Latency, reputation, verification cost, and settlement limits become economic primitives.",
    failure:
      "Systems designed for human review can become unstable when machine actors compress discovery, trust, and execution.",
    approach:
      "Design circuit breakers, credibility decay, constraint zones, and settlement logic for environments where coordination happens faster than context.",
  },
];

export const futureEvolution = [
  "Research archives",
  "Systems diagrams",
  "Framework essays",
  "Governance papers",
  "Protocol case studies",
];
