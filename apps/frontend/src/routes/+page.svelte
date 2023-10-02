<script lang="ts">
  import Card from "../pageComponents/index/Card.svelte";
  import { onMount } from "svelte";
  import type { Book } from "../types/Book.ts";

  let newBooks: Book[] = [];

  const fetchBooks = async () => {
    const url = "http://localhost:3000/books";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewBooks = async () => {
    const books = await fetchBooks();
    newBooks = books;
  };

  onMount(() => {
    handleNewBooks();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="mt-3">
  <h2 class="mb-3 text-2xl font-bold">🌱 New</h2>

  {#each newBooks as book}
    <Card title={book.title} description={book.description} id={book._id} />
  {/each}
</div>
