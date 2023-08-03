import { useState, useEffect } from "react";
import { auth } from "./config";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import type { User } from "firebase/auth";

export const useAuthHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const logOut = () => {
    console.log(`>>>>> signOut`);
    signOut(auth);
  };
  useEffect(() => {
    setIsLoading(true);
    getRedirectResult(auth)
      .then((result) => {
        setIsLoading(false);
        if (result) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const accessToken = credential?.accessToken || "";
          const user = result.user;
          sessionStorage.setItem("token", accessToken);
          sessionStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        } else {
          // not a redirect
          const session_user = sessionStorage.getItem("user");
          if (!session_user) {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);
          } else {
            // todo: populate accessToken and user info from session storage;
            setUser(JSON.parse(session_user));
          }
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(`>>>> sign in error`, err);
      });
  }, []);

  return {
    isLoading,
    user,
    logOut,
  };
};
