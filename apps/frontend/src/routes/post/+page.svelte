<script lang="ts">
  import Post from "../../pageComponents/postPage/Post/Post.svelte";
  import { onMount } from "svelte";
  import { auth } from "../../store/auth";
  import { get } from "svelte/store";
  import { goto } from "$app/navigation";

  onMount(() => {
    if (!get(auth).isLogged) goto("/signin");
  });
</script>

<Post />
