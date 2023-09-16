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

<section>
  <h2 class="mb-3 text-2xl font-bold">🔥 Trending</h2>

  <div
    class="grid gap-3 gid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    {#each trendingBooks as book}
      <Card
        title={book.title}
        description={book.description}
        link={book.link}
      />
    {/each}
  </div>
</section>

<section class="mt-3">
  <h2 class="mb-3 text-2xl font-bold">🌱 New Books</h2>

  <div
    class="grid gap-3 gid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    {#each newBooks as book}
      <Card
        title={book.title}
        description={book.description}
        link={book.link}
      />
    {/each}
  </div>
</section>
