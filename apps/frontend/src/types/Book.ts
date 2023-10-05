import type { Link } from "./Link";
import type { Comment } from "./Comment";

export type Book = {
  id: string;
  links: Link[];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  upvotes: number;
  postedDate: Date;
  genre: string;
  comments: Comment[];
  status: string;
};
