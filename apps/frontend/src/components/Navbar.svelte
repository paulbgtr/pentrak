<script lang="ts">
  import { auth } from "../store/auth";
  import { supabase } from "../utils/supabase";
  import { goto } from "$app/navigation";
  import { getUser } from "../utils/getUser";
  import { onMount } from "svelte";

  let currentUsername: string;

  const handleSessionUsername = async () => {
    const user = await getUser();

    if (!user) return;

    const userId = user?.id;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error(error);
      return;
    }

    const username = data[0]?.username;
    currentUsername = username;
  };

  onMount(async () => {
    await handleSessionUsername();
  });

  const logout = async () => {
    supabase.auth.signOut();
    auth.set({ isLogged: false });
    goto("/signin");
  };
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <h5 class="font-bold">Popular Genres</h5>
          <ul class="p-2">
            <li><a href="/genres/Fiction">Fiction</a></li>
            <li><a href="/genres/Non-Fiction">Non-Fiction</a></li>
            <li><a href="/genres/Science-Fiction">Science Fiction</a></li>
            <li><a href="/genres/Fantasy">Fantasy</a></li>
            <li><a href="/genres/Mystery">Mystery</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="/" class="text-xl normal-case btn btn-ghost">
      <span><span class="text-primary">pen</span>trak</span></a
    >
  </div>
  <div class="gap-2 navbar-end">
    {#if $auth.isLogged}
      <a class="no-underline link link-primary" href="/post">Post Book</a>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a href={`/users/${currentUsername}`} class="justify-between">
              Profile
            </a>
          </li>
          <li><a href="/my/settings">Settings</a></li>
          <li><button on:click={() => logout()}>Logout</button></li>
        </ul>
      </div>
    {:else}
      <a href="/signin" class="btn btn-primary btn-outline">Sign In</a>
      <a href="/signup" class="btn btn-primary">Sign Up</a>
    {/if}
  </div>
</div>
