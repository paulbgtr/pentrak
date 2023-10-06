<script lang="ts">
  import Username from "../../../components/settings/Username.svelte";
  import Email from "../../../components/settings/Email.svelte";
  import Password from "../../../components/settings/Password.svelte";
</script>

<div>
  <h1 class="text-2xl font-bold">Account Settings</h1>

  <div class="grid gap-3 mt-3">
    <Username />
    <Email />
    <Password />
  </div>
</div>
