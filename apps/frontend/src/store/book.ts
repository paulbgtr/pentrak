import { writable } from "svelte/store";
import type { Book } from "../types/Book";

export const book = writable<Book>({
  _id: 0,
  links: [],
  author: "",
  title: "",
  description: "",
  imageUrl: "",
  upvotes: 0,
  postedDate: new Date(),
  genre: "",
  comments: [],
  status: "Pending",
});
