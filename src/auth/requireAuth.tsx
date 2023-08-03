import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import { useAuthHook } from "./hook";
import type { AuthContextType } from "../types";

// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
// The only reason it’s “optional” is because JS doesn’t let us enforce arity of the call.
export const AuthContext = createContext<AuthContextType>({
  user: null,
  logOut: () => {
    throw Error("not initialized");
  },
  isLoading: false,
});

export const RequireAuth = () => {
  const { user, logOut, isLoading } = useAuthHook();
  if (isLoading) {
    return <h1>checking auth ....</h1>;
  }
  if (user) {
    return (
      <AuthContext.Provider value={{ user, logOut, isLoading }}>
        <Outlet />
      </AuthContext.Provider>
    );
  } else {
    return null;
  }
};
