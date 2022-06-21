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

describe("Test Genres Collection", () => {
  test("Deberian existir tres generos de peliculas", async () => {
    const genres = await db.getGenres();
    expect(genres.length).toBeGreaterThanOrEqual(3);
  });

  test("Despues de agregar el genero de terror, este debe existir en la base de datos ", async () => {
    await db.addGenre("Terror");
    const genres = await db.getGenres();
    const namesOfGenres = genres.map((genre) => genre.name);
    expect(namesOfGenres).toContain("Terror");
  });
});

describe("Test Movies Collection", () => {
  test("Deberian existir tres peliculas", async () => {
    const movies = await db.getMovies();
    expect(movies.length).toBeGreaterThanOrEqual(3);
  });

  test("Una pelicula deberia llamarse Titanic", async () => {
    const movies = await db.getMovies();
    const titles = movies.map((movie) => movie.title);
    expect(titles).toContain("Titanic");
  });

  test("Una pelicula deberia llamarse Avatar", async () => {
    const movies = await db.getMovies();
    const titles = movies.map((movie) => movie.title);
    expect(titles).toContain("Titanic");
  });

  test("Una pelicula deberia llamarse Star Wars", async () => {
    const movies = await db.getMovies();
    const titles = movies.map((movie) => movie.title);
    expect(titles).toContain("Star Wars");
  });
});
