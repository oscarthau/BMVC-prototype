import type { NewsEvent } from "@/lib/types";

export const newsEvents: NewsEvent[] = [
  {
    id: "news-greenland-deal",
    title: "The Greenland deal — what should Denmark do now?",
    summary: [
      "External attention on Greenland has sharpened debates inside the Kingdom about who speaks for Nuuk in security conversations and how openly Copenhagen coordinates with allies.",
      "Parties disagree on how fast to expand Arctic posture, how much room the Self-Rule Government should have with Washington, and what transparency citizens should expect.",
      "The Folketing is weighing timelines that balance deterrence with Greenlandic revenue priorities—without pre-empting talks meant for elected leaders in Nuuk.",
    ],
    updatedAt: "2026-05-14T09:12:00.000Z",
    involvedPartyIds: [
      "socialdemokratiet",
      "venstre",
      "sf",
      "konservative",
      "enhedslisten",
      "liberal-alliance",
      "danmarksdemokraterne",
    ],
    gradientFrom: "#1e3a5f",
    gradientTo: "#6b8cae",
    partyStances: [
      {
        partyId: "socialdemokratiet",
        stance:
          "Prioritise Greenlandic agency first: Danish security support should amplify—not substitute—Nuuk's negotiating room.",
        chatPoliticianId: "pol-maja-holm",
        prefilledQuestion:
          "What's your stance on the Greenland deal and how Copenhagen backs Nuuk?",
      },
      {
        partyId: "venstre",
        stance:
          "Modernise Arctic capabilities quickly, but pair upgrades with predictable frameworks that export-oriented firms can plan around.",
        chatPoliticianId: "pol-anders-bech-lund",
        prefilledQuestion:
          "What's your stance on the Greenland deal and allied coordination?",
      },
      {
        partyId: "sf",
        stance:
          "Reject narratives that treat Greenland as a transaction; climate justice and consent frameworks belong at the centre.",
        chatPoliticianId: "pol-sofia-vestergaard",
        prefilledQuestion:
          "How should Denmark respond on Greenland without sidelining climate justice?",
      },
      {
        partyId: "konservative",
        stance:
          "Strengthen deterrence credibility while drawing bright lines on sovereignty—Greenland's constitutional status is non-negotiable symbolism.",
        chatPoliticianId: "pol-mikkel-krarup-olesen",
        prefilledQuestion:
          "What's your stance on the Greenland deal from a rule-of-law perspective?",
      },
      {
        partyId: "enhedslisten",
        stance:
          "Challenge militarised rhetoric that crowds out schools and housing; Denmark should fund diplomacy before flashy Arctic posture.",
        chatPoliticianId: "pol-liv-sonderby",
        prefilledQuestion:
          "What's your stance on the Greenland deal versus welfare trade-offs?",
      },
      {
        partyId: "liberal-alliance",
        stance:
          "Welcome investment interest only through transparent procurement—markets help when rules are obvious beforehand.",
        chatPoliticianId: "pol-frederik-tang",
        prefilledQuestion:
          "How should Greenland-related investments stay transparent for taxpayers?",
      },
      {
        partyId: "danmarksdemokraterne",
        stance:
          "Coastal communities want honesty about who profits from rushed offshore narratives—beneficiary clarity matters as much as flags.",
        chatPoliticianId: "pol-signe-krogh",
        prefilledQuestion:
          "What's your stance on Greenland's offshore interests and coastal Denmark?",
      },
    ],
  },
  {
    id: "news-defence-3pct",
    title: "Lifting defence spending to 3% of GDP",
    summary: [
      "Denmark's pledge trajectory toward higher defence outlays is forcing uncomfortable conversations about whether debt, welfare trims, or selective taxes should carry the bill.",
      "Industry voices want procurement certainty; unions worry about crowding out municipal wages; economists argue sequencing matters as much as headline percentages.",
      "Negotiators are searching for a parliamentary envelope that preserves NATO credibility without pretending hospitals and classrooms won't feel pressure.",
    ],
    updatedAt: "2026-05-14T08:44:00.000Z",
    involvedPartyIds: [
      "socialdemokratiet",
      "venstre",
      "sf",
      "konservative",
      "enhedslisten",
      "liberal-alliance",
      "moderaterne",
    ],
    gradientFrom: "#3d4f5c",
    gradientTo: "#9aa7b0",
    partyStances: [
      {
        partyId: "socialdemokratiet",
        stance:
          "Phase increases alongside documented efficiency gains in procurement—citizens deserve visible trade-offs, not magical accounting.",
        chatPoliticianId: "pol-maja-holm",
        prefilledQuestion: "How will you fund the defence pledge without breaking welfare?",
      },
      {
        partyId: "venstre",
        stance:
          "Start with administrative slack and delayed low-priority projects before opening broad tax conversations employers can't model.",
        chatPoliticianId: "pol-anders-bech-lund",
        prefilledQuestion: "How will you fund the defence pledge responsibly?",
      },
      {
        partyId: "sf",
        stance:
          "Wealth-backed contributions and corporate windfall scrutiny belong on the table before nurses absorb hidden cuts.",
        chatPoliticianId: "pol-sofia-vestergaard",
        prefilledQuestion: "How will you fund the defence pledge fairly?",
      },
      {
        partyId: "konservative",
        stance:
          "Treat the uplift as a decade-long envelope with bond financing only where interest paths remain disciplined.",
        chatPoliticianId: "pol-mikkel-krarup-olesen",
        prefilledQuestion: "How will you fund the defence pledge over ten years?",
      },
      {
        partyId: "enhedslisten",
        stance:
          "Reject stealth austerity: publish school-hour impacts beside every procurement headline.",
        chatPoliticianId: "pol-liv-sonderby",
        prefilledQuestion:
          "How will you fund the defence pledge without stealth austerity?",
      },
      {
        partyId: "liberal-alliance",
        stance:
          "Prefer procurement contestability and personnel reforms before VAT shocks that punish founders.",
        chatPoliticianId: "pol-frederik-tang",
        prefilledQuestion:
          "How will you fund the defence pledge without hurting startups?",
      },
      {
        partyId: "moderaterne",
        stance:
          "Broker blended financing—green-transition synergies can piggyback certain dual-use infrastructure if contracts are clean.",
        chatPoliticianId: "pol-karoline-merrild",
        prefilledQuestion:
          "How will you fund the defence pledge with blended financing?",
      },
    ],
  },
  {
    id: "news-healthcare-2026",
    title:
      "Healthcare reform 2026 — moving funds from regions to municipalities",
    summary: [
      "Abolishing regional councils could bring acute care planning closer to citizens—or strand ambulance logistics mid-transition depending on whom you ask.",
      "Mayors fear unfunded mandates; clinicians fear fragmentation; ministers promise transitional staffing pools—but timelines remain contentious.",
      "Young voters especially notice GP access: reform backers emphasise prevention budgets; critics warn patchwork postcodes.",
    ],
    updatedAt: "2026-05-13T15:30:00.000Z",
    involvedPartyIds: [
      "socialdemokratiet",
      "venstre",
      "sf",
      "konservative",
      "radikale",
      "alternativet",
      "moderaterne",
    ],
    gradientFrom: "#2f4f4f",
    gradientTo: "#87a96b",
    partyStances: [
      {
        partyId: "socialdemokratiet",
        stance:
          "Support consolidation only where transitional staffing pools are legally binding—not optimistic annex pages.",
        chatPoliticianId: "pol-linea-falk",
        prefilledQuestion:
          "What happens to my region if the healthcare reform passes?",
      },
      {
        partyId: "venstre",
        stance:
          "Municipal agility beats distant bureaucracy: streamline planning rules before shifting euros.",
        chatPoliticianId: "pol-gustav-elm",
        prefilledQuestion:
          "What happens to my region if the healthcare reform passes?",
      },
      {
        partyId: "sf",
        stance:
          "Prevent privatisation by stealth—equal waiting-list ceilings must survive the organisational chart redraw.",
        chatPoliticianId: "pol-helena-mouritsen",
        prefilledQuestion:
          "What happens to my region if the healthcare reform passes?",
      },
      {
        partyId: "konservative",
        stance:
          "Demand audited budgets per municipality before dissolving regional balance sheets.",
        chatPoliticianId: "pol-torben-skriver",
        prefilledQuestion:
          "What happens to my region if the healthcare reform passes?",
      },
      {
        partyId: "radikale",
        stance:
          "Ringfence GP training grants—reform fails if prevention rhetoric ignores workforce maths.",
        chatPoliticianId: "pol-alma-riise",
        prefilledQuestion:
          "What happens to my region if the healthcare reform passes?",
      },
      {
        partyId: "alternativet",
        stance:
          "Pilot participatory clinics where citizens co-design evening openings before national rollout.",
        chatPoliticianId: "pol-elias-bryggers",
        prefilledQuestion:
          "What happens to my region if the healthcare reform passes?",
      },
      {
        partyId: "moderaterne",
        stance:
          "Finance joint governance experiments—handoffs fail without shared dashboards.",
        chatPoliticianId: "pol-karoline-merrild",
        prefilledQuestion:
          "What happens to my region if the healthcare reform passes?",
      },
    ],
  },
  {
    id: "news-eu-ai-act",
    title: "The EU AI Act and Denmark's implementation",
    summary: [
      "Brussels sets guardrails; Copenhagen decides how aggressively to gold-plate obligations touching SMEs, municipalities, and schools.",
      "Business groups warn about founder friction; unions want worker seats on risk committees; consumer advocates eye dark-pattern bans.",
      "Denmark's debate hinges on sandboxes, transparency logs for civic bots, and whether national layers exceed EU text proportionately.",
    ],
    updatedAt: "2026-05-12T11:05:00.000Z",
    involvedPartyIds: [
      "venstre",
      "sf",
      "liberal-alliance",
      "radikale",
      "moderaterne",
      "alternativet",
    ],
    gradientFrom: "#4a3f55",
    gradientTo: "#8fa8c4",
    partyStances: [
      {
        partyId: "venstre",
        stance:
          "Mirror EU timelines closely—Danish extras should be narrowly justified with compliance calculators.",
        chatPoliticianId: "pol-anders-bech-lund",
        prefilledQuestion:
          "How far beyond the EU AI Act minimum should Denmark go?",
      },
      {
        partyId: "sf",
        stance:
          "Layer union oversight where workplace algorithms score shifts—minimum text isn't enough for warehouse realities.",
        chatPoliticianId: "pol-sofia-vestergaard",
        prefilledQuestion:
          "How far beyond the EU AI Act minimum should Denmark go?",
      },
      {
        partyId: "liberal-alliance",
        stance:
          "Prioritise proportionality tests so Copenhagen doesn't export paperwork nightmares.",
        chatPoliticianId: "pol-frederik-tang",
        prefilledQuestion:
          "How far beyond the EU AI Act minimum should Denmark go?",
      },
      {
        partyId: "radikale",
        stance:
          "Invest in classroom explainers and democratic audits—not only enterprise fines.",
        chatPoliticianId: "pol-nora-illum",
        prefilledQuestion:
          "How far beyond the EU AI Act minimum should Denmark go?",
      },
      {
        partyId: "moderaterne",
        stance:
          "Fund municipal sandboxes with logging templates smaller towns can reuse.",
        chatPoliticianId: "pol-karoline-merrild",
        prefilledQuestion:
          "How far beyond the EU AI Act minimum should Denmark go?",
      },
      {
        partyId: "alternativet",
        stance:
          "Treat civic transparency as climate-adjacent infrastructure—open models deserve procurement preference.",
        chatPoliticianId: "pol-elias-bryggers",
        prefilledQuestion:
          "How far beyond the EU AI Act minimum should Denmark go?",
      },
    ],
  },
  {
    id: "news-climate-agri-tax",
    title: "Climate plan 2030 — the agricultural CO₂ tax",
    summary: [
      "Farmers hear fairness questions loudly: levy design, compensation ladders, and grandfathered exemptions could reshape landscape biodiversity incentives.",
      "Food exporters fear competitiveness cliffs; environmentalists demand predictable methane pathways; ministries whisper about hedgerow bonuses.",
      "Parliament is circling phased rates with measurable soil-carbon pilots rather than one blunt headline.",
    ],
    updatedAt: "2026-05-11T07:50:00.000Z",
    involvedPartyIds: [
      "socialdemokratiet",
      "venstre",
      "sf",
      "enhedslisten",
      "alternativet",
      "danmarksdemokraterne",
    ],
    gradientFrom: "#355e3b",
    gradientTo: "#b8c9a3",
    partyStances: [
      {
        partyId: "socialdemokratiet",
        stance:
          "Pair phased levies with transitional grants tied to measurable emission curves—not sticker shock headlines.",
        chatPoliticianId: "pol-maja-holm",
        prefilledQuestion: "Is a CO₂ tax on agriculture fair?",
      },
      {
        partyId: "venstre",
        stance:
          "Compensation must travel with export competitiveness benchmarks so rural jobs don't hollow out.",
        chatPoliticianId: "pol-gustav-elm",
        prefilledQuestion: "Is a CO₂ tax on agriculture fair?",
      },
      {
        partyId: "sf",
        stance:
          "Wealthy landowners shouldn't crowd out smaller farms from hedge carbon auctions.",
        chatPoliticianId: "pol-sofia-vestergaard",
        prefilledQuestion: "Is a CO₂ tax on agriculture fair?",
      },
      {
        partyId: "enhedslisten",
        stance:
          "Reject indefinite loopholes—tie every krone of relief to transparent ecological outcomes.",
        chatPoliticianId: "pol-liv-sonderby",
        prefilledQuestion: "Is a CO₂ tax on agriculture fair?",
      },
      {
        partyId: "alternativet",
        stance:
          "Blend biodiversity premiums so permaculture experiments aren't punished by narrow methane accounting.",
        chatPoliticianId: "pol-elias-bryggers",
        prefilledQuestion: "Is a CO₂ tax on agriculture fair?",
      },
      {
        partyId: "danmarksdemokraterne",
        stance:
          "Protect paycheck towns first—energy bills already squeeze households adjacent to farming belts.",
        chatPoliticianId: "pol-signe-krogh",
        prefilledQuestion: "Is a CO₂ tax on agriculture fair?",
      },
    ],
  },
];

export function getNewsEventById(id: string) {
  return newsEvents.find((n) => n.id === id);
}
