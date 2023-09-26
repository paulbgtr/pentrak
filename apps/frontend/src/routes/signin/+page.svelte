<script lang="ts">
  import { supabase } from "../../utils/supabase";
  import { onMount } from "svelte";
  import { auth } from "../../store/auth";
  import { goto } from "$app/navigation";

  let isError = false;
  let isSuccess = false;

  $: {
    if (isSuccess) {
      window.location.href = "/";
    }
  }

  onMount(() => {
    if ($auth.isLogged) goto("/");
  });

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  };

  const onSubmit = async (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement);

    const data: any = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    try {
      const user = await signIn(data.email, data.password);

      isSuccess = true;
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        isError = true;
      }, 5000);
    }
  };
</script>

<section class="py-32">
  <div class="card bg-base-100">
    <form
      on:submit|preventDefault={onSubmit}
      class="items-center text-center card-body"
    >
      <h2 class="center card-title">Sign In</h2>
      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        class="w-full max-w-xs input input-bordered"
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Your Password"
        class="w-full max-w-xs input input-bordered"
      />
      <button class="w-full max-w-xs btn btn-primary">Submit</button>
      <p class="mt-3 italic text-gray-500">
        Don't have an account? <a class="link" href="/signup">Sign Up</a>
      </p>
      <div />
      <p>
        {#if isError}
          <span class="text-center text-red-500"
            >Error: Entered credentials are incorrect. Please try again.</span
          >
        {/if}
      </p>
    </form>
  </div>
</section>
