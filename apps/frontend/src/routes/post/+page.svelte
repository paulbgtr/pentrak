<script lang="ts">
  import Links from "../../components/Post/Links.svelte";
  import Info from "../../components/Post/Info.svelte";

  import { book } from "../../store/book";

  const handlePost = async () => {
    // todo
  };
</script>

<section class="grid justify-center mt-10">
  <Links />
  <Info />

  <button class="mt-3 btn btn-primary">Submit</button>
</section>
