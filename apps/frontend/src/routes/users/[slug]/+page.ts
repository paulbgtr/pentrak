import { supabase } from "../../../utils/supabase.js";

export const load = async ({ params }) => {
  const handleUsers = async () => {
    const { data: users, error } = await supabase.from("users").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return users;
  };

  const handleFollowersCount = async () => {
    const currentUser = users.find((user) => {
      return user.username === params.slug;
    });

    const { data: followersCount, error } = await supabase
      .from("follows")
      .select("follower_id")
      .eq("followee_id", currentUser.id);

    if (error) console.error(error);

    return followersCount ? followersCount.length : 0;
  };

  const handleFolloweesCount = async () => {
    const currentUser = users.find((user) => {
      return user.username === params.slug;
    });

    const { data: followeesCount, error } = await supabase
      .from("follows")
      .select("followee_id")
      .eq("follower_id", currentUser.id);

    if (error) console.error(error);

    return followeesCount ? followeesCount.length : 0;
  };

  const users = await handleUsers();
  const followersCount = await handleFollowersCount();
  const followeesCount = await handleFolloweesCount();

  console.log(followersCount);

  const currentUser = users.find((user) => {
    return user.username === params.slug;
  });

  return {
    slug: params.slug,
    user: currentUser,
    followersCount,
    followeesCount,
  };
};
