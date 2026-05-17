import type { MockSource } from "@/lib/types";

export const sources: MockSource[] = [
  {
    id: "src-greenland-speech-mar",
    title: "Speech in Folketinget on the Greenland deal",
    type: "speech",
    date: "2026-03-12",
    snippet:
      "Denmark must anchor Greenland's room to negotiate while keeping Arctic security coordinated with allies.",
  },
  {
    id: "src-defence-vote-l142",
    title: "Vote · L 142 on defence budget framework",
    type: "vote",
    date: "2026-02-28",
    snippet:
      "Recorded division on financing assumptions for lifting defence toward the 3% benchmark.",
  },
  {
    id: "src-healthcare-paper",
    title: "Position paper: Regions to municipalities — primary care transition",
    type: "paper",
    date: "2026-01-18",
    snippet:
      "Outlines safeguards for staffing continuity when acute capacity moves closer to citizens.",
  },
  {
    id: "src-ai-act-interview",
    title: "Interview · DR P1 · EU AI Act implementation",
    type: "interview",
    date: "2025-11-04",
    snippet:
      "Discussed Danish gold-plating risk for SMEs and worker oversight in high-risk systems.",
  },
  {
    id: "src-climate-agri-tax",
    title: "Briefing note: Agricultural CO₂ levy — compensation design",
    type: "paper",
    date: "2026-04-02",
    snippet:
      "Models phased rates, hedgerow incentives, and auction mechanisms for marginal farms.",
  },
  {
    id: "src-nato-arctic",
    title: "Article · Nordic security brief · Arctic presence",
    type: "article",
    date: "2026-02-02",
    snippet:
      "Argues for transparency protocols when third countries propose infrastructure upgrades.",
  },
  {
    id: "src-welfare-tradeoffs",
    title: "Town hall notes · Aarhus · Welfare trade-offs",
    type: "speech",
    date: "2025-12-09",
    snippet:
      "Citizens asked how defence uplift interacts with elder care hours; responses prioritised sequencing.",
  },
  {
    id: "src-party-programme-2030",
    title: "Party programme excerpt · 2030 priorities",
    type: "paper",
    date: "2025-09-30",
    snippet:
      "Commits to predictable climate regulation without abandoning export competitiveness.",
  },
  {
    id: "src-folketing-eu-cohesion",
    title: "Speech · EU cohesion funding and labour mobility",
    type: "speech",
    date: "2026-03-01",
    snippet:
      "Emphasises Danish participation in skills partnerships tied to green industrial sites.",
  },
  {
    id: "src-tweet-digital-rights",
    title: "Thread · Digital consent and platform accountability",
    type: "tweet",
    date: "2026-04-10",
    snippet:
      "Short argument for harmonised age assurance without chilling lawful political speech.",
  },
  {
    id: "src-fisheries-quota",
    title: "Consultation response · North Sea quota transparency",
    type: "paper",
    date: "2026-01-05",
    snippet:
      "Calls for clearer beneficiary registers where quota concentrates among few vessel owners.",
  },
  {
    id: "src-municipal-health",
    title: "Interview · Kommunal sundhed · Coordination risks",
    type: "interview",
    date: "2026-02-20",
    snippet:
      "Mayors discuss ambulance handoffs when regions dissolve; proposes joint governance pilots.",
  },
  {
    id: "src-tax-shift",
    title: "Working paper · Financing defence — tax vs. reprioritisation",
    type: "paper",
    date: "2026-03-25",
    snippet:
      "Compares VAT adjustments with phased wealth-reporting measures for compliance costs.",
  },
  {
    id: "src-crime-prevention",
    title: "Speech · Preventive policing and youth outreach",
    type: "speech",
    date: "2025-10-14",
    snippet:
      "Links neighbourhood staffing to measurable drops in repeat petty offences.",
  },
  {
    id: "src-housing-density",
    title: "Motion · Gentle density near S-trains",
    type: "vote",
    date: "2026-01-30",
    snippet:
      "Vote on piloting streamlined plans when municipalities hit affordability triggers.",
  },
  {
    id: "src-education-voc",
    title: "Paper · Vocational pathways and green skills",
    type: "paper",
    date: "2026-02-11",
    snippet:
      "Proposes employer co-funded certificates tied to retrofit and heat-pump installation.",
  },
  {
    id: "src-greenland-self-rule",
    title: "Briefing · Self-Rule Government dialogues",
    type: "article",
    date: "2026-04-05",
    snippet:
      "Summarises Nuuk priorities on revenue sharing before external investment timelines.",
  },
  {
    id: "src-equality-metrics",
    title: "Interview · Inequality metrics beyond GDP",
    type: "interview",
    date: "2025-12-18",
    snippet:
      "Advocates publishing localized wealth mobility indicators alongside tax reforms.",
  },
  {
    id: "src-defence-industry",
    title: "Speech · Danish defence industry capacity",
    type: "speech",
    date: "2026-03-18",
    snippet:
      "Stresses export controls alignment when accelerating munitions supply chains.",
  },
  {
    id: "src-ai-sandbox",
    title: "Paper · Regulatory sandbox for civic-tech AI",
    type: "paper",
    date: "2026-02-07",
    snippet:
      "Suggests municipality-led pilots with strict logging for transparency to residents.",
  },
];

export function getSourceById(id: string) {
  return sources.find((s) => s.id === id);
}
