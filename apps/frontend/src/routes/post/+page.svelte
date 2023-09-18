<script lang="ts">
  import { book } from "../../store/book";
</script>

<section class="grid justify-center mt-10">
  <form>
    <section>
      <div class="mb-3">
        <h2 class="text-xl font-bold">Links</h2>
        <p>
          Write here links that are related to your book (e.g. links to stores
          or its Website).
        </p>
      </div>

      <div class="w-full join">
        <input
          type="text"
          placeholder="Name"
          class="w-1/2 join-item input input-bordered"
        />
        <input
          type="text"
          placeholder="Link"
          class="w-full join-item input input-bordered"
        />
      </div>
    </section>
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
          bind:value={$book.author}
          placeholder="Author"
          class="w-full join-item input input-bordered"
        />
      </div>
    </section>
    <button class="mt-3 btn btn-primary">Submit</button>
  </form>
</section>
