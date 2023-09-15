<script lang="ts">
  export let title: string;
  export let description: string;
  export let link: string;
</script>

<div class="shadow-xl card bg-base-100">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions">
      <a href={`/books${link}`} class="btn btn-primary">Visit</a>
    </div>
  </div>
</div>
