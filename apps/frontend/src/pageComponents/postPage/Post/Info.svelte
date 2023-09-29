<script lang="ts">
  import { book } from "../../../store/book";
</script>

<section class="mt-3">
  <div class="mb-3">
    <h2 class="text-xl font-bold">Info</h2>
    <p>Write here information about your book.</p>
  </div>

  <div class="flex flex-col gap-2">
    <input
      type="text"
      bind:value={$book.title}
      placeholder="Title"
      class="w-full join-item input input-bordered"
    />
    <input
      type="text"
      bind:value={$book.description}
      placeholder="Description"
      class="w-full join-item input input-bordered"
    />
    <input
      type="text"
      bind:value={$book.genre}
      placeholder="Genre"
      class="w-full join-item input input-bordered"
    />
    <input
      type="text"
      bind:value={$book.author}
      placeholder="Author"
      class="w-full join-item input input-bordered"
    />
  </div>
</section>
