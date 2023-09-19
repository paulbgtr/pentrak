<script>
  import Upvote from "../../../components/Upvote/Upvote.svelte";
  import BookPage from "../../../pageComponents/index/BookPage.svelte";
</script>

<BookPage>
  <div slot="book" class="grid justify-center grid-cols-2 mx-auto">
    <section>
      <img
        class="w-48 mt-3 rounded-xl"
        src="https://marketplace.canva.com/EAFersXpW3g/1/0/1003w/canva-blue-and-white-modern-business-book-cover-cfxNJXYre8I.jpg"
        alt=""
      />

      <div class="flex gap-2 mt-5">
        <button class="btn btn-primary">Amazon</button>
        <button class="btn btn-primary">Goodreads</button>
      </div>
    </section>

    <section>
      <header>
        <h1 class="text-2xl font-bold">Book</h1>
        <h2>Name Surname</h2>
      </header>

      <Upvote />

      <p class="max-w-xl mt-3">
        This is a dummy book description. It is intended to provide a brief
        overview of the book's content and themes. This description can be
        replaced with actual book details in the future.
      </p>
    </section>
  </div>

  <div slot="comments">
    <section class="mt-5">
      <input
        type="text"
        placeholder="Type here"
        class="w-full input input-bordered"
      />
    </section>
  </div>
</BookPage>
