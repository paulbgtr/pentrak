<script lang="ts">
  import Upvote from "../../components/Upvote/Upvote.svelte";

  export let id: number;
  export let title: string;
  export let description: string;
</script>

<div class="card bg-base-100">
  <div class="grid grid-cols-2 card-body">
    <a href={`/books/${id}`} class="col-span-1">
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
    </a>
    <span class="col-span-1 justify-self-end">
      <Upvote />
    </span>
  </div>
</div>
