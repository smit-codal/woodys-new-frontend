"use client";

import React from "react";
import Link from "next/link";
import logo from "public/images/logos/woody-logo.svg";
import Image from "next/image";
import Button from "./../../components/button/index";
import { useRouter } from "next/navigation";
import SidebarMenu from "../sidebar";

const Header = () => {
  const { push } = useRouter();
  return (
    <header>
      <div className="bg-rose-500 text-white py-3">
        <div className="container">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center gap-4">
              <span
                className="menu-icon"
                onClick={() => document.body.classList.add("menu-collapse")}
              >
                <i className="fa-solid fa-bars"></i>
              </span>
              <Button
                className="btn btn-lg btn-secondary btn-outline btn-take-quiz-header btn-hover-icon-change hidden md:flex "
                icon_suffix="fa-solid fa-fire text-rose-500"
                label="Take the quiz"
              />
            </div>
            <div className="text-center flex items-center justify-center">
              <Link href="#">
                <a className="inline-block align-middle logo">
                  <Image src={logo} alt="woody-logo" />
                </a>
              </Link>
            </div>
            <div className="flex justify-end items-center gap-3">
              <div className="relative">
                <button
                  className="btn btn-md-rounded btn-rose btn-header-user hidden md:block"
                  onClick={() => push("/account")}
                >
                  <span className="btn-icon">
                    <i className="fa-regular fa-user"></i>
                  </span>
                </button>
              </div>
              <div className="relative header-cart">
                <div className="relative">
                  <span className="cart-badge">2</span>
                  <button
                    className="btn btn-md btn-white btn-header-cart"
                    onClick={() => push("/cart")}
                  >
                    <span className="btn-icon">
                      <i className="fa-regular fa-bag-shopping"></i>
                    </span>
                    $0.00
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-rose-700 py-2.5 md:hidden">
        <div className="container">
          <Button
            className="btn btn-lg btn-secondary btn-outline btn-take-quiz-header btn-hover-icon-change w-full"
            icon_suffix="fa-solid fa-fire text-rose-500"
            label="Take the quiz"
          />
        </div>
      </div>
      <SidebarMenu />
    </header>
  );
};

export default Header;
