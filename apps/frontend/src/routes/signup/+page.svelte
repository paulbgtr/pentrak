<script lang="ts">
  import { supabase } from "../../utils/supabase";
  import { auth } from "../../store/auth";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let isError = false;
  let isSuccess = false;

  onMount(() => {
    if ($auth.isLogged) goto("/");
  });

  const createUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
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
      const user = await createUser(data.email, data.password);

      isSuccess = true;
    } catch (error) {
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
      <h2 class="center card-title">Sign Up</h2>
      <input
        name="username"
        type="text"
        required
        placeholder="Your Username"
        class="w-full max-w-xs input input-bordered"
      />
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
      <button type="submit" class="w-full max-w-xs btn btn-primary"
        >Submit</button
      >
      <p class="mt-3 italic text-gray-500">
        Already have an account? <a class="link" href="/signin">Sign In</a>
      </p>
      <div />
      {#if isError}
        <p>
          <span class="text-center text-red-500"
            >Error: Something unexpected happened while signing up. Please try
            again.</span
          >
        </p>
      {:else if isSuccess}
        <p>
          <span class="text-center text-green-500"
            >Success: You have successfully signed up. Please check your email
            for a confirmation link.</span
          >
        </p>
      {/if}
    </form>
  </div>
</section>
