import { describe, expect, it } from "vitest";

import { resolveCitations } from "./resolveCitations";

describe("resolveCitations", () => {
  it("turns inline source markers into sentence citation ids", () => {
    expect(
      resolveCitations(
        "Greenland should lead negotiations. [src-greenland] Defence funding needs receipts. [src-defence] [src-budget]",
      ),
    ).toEqual([
      {
        text: "Greenland should lead negotiations.",
        citeSourceIds: ["src-greenland"],
      },
      {
        text: "Defence funding needs receipts.",
        citeSourceIds: ["src-defence", "src-budget"],
      },
    ]);
  });

  it("keeps uncited sentences as plain answer sentences", () => {
    expect(resolveCitations("I do not have approved material for that yet.")).toEqual([
      {
        text: "I do not have approved material for that yet.",
      },
    ]);
  });
});
