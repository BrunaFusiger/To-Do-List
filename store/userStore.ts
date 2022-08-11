import { defineStore } from "pinia";
import IUser from "models/User";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    isLoggedIn: false,
    user: null as null | IUser,
  }),
  actions: {
    setIsLoggedIn(isLoggedIn: boolean) {
      this.isLoggedIn = isLoggedIn;
    },
    setUser(user: IUser) {
      this.user = user;
    },
  },
});
