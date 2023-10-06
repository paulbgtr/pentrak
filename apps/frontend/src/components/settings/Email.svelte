<script lang="ts">
  import { supabase } from "../../utils/supabase";

  let newEmail = "";
  let isSuccess = false;
  let isError = false;

  const handleChangeEmail = async () => {
    const { error } = await supabase.auth.updateUser({
      email: newEmail,
    });

    if (error) {
      isError = true;
      return;
    }

    isSuccess = true;
  };
</script>

<section>
  <h2 class="text-xl font-bold">Email</h2>

  <div class="join">
    <input
      type="email"
      placeholder="Type here"
      value={newEmail}
      on:input={(e) => (newEmail = e.target.value)}
      class="join-item input input-bordered"
    />
    <button
      on:click={() => handleChangeEmail()}
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
