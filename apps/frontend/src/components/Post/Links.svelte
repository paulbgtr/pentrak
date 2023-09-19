<script lang="ts">
  import { book } from "../../store/book";
  import type { Link } from "../../types/Link";

  let linkName: string = "";
  let linkLink: string = "";

  const addLink = () => {
    if (linkName === "" && linkLink === "") return;

    book.update((b) => {
      b.links = [{ name: linkName, link: linkLink }, ...b.links];
      return b;
    });
  };

  const removeLink = (link: Link) => {
    book.update((b) => {
      b.links = b.links.filter((l) => l !== link);
      return b;
    });
  };
</script>

<section>
  <div class="mb-3">
    <h2 class="text-xl font-bold">Links</h2>
    <p>
      Write here links that are related to your book (e.g. links to stores or
      its website).
    </p>
  </div>

  <div class="w-full join">
    <input
      type="text"
      value={linkName}
      on:input={(e) => (linkName = e.target.value)}
      placeholder="Name"
      class="w-1/2 join-item input input-bordered"
    />
    <input
      type="text"
      value={linkLink}
      on:input={(e) => (linkLink = e.target.value)}
      placeholder="Link"
      class="w-full join-item input input-bordered"
    />
    <button on:click={() => addLink()} class="btn btn-neutral join-item"
      >Add</button
    >
  </div>

  <div class="flex flex-col gap-3 mt-5">
    {#each $book.links as link}
      <span class="join">
        <input
          type="text"
          readonly
          value={link.name}
          placeholder="Name"
          class="w-1/2 join-item input input-bordered"
        />
        <input
          type="text"
          readonly
          value={link.link}
          placeholder="Link"
          class="w-full join-item input input-bordered"
        />
        <button
          on:click={() => removeLink(link)}
          class="btn btn-error join-item">Delete</button
        >
      </span>
    {/each}
  </div>
</section>
