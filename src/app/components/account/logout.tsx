import { Dispatch, SetStateAction } from "react";
import { AccountMenuOptions } from "./types";

export const Logout = ({
  handleLogout,
  setActiveMenu,
}: {
  handleLogout: Function;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}) => {
  const handleLogoutLogic = () => {
    handleLogout();
    setActiveMenu(AccountMenuOptions.Overview);
  };
  return <>{handleLogoutLogic()}</>;
};
