import { supabase } from "../../../utils/supabase.js";

export const load = async ({ params }) => {
  const handleUsers = async () => {
    const { data: users, error } = await supabase.from("users").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return users;
  };

  const users = await handleUsers();

  const currentUser = users.find((user) => {
    return user.username === params.slug;
  });

  return {
    slug: params.slug,
    user: currentUser,
  };
};
