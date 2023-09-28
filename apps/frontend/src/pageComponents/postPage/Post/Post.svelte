<script>
  import Links from "./Links.svelte";
  import Info from "./Info.svelte";
  import Image from "./Image.svelte";
  import { book } from "../../../store/book";

  let isSuccess = false;
  let isError = false;

  const handlePost = async () => {
    const url = "http://localhost:3000/books";
    console.log($book);

    try {
      if ($book.title && $book.author && $book.description) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify($book),
        });

        if (response.ok) {
          isSuccess = true;
          return response.json();
        }

        isError = true;
        throw new Error("Error posting book!");
      }

      isError = true;
      throw new Error("Incomplete book data!");
    } catch (error) {
      isError = true;
      console.error(error);
    }
  };
</script>

<section class="grid justify-center mt-10">
  {#if isSuccess}
    <div class="flex-col text-center">
      <h2 class="text-2xl font-bold">Success 🎉</h2>
      <p>
        Thank you for submitting your post! It will be reviewed as soon as
        possible.
      </p>
      <p>
        You can view your post
        <a class="link" href="/">here</a>.
      </p>
    </div>
  {:else}
    <Links />
    <Info />
    <Image />

    <button
      on:click={() => {
        console.log(handlePost());
      }}
      class="mt-3 btn btn-primary">Submit</button
    >
    {#if isError}
      <p class="mt-3 text-center text-error">
        There was an error submitting your post. Please try again.
      </p>
    {/if}
  {/if}
</section>
