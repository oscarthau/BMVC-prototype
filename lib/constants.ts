export const DEMO_USER_FIRST_NAME = "Oscar";

export const STORAGE_KEYS = {
  onboardingTopics: "bmvc_onboarding_topics_v1",
  feedBias: "bmvc_feed_bias_v1",
  partyFilter: "bmvc_party_filter_v1",
} as const;

export function dicebearAvatar(seed: string) {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}`;
}
