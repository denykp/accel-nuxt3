import { useFood } from "../composables/useFood";

describe("Testing useFood", () => {
  it("should resolve to lemon", async () => {
    await expect(useFood("lemon")).resolves.toBe("lemon");
  });

  it("should reject to octopus", async () => {
    await expect(useFood("octopus")).rejects.toBe("octopus");
  });

  it("should reject to anything else and return unknown", async () => {
    await expect(useFood("fish")).rejects.toBe("unknown");
  });
});
