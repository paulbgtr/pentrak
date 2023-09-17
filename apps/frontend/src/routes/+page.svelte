<script>
  import Card from "../components/Card.svelte";

  const trendingBooks = [
    {
      title: "Dummy Title 1",
      description: "Dummy Description 1",
      link: "/dummy-link-1",
    },
    {
      title: "Dummy Title 2",
      description: "Dummy Description 2",
      link: "/dummy-link-2",
    },
    {
      title: "Dummy Title 3",
      description: "Dummy Description 3",
      link: "/dummy-link-3",
    },
    {
      title: "Dummy Title 4",
      description: "Dummy Description 4",
      link: "/dummy-link-4",
    },
    {
      title: "Dummy Title 5",
      description: "Dummy Description 5",
      link: "/dummy-link-5",
    },
  ];

  const newBooks = [
    {
      title: "Dummy Title 1",
      description: "Dummy Description 1",
      link: "/dummy-link-1",
    },
    {
      title: "Dummy Title 2",
      description: "Dummy Description 2",
      link: "/dummy-link-2",
    },
    {
      title: "Dummy Title 3",
      description: "Dummy Description 3",
      link: "/dummy-link-3",
    },
    {
      title: "Dummy Title 4",
      description: "Dummy Description 4",
      link: "/dummy-link-4",
    },
    {
      title: "Dummy Title 5",
      description: "Dummy Description 5",
      link: "/dummy-link-5",
    },
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="grid lg:grid-cols-4 lg:divide-x">
  <section class="col-span-3">
    <div>
      <h2 class="mb-3 text-2xl font-bold">🔥 Trending</h2>

      <div>
        {#each trendingBooks as book}
          <Card
            title={book.title}
            description={book.description}
            link={book.link}
          />
        {/each}
      </div>
    </div>

    <div class="mt-3">
      <h2 class="mb-3 text-2xl font-bold">🌱 New</h2>

      {#each newBooks as book}
        <Card
          title={book.title}
          description={book.description}
          link={book.link}
        />
      {/each}
    </div>
  </section>
  <section class="px-10">
    <ul class="hidden w-56 lg:menu bg-base-100 rounded-box">
      <h2 class="mb-3 text-xl font-bold">Popular Genres</h2>
      <li><a>Fiction</a></li>
      <li><a>Non-Fiction</a></li>
      <li><a>Science Fiction</a></li>
      <li><a>Fantasy</a></li>
      <li><a>Mystery</a></li>
    </ul>
  </section>
</div>
