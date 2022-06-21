import { Genre, GenreCollection } from "../models/Genre";

class DBMovies {
  async getGenres(): Promise<Genre[]> {
    const genres: Genre[] = await GenreCollection.find();
    return genres;
  }
}

export default DBMovies;
