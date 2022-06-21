import { Genre, GenreCollection } from "../models/Genre";
import { Movie } from "../models/Movie";

class DBMovies {
  async getMovies(): Promise<Movie[]> {
    //code here
    return [];
  }

  async addGenre(genre: string) {
    //code here
  }

  async getGenres(): Promise<Genre[]> {
    const genres: Genre[] = await GenreCollection.find();
    return genres;
  }
}

export default DBMovies;
