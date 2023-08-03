import React, { FC } from "react";
import { User } from "firebase/auth";
import { StyledHeader } from "./styles";

export const Header: FC<{
  user?: User;
}> = ({ user }) => {
  return (
    <StyledHeader>
      header {user ? user.displayName : "not logged in"}
    </StyledHeader>
  );
};
