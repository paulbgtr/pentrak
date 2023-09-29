import type { Link } from "./Link";

export type Book = {
  links: Link[];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  upvotes: number;
  postedDate: Date;
  status: string;
};
