export const load = async ({ params }) => {
  const handleSlug = async () => {
    const url = `http://localhost:3000/books/${params.slug}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const bookData = await handleSlug();

  return {
    slug: params.slug,
    bookData,
  };
};
