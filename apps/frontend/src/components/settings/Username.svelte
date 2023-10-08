<script lang="ts">
  import { supabase } from "../../utils/supabase";
  import { getUser } from "../../utils/getUser";

  const handleGetId = async () => {
    const user = await getUser();

    const userId = user?.id;

    return userId ? userId : null;
  };

  let username = "";
  let isError = false;
  let isSuccess = false;

  const handleChangeUsername = async () => {
    const userId = await handleGetId();

    const { error } = await supabase
      .from("users")
      .update({ username })
      .eq("user_id", userId);

    if (error) {
      isError = true;
      return;
    }

    isSuccess = true;
  };
</script>

<section>
  <h2 class="text-xl font-bold">Username</h2>
  <div class="join">
    <input
      type="text"
      value={username}
      on:input={(e) => (username = e.target.value)}
      placeholder="Type here"
      class="w-full max-w-xs join-item input input-bordered"
    />
    <button
      on:click={() => handleChangeUsername()}
      class="w-24 btn btn-primary join-item">Update</button
    >
  </div>
  {#if isSuccess}
    <p class="mt-3 text-success">Username updated successfully!</p>
  {:else if isError}
    <p class="mt-3 text-error">Something went wrong. Please try again.</p>
  {/if}
</section>
