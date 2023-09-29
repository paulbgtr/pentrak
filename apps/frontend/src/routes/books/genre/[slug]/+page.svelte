<script lang="ts">
  export let data;
  console.log(data.books.length);
</script>

{#if data.books.length >= 1}
  <h1 class="text-2xl font-bold">{data.slug}</h1>

  <div>
    {#each data.books as book}
      <p>{book.title}</p>
    {/each}
  </div>
{:else}
  <p>No books found</p>
{/if}
