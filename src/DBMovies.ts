import { Genre, GenreCollection } from "../models/Genre";
import { Movie } from "../models/Movie";

class DBMovies {
  async addMovie(movie: Movie) {
    throw new Error("Method not implemented.");
  }
  async getMovies(): Promise<Movie[]> {
    throw new Error("Method not implemented.");
  }

  async addGenre(genre: string) {
    throw new Error("Method not implemented.");
  }

  async getGenres(): Promise<Genre[]> {
    const genres: Genre[] = await GenreCollection.find();
    return genres;
  }
}

export default DBMovies;
