import { writable } from "svelte/store";
import type { Link } from "../types/Link";

type Book = {
  links: Link[];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  upvotes: number;
  status: string;
};

export const book = writable<Book>({
  links: [],
  author: "",
  title: "",
  description: "",
  imageUrl: "",
  upvotes: 0,
  status: "Pending",
});
