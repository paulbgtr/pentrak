export const load = async ({ params }) => {
  const handleSlug = async () => {
    const url = "http://localhost:3000/books";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      const filteredGenre = data.filter((book: any) => {
        return book.genre === params.slug;
      });
      return filteredGenre;
    } catch (error) {
      console.log(error);
    }
  };

  const books = await handleSlug();

  return {
    slug: params.slug,
    books,
  };
};
