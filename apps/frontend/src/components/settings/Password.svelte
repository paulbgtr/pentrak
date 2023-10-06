<script lang="ts">
  import { supabase } from "../../utils/supabase";

  let newPassword = "";
  let isSuccess = false;
  let isError = false;

  const handleChangePassword = async () => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      isError = true;
      return;
    }

    isSuccess = true;
  };
</script>

<section>
  <h2 class="text-xl font-bold">Password</h2>

  <div class="join">
    <input
      type="password"
      placeholder="Type here"
      value={newPassword}
      on:input={(e) => (newPassword = e.target.value)}
      class="join-item input input-bordered"
    />
    <button
      on:click={() => handleChangePassword()}
      class="w-24 btn btn-primary join-item">Update</button
    >
  </div>
  {#if isSuccess}
    <p class="mt-3 text-success">Password updated successfully!</p>
  {:else if isError}
    <p class="mt-3 text-error">
      New password must be different from the old one.
    </p>
  {/if}
</section>
