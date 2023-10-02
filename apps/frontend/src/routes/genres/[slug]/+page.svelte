<script lang="ts">
  import Card from "../../../pageComponents/index/Card.svelte";

  export let data;
</script>

{#if data.books.length >= 1}
  <h1 class="text-2xl font-bold">{data.slug}</h1>

  <div>
    {#each data.books as book}
      <Card id={book.id} title={book.title} description={book.description} />
    {/each}
  </div>
{:else}
  <p>No books found</p>
{/if}
