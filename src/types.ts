import type { User } from "firebase/auth";
export type AuthContextType = {
  user: User | null;
  logOut: () => void;
  isLoading: boolean;
};
