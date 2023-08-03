import React from "react";
import { useOutletContext } from "react-router-dom";
import { AuthContextType } from "../types";

export const UserProfile = () => {
  const { user } = useOutletContext<AuthContextType>();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};
