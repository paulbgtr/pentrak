import { supabase } from "../utils/supabase";

export const getUser = async () => {
  const { data } = await supabase.auth.getSession();

  const user = data?.session?.user;

  return user;
};
