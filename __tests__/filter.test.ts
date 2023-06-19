import { getFlyingSuperHeroes } from "../utils/filter";

test("should return super heroes that can fly", () => {
  const flyingSuperHeroes = getFlyingSuperHeroes();

  expect(flyingSuperHeroes).toMatchSnapshot();
});
