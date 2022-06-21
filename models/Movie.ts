export type Movie = {
  title: string;
  year: number;
  genres: string[];
};

export type MovieWithId = Movie & {
  _id: string;
};
