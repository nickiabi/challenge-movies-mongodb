import { Schema, model } from "mongoose";

export type Movie = {
  title: string;
  year: number;
  genres: string[];
};

export type MovieWithId = Movie & {
  _id: string;
};

export const MovieSchema= new Schema<Movie>({
  title: { type: String, required: true, unique: true },
  year: { type: Number, required: true, unique: false },
  genres: { type: [String] , required: true, unique: false },
  
});
export const moviesCollection = model<Movie>("movies", MovieSchema);
