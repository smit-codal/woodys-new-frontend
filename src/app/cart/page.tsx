"use client";

import React, { useEffect, useState } from "react";
import ShoppingCart from "../components/cart/shopping-cart";
import CartSummary from "../components/cart/summary";
const DeviceWidth = 1023;

const Cart = () => {
  const [containerOffset, setContainerOffset] = useState<number | undefined>(0);
  const [isDesktop, setDesktop] = useState(false);
  useEffect(() => {
    // cart container function
    const cartContainerFun = () => {
      const cartContainer = document.getElementById(
        "cart-container"
      ) as HTMLElement;
      const cartContainerOff = cartContainer?.offsetLeft;
      const cartContainerPadd = parseInt(
        getComputedStyle(cartContainer).paddingLeft.replace("px", "")
      );

      if (window.innerWidth > DeviceWidth) {
        var cartContainerTotal = cartContainerOff + cartContainerPadd - 1;
      } else {
        var cartContainerTotal = 0;
      }
      setContainerOffset(cartContainerTotal);
    };
    // cart container function call on load
    cartContainerFun();

    // cart container function call on resize
    window.addEventListener("resize", () => {
      cartContainerFun();
      if (typeof window !== undefined) {
        window.addEventListener("resize", updateMedia);
        setDesktop(window.innerWidth > DeviceWidth);
      }
      return () => window.removeEventListener("resize", updateMedia);
    });
  }, [isDesktop]);

  const updateMedia = () => {
    setDesktop(window.innerWidth > DeviceWidth);
  };
  return (
    <>
      <section className="cart-section lg:h-full">
        <div className="container lg:h-full" id="cart-container">
          <div className="lg:flex justify-between gap-x-8 lg:h-full">
            <ShoppingCart />
            <CartSummary containerOffset={containerOffset} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
