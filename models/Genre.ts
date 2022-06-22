import { Schema, model } from "mongoose";

export type Genre = {
  name: string;
};

export type GenreWithID = Genre & {
  _id: string;
};

export const GenreSchema = new Schema<Genre>({
  name: { type: String, required: true, unique: true },
});

export const GenreCollection = model<Genre>("Genre", GenreSchema);
