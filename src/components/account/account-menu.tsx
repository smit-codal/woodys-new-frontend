import { AccountDataProps } from "@/components/account/types";
import React, { Dispatch, SetStateAction } from "react";

const AccountMenu = ({
  activeMenu,
  setActiveMenu,
  accountData,
}: {
  accountData: AccountDataProps;
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="max-w-[332px]">
      <ul>
        {accountData.map(({ name, icon }, index) => (
          <li key={index} onClick={() => setActiveMenu(name)}>
            <a
              className={`flex items-center justify-between p-5 text-base cursor-pointer ${
                activeMenu === name ? "bg-yellow-50" : ""
              }`}
            >
              <span className="flex items-center">
                <span className="mr-4 w-5 min-w-5">
                  <i className={`fa-regular fa-${icon}`}></i>
                </span>
                {name}
              </span>
              <span className="ml-2 w-5 min-w-5">
                <i className="fa-regular fa-chevron-right"></i>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountMenu;
