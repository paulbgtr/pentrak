<script lang="ts">
  export let data;
  import { getUser } from "../../../utils/getUser.js";
  import { supabase } from "../../../utils/supabase.js";
  import { onMount } from "svelte";

  let isCurrentUser: boolean;
  let isFollowing: boolean;

  const getCurrentUserId = async () => {
    const user = await getUser();

    if (!user) return;

    const userId = user?.id;

    const { data, error } = await supabase
      .from("users")
      .select("id")
      .eq("user_id", userId);

    if (error) console.error(error);

    const currentUserId = data && data[0].id;

    return currentUserId;
  };

  const isFollowed = async (followeeId: string, followerId: string) => {
    const { data, error } = await supabase
      .from("follows")
      .select("*")
      .eq("followee_id", followeeId)
      .eq("follower_id", followerId);

    if (error) console.error(error);

    return data?.length === 0 ? false : true;
  };

  onMount(async () => {
    const currentUserId = await getCurrentUserId();

    isCurrentUser = data.user.id === currentUserId;

    if (await isFollowed(data.user.id, currentUserId)) {
      isFollowing = true;
    } else {
      isFollowing = false;
    }
  });

  const handleFollow = async () => {
    const currentUserId = await getCurrentUserId();

    const { error } = await supabase.from("follows").insert({
      follower_id: currentUserId,
      followee_id: data.user.id,
    });

    if (error) console.error(error);

    isFollowing = true;
  };

  const handleUnfollow = async () => {
    const currentUser = await getCurrentUserId();

    const { error } = await supabase
      .from("follows")
      .delete()
      .eq("follower_id", currentUser)
      .eq("followee_id", data.user.id);

    if (error) console.error(error);

    isFollowing = false;
  };
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
      <div class="flex gap-3">
        <p>
          <span class="font-bold">
            {data.followeesCount}
          </span>
          following
        </p>
        <p>
          <span class="font-bold">
            {data.followersCount}
          </span>
          followers
        </p>
      </div>
    </div>
    {#if !isCurrentUser}
      {#if isFollowing}
        <button on:click={() => handleUnfollow()} class="btn btn-primary">
          Unfollow
        </button>
      {:else}
        <button on:click={() => handleFollow()} class="btn btn-primary">
          Follow
        </button>
      {/if}
    {/if}
  </section>
  {#if data.user.about}
    <section class="mt-5">
      <h3 class="text-lg font-bold">About</h3>
      <div class="max-w-xl p-3 mt-1 bg-primary rounded-xl">
        <p>{data.user.about}</p>
      </div>
    </section>
  {/if}
{/if}
