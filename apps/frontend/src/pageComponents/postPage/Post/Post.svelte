<script>
  import Links from "./Links.svelte";
  import Info from "./Info.svelte";
  import Image from "./Image.svelte";

  let isSuccess = false;

  const handlePost = async () => {
    // todo
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

    <button class="mt-3 btn btn-primary">Submit</button>
  {/if}
</section>
