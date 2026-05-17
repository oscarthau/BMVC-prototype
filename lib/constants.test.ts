import { describe, expect, it } from "vitest";

import { dicebearAvatar } from "@/lib/constants";

describe("dicebearAvatar", () => {
  it("returns a DiceBear personas portrait URL with an encoded seed", () => {
    const url = dicebearAvatar("Maja-Holm-S");
    expect(url).toMatch(
      /^https:\/\/api\.dicebear\.com\/7\.x\/personas\/svg\?/,
    );
    expect(url).toContain(encodeURIComponent("Maja-Holm-S"));
  });
});
