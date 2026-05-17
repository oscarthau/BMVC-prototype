/** Shared domain types for mock layer */

export type SourceType =
  | "speech"
  | "paper"
  | "interview"
  | "vote"
  | "article"
  | "tweet";

export type MockSource = {
  id: string;
  title: string;
  type: SourceType;
  date: string;
  snippet: string;
};

export type Politician = {
  id: string;
  name: string;
  partyId: string;
  role: string;
  constituency: string;
  bio: string;
  avatarSeed: string;
  trainingSourceIds: string[];
  positionSnapshot: {
    climate: number;
    immigration: number;
    eu: number;
    economy: number;
  };
  mostAskedTopics: string[];
};

export type PartyStanceRow = {
  partyId: string;
  stance: string;
  chatPoliticianId: string;
  prefilledQuestion: string;
};

export type NewsEvent = {
  id: string;
  title: string;
  summary: string[];
  updatedAt: string;
  involvedPartyIds: string[];
  partyStances: PartyStanceRow[];
  gradientFrom: string;
  gradientTo: string;
};

export type TopicChip = {
  id: string;
  label: string;
  description: string;
  icon: TopicIconKey;
};

export type TopicIconKey =
  | "leaf"
  | "coins"
  | "heart"
  | "home"
  | "graduation"
  | "globe"
  | "flag"
  | "building"
  | "shield"
  | "percent"
  | "gavel"
  | "scale";

export type AnswerSentence = {
  text: string;
  citeSourceIds?: string[];
};

export type ScriptedExchange = {
  question: string;
  answerSentences: AnswerSentence[];
};

export type ConversationScript = {
  politicianId: string;
  seedExchanges: ScriptedExchange[];
  followUpQuestions: string[];
};
