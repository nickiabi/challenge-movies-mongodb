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
  test("Deberia poder agregarse Star Wars como pelicula", async () => {
    const movie = {
      title: "Star Wars",
      year: 1977,
      genres: ["Accion", "Ciencia Ficcion"],
    };
    await db.addMovie(movie);
    const movies = await db.getMovies();
    const titlesOfMovies = movies.map((movie) => movie.title);
    expect(titlesOfMovies).toContain("Star Wars");
  });

  test("Deberia poder agregarse Titanic como pelicula", async () => {
    const movie = {
      title: "Titanic",
      year: 1997,
      genres: ["Drama", "Romance"],
    };
    await db.addMovie(movie);
    const movies = await db.getMovies();
    const titlesOfMovies = movies.map((movie) => movie.title);
    expect(titlesOfMovies).toContain("Titanic");
  });

  test("Deberia poder agregarse El Padrino como pelicula", async () => {
    const movie = {
      title: "El Padrino",
      year: 1972,
      genres: ["Drama", "Ciencia Ficcion"],
    };
    await db.addMovie(movie);
    const movies = await db.getMovies();
    const titlesOfMovies = movies.map((movie) => movie.title);
    expect(titlesOfMovies).toContain("El Padrino");
  });
});
