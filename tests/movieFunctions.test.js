
import { describe, test, expect } from "vitest";
import { getFavoriteMovies } from "../utils/movieFunctions";

/*
  Kom igång:
  npm install -D vitest

  package.json >
  "scripts": {
    "test": "vitest"
  },

  Starta testerna i terminalen:
  npm run test
*/

describe("getFavoriteMovies", () => {
	const movies = [
		{ id: 1, title: "The Matrix", isFavorite: false },
		{ id: 2, title: "Jurassic Park", isFavorite: false },
		{ id: 3, title: "Pulp Fiction", isFavorite: true }
	];

	test("should return two favorite movies", () => {
		const result = getFavoriteMovies(movies);
		expect(result).toHaveLength(2);
	});

	test("should return The Matrix as the first movie", () => {
		const result = getFavoriteMovies(movies);
		expect(result[0].title).toBe("The Matrix");
	});

	test("should return Pulp Fiction as the second movie", () => {
		const result = getFavoriteMovies(movies);
		expect(result[1].title).toBe("Pulp Fiction");
	});
});