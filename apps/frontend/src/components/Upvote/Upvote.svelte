<script lag="ts">
  import Counter from "./Counter.svelte";

  let count = 0;

  const increment = () => (count += 1);
</script>

<div class="flex gap-2 mt-3">
  <button on:click={increment} class="btn btn-outline btn-success">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="18"
      height="18"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
    <span> | </span>
    <Counter {count} />
  </button>
</div>
