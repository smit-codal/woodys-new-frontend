"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from "public/images/logos/woodys-logo-orange.svg";
import Image from "next/image";
import Button from "./../../components/button/index";
import { useRouter } from "next/navigation";

const SidebarMenu = () => {
  const menuList = [
    {
      title: "Home",
      path: "#",
      children: [],
    },
    {
      title: "What We Treat",
      path: "#",
      children: [
        {
          title: "Erectile Disfunction",
          path: "#",
        },
        {
          title: "Testosterone Replacement",
          path: "#",
        },
        {
          title: "Supplements",
          path: "#",
        },
      ],
    },
    {
      title: "Success Stories",
      path: "#",
      children: [],
    },
    {
      title: "Blog",
      path: "#",
      children: [],
    },
    {
      title: "Support",
      path: "#",
      children: [
        {
          title: "FAQs",
          path: "#",
        },
        {
          title: "Contact",
          path: "#",
        },
        {
          title: "Shipping & Returns",
          path: "#",
        },
      ],
    },
  ];
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>(menuList[0].title);
  const [subMenus, setSubMenus] = useState<{ title: string; path: string }[]>(
    []
  );
  const { push } = useRouter();

  const openSubMenu = (
    menu: string,
    subMenu: { title: string; path: string }[]
  ) => {
    if (subMenu.length === 0) {
      return;
    }
    setShowSubmenu(true);

    //sets selected menu's submenu list
    setSubMenus(subMenu);

    //sets current item from the menu which is active
    setActiveMenu(menu);
  };

  const closeSidebar = () => {
    const sidebarParentDiv = document.querySelector(".sidemenu-outer");
    if (sidebarParentDiv) {
      sidebarParentDiv.addEventListener("click", (event) => {
        // Check if the clicked element or its ancestors have the class "sidemenu-content"
        const clickedElement = event.target as Element;
        if (!clickedElement.closest(".sidemenu-content")) {
          document.body.classList.remove("menu-collapse");
        }
      });
    }
  };

  return (
    <div className="sidemenu-outer" onClick={closeSidebar}>
      <div className="sidemenu-content flex flex-col">
        <div className="p-5 grow">
          <span className="flex justify-end mb-5">
            <span
              className="menu-icon hover:text-rose-500 transition-all"
              onClick={() => document.body.classList.remove("menu-collapse")}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </span>
          <div className="text-center">
            <Link href="#" className="inline-block align-middle logo">

              <Image src={logo} alt="woody-logo-orange" />

            </Link>
            <div
              className={`mt-10 flex menu-block ${
                showSubmenu ? "submenu-open" : ""
              }`}
            >
              <ul className="main-menu level-0">
                {menuList.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className={`${
                        activeMenu === item.title ? "active" : ""
                      }`}
                      onClick={() => openSubMenu(item.title, item.children)}>

                      {item.title}
                      {item.children.length > 0 ? (
                        <span className="w-6 min-w-6 text-lg ml-2.5 text-rose-500">
                          <i className="fa-regular fa-chevron-right"></i>
                        </span>
                      ) : null}

                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="main-menu level-1">
                {subMenus && subMenus.length > 0 && (
                  <>
                    <li>
                      <Link href="#" className="backmenu" onClick={() => setShowSubmenu(false)}>

                        <span className="mr-2.5 w-6 min-w-6 text-lg">
                          <i className="fa-regular fa-chevron-left"></i>
                        </span>
                        {activeMenu}

                      </Link>
                    </li>
                    {subMenus.map((menuItem, index) => (
                      <li key={index}>
                        <Link href={menuItem.path} className="">
                          {menuItem.title}
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-10 bg-zinc-800">
          <div className="max-w-[230px] mx-auto">
            <Button
              className="btn btn-xl btn-dark-rose py-1.5 text-xl w-full font-semibold mb-5"
              icon_prefix="fa-regular fa-user"
              label="Account"
              onClick={() => {
                document.body.classList.remove("menu-collapse");
                push("/account");
              }}
            />
            <Button
              className="btn btn-xl py-1.5 btn-light-yellow text-xl w-full font-semibold btn-hover-icon-change"
              icon_suffix="fa-solid fa-fire text-rose-500"
              label="Take the quiz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
