import { Genre, GenreCollection } from "../models/Genre";
import { Movie, moviesCollection } from "../models/Movie";

class DBMovies {
  async addMovie(movie: Movie) {
    await moviesCollection.create(movie)
  }
  async getMovies(): Promise<Movie[]> {
   const movies:  Movie[] =  await moviesCollection.find()
   return movies;
  }

  async addGenre(genre: string) {
    await GenreCollection.create({name : genre })
  }

  async getGenres(): Promise<Genre[]> {
    const genres: Genre[] = await GenreCollection.find();
    return genres;
  }
}

export default DBMovies;
