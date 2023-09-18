import { writable } from "svelte/store";

export const book = writable({
  links: [],
  author: "",
  title: "",
  description: "",
  imageUrl: "",
});
