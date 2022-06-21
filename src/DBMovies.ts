import { Genre, GenreCollection } from "../models/Genre";

class DBMovies {
  async addGenre(genre: string) {
    //code here
  }

  async getGenres(): Promise<Genre[]> {
    const genres: Genre[] = await GenreCollection.find();
    return genres;
  }
}

export default DBMovies;
