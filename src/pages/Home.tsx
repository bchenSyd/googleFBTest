import { useOutletContext } from "react-router-dom";
import { Button } from "antd";
import { AuthContextType } from "../types";

export const HomePage = () => {
  const { logOut } = useOutletContext<AuthContextType>();
  return (
    <div>
      <Button onClick={logOut}>Log out</Button>
      <div>home page authenticated</div>
    </div>
  );
};
