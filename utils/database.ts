import { connect, disconnect } from "mongoose";
import { Genre, GenreCollection } from "../models/Genre";

export const createDB = async () => {
  const genres: Genre[] = [
    { name: "Acción" },
    { name: "Aventura" },
    { name: "Ciencia Ficción" },
  ];
  try {
    const uridb = process.env.URIDB || "mongodb://localhost:27017";
    await connect(uridb);
    await GenreCollection.create(genres);
  } catch {
    console.log("Error al crear los generos");
  }
};

export const destroyDB = async () => {
  try {
    await GenreCollection.deleteMany({});
    await disconnect();
  } catch {
    console.log("Error al eliminar los generos");
  }
};
