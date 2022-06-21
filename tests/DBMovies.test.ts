import DBMovies from "../src/DBMovies";
import { createDB, destroyDB } from "../utils/database";
import dotenv from "dotenv";
dotenv.config();

const db = new DBMovies();

beforeAll(async () => {
  return createDB();
});

afterAll(async () => {
  return destroyDB();
});

test("Deberian tres generos de peliculas", async () => {
  const genres = await db.getGenres();
  expect(genres).toHaveLength(3);
  expect(genres[0].name).toBe("Acción");
  expect(genres[1].name).toBe("Aventura");
  expect(genres[2].name).toBe("Ciencia Ficción");
});
