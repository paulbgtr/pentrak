<script lang="ts">
  export let data;
</script>

{#if !data.user}
  <p>User not found</p>
{:else}
  <section class="flex gap-5">
    <div class="avatar">
      <div
        class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      >
        <img src={data.user.image_url} alt={data.user.username} />
      </div>
    </div>
    <div>
      <h1 class="font-bold">{data.user.username}</h1>
      <h5>{data.user.headline}</h5>
    </div>
  </section>
  <section class="mt-5">
    <h3 class="text-lg font-bold">About</h3>
    <div class="max-w-xl p-3 mt-1 bg-primary rounded-xl">
      <p>{data.user.about}</p>
    </div>
  </section>
{/if}
