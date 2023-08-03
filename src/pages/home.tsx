import React, { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../auth";

export const HomePage = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <div>
      <Button onClick={logOut}>Log out</Button>
      <div>home page authenticated</div>
    </div>
  );
};
