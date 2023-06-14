import { useAdd } from "../composables/useAdd";
describe("Testing useadd", () => {
  test("should 1 + 1 = 2", () => {
    expect(useAdd(1, 1)).toBe(2);
  });

  describe("Testing negative case", () => {
    it("shouldn't 1 + 1 = 3", () => {
      expect(useAdd(1, 1)).not.toBe(3);
    });
  });
});
