import type { Link } from "./Link";

export type Book = {
  _id: number;
  links: Link[];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  upvotes: number;
  postedDate: Date;
  genre: string;
  status: string;
};
