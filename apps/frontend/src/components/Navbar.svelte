<script lang="ts">
  let isLogged: boolean;
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
            <li><a>Fiction</a></li>
            <li><a>Non-Fiction</a></li>
            <li><a>Science Fiction</a></li>
            <li><a>Fantasy</a></li>
            <li><a>Mystery</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="/" class="text-xl normal-case btn btn-ghost">
      <span><span class="text-primary">pen</span>trak</span></a
    >
  </div>
  <div class="gap-2 navbar-end">
    {#if isLogged}
      <a class="no-underline link link-primary" href="/post">Post Book</a>
    {:else}
      <a href="/signin" class="btn btn-primary btn-outline">Sign In</a>
      <a href="/signup" class="btn btn-primary">Sign Up</a>
    {/if}
  </div>
</div>
