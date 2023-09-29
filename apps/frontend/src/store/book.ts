import { writable } from "svelte/store";
import type { Book } from "../types/Book";

export const book = writable<Book>({
  links: [],
  author: "",
  title: "",
  description: "",
  imageUrl: "",
  upvotes: 0,
  postedDate: new Date(),
  status: "Pending",
});
