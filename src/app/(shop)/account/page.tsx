"use client";
import { Addresses } from "@/components/account/addresses";
import AccountMenu from "@/components/account/account-menu";
import Order from "@/components/account/order";
import CreateAccount from "@/components/account/create-account";
import Login from "@/components/account/login";
import OverView from "@/components/account/overview";
import { YourProfile } from "@/components/account/your-profile";
import { useEffect, useState } from "react";
import { Subscriptions } from "@/components/account/subscriptions";
import { Logout } from "@/components/account/logout";
import {
  AccountDataProps,
  AccountMenuOptions,
} from "@/components/account/types";
import { Toast } from "@/components/toast";

const accountData: AccountDataProps = [
  {
    name: AccountMenuOptions.Overview,
    icon: "face-smile",
  },
  {
    name: AccountMenuOptions.Orders,
    icon: "box",
  },
  {
    name: AccountMenuOptions.Subscriptions,
    icon: "calendar",
  },
  {
    name: AccountMenuOptions.YourProfile,
    icon: "circle-user",
  },
  {
    name: AccountMenuOptions.Addresses,
    icon: "home",
  },
  {
    name: AccountMenuOptions.LogOut,
    icon: "arrow-right-to-bracket",
  },
];

const Account = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>(accountData[0].name);
  const [isToastActive, setIsToastActive] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    // when sidebar content changes, scroll the screen to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeMenu]);

  const renderContentSection = () => {
    // find matching content section as per menu selected from sidebar
    const componentMap: {
      [key in AccountMenuOptions]: JSX.Element;
    } = {
      [AccountMenuOptions.Overview]: <OverView setActiveMenu={setActiveMenu} />,
      [AccountMenuOptions.Orders]: <Order />,
      [AccountMenuOptions.Subscriptions]: <Subscriptions />,
      [AccountMenuOptions.YourProfile]: <YourProfile />,
      [AccountMenuOptions.Addresses]: <Addresses />,
      [AccountMenuOptions.LogOut]: (
        <Logout handleLogout={handleLogout} setActiveMenu={setActiveMenu} />
      ),
    };

    return componentMap[activeMenu as AccountMenuOptions];
  };

  const renderContentSectionItem = renderContentSection();

  const animateToast = () => {
    if (!isToastActive) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsToastActive(true);
      setTimeout(() => {
        setIsToastActive(false);
      }, 3000);
    }
  };
  // console.log("istoast active: ", isToastActive);
  return (
    <>
      <div className="pt-15 pb-20 container relative">
        <h1 className="font-semibold text-3xl mb-7" onClick={animateToast}>
          {isAuthenticated ? "Hello, John Smith" : "Log in to your account"}
        </h1>
        <div className="md:flex xl:gap-17 lg:gap-12 md:gap-8">
          <div className="md:min-w-[395px]">
            {isAuthenticated ? (
              <AccountMenu
                accountData={accountData}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            ) : (
              <Login handleLogin={handleLogin} />
            )}
          </div>
          <div className="w-full md:max-w-[796px]">
            {isAuthenticated ? (
              <div className="toast-parent">
                <Toast
                  message="Your password has been changed successfully."
                  type="success"
                  className={`toast-animation ${
                    isToastActive ? "animate" : ""
                  }`}
                />
                {renderContentSectionItem}
              </div>
            ) : (
              <CreateAccount />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
