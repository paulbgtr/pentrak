<script>
  import Upvote from "../../../components/Upvote/Upvote.svelte";
  import BookPage from "../../../pageComponents/index/BookPage.svelte";

  export let data;
</script>

<BookPage>
  <div slot="book" class="grid justify-center grid-cols-3 mx-auto">
    <section>
      <img
        class="w-48 mt-3 rounded-xl"
        src="https://marketplace.canva.com/EAFersXpW3g/1/0/1003w/canva-blue-and-white-modern-business-book-cover-cfxNJXYre8I.jpg"
        alt=""
      />

      <div class="flex gap-2 pt-5 pb-5">
        {#each data.bookData.links as link}
          <a href={link.link} class="btn btn-primary">{link.name}</a>
        {/each}
      </div>
    </section>

    <section class="px-10 py-5">
      <header>
        <h1 class="text-2xl font-bold">{data.bookData.title}</h1>
        <h2>{data.bookData.title}</h2>
      </header>

      <Upvote />

      <p class="max-w-xl mt-3">
        {data.bookData.description}
      </p>
    </section>
  </div>

  <div slot="comments">
    <input
      type="text"
      placeholder="Type here"
      class="w-full input input-bordered"
    />
  </div>
</BookPage>
