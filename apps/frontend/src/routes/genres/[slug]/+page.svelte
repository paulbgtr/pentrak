<script lang="ts">
  import Card from "../../../pageComponents/index/Card.svelte";

  export let data;
  console.log(data.books.length);
</script>

{#if data.books.length >= 1}
  <h1 class="text-2xl font-bold">{data.slug}</h1>

  <div>
    {#each data.books as book}
      <Card
        title={book.title}
        description={book.description}
        link={`/books/${book.title}`}
      />
    {/each}
  </div>
{:else}
  <p>No books found</p>
{/if}
