import { writable } from "svelte/store";
import { getUser } from "../utils/getUser";

type Auth = {
  isLogged: boolean;
};

export const auth = writable<Auth>({
  isLogged: (await getUser()) ? true : false,
});
