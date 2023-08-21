import React, { useEffect } from "react";
import Button from "./../../components/button/index";
import DiscountCode from "../discount-code";

const CartSummary = ({ containerOffset }: any) => {
  useEffect(() => {
    const spaceCalc = () => {
      const checkOutHeight = document
        .getElementById("fix-checkout")
        ?.getBoundingClientRect().height;
      const footerBottomSpace = document.querySelector("footer") as HTMLElement;
      footerBottomSpace.style.paddingBottom = `${checkOutHeight}px`;
    };
    spaceCalc();
    window.addEventListener("resize", spaceCalc);
  }, []);
  return (
    <>
      <div className="md:max-w-[463px] w-full lg:h-full pb-5 lg:pb-0">
        <div
          className="bg-yellow-50 lg:h-full"
          style={{
            marginRight: `-${containerOffset}px`,
            paddingRight: `${containerOffset}px`,
          }}
        >
          <div className="md:py-7 lg:py-15 pt-4 pb-5 px-5 md:px-7">
            <h4 className="text-lg md:text-xl font-semibold md:mb-3 mb-2">
              Summary
            </h4>
            <ul className="summary-list">
              <li>
                <span>Subtotal</span>
                <span>$66.00</span>
              </li>
              <li>
                <span>
                  <span className="block">
                    Discount Code: <span className="font-semibold">SAVE3</span>
                  </span>
                  <span className="underline cursor-pointer inline-block text-sm align-middle hover:text-rose-500 -mt-2">
                    Remove
                  </span>
                </span>
                <span>-$3.00</span>
              </li>
              <li>
                <span>Tax</span>
                <span className="text-xs">calculated at checkout</span>
              </li>
              <li>
                <span>Shipping</span>
                <span className="text-xs">calculated at checkout</span>
              </li>
              <li className="text-lg border-t border-gray-200 pt-2 font-semibold">
                <span className="">Total</span>
                <span>$63.00</span>
              </li>
            </ul>

            <div className="mb-5 hidden md:block md:mt-5">
              <DiscountCode />
            </div>
            <div
              id="fix-checkout"
              className=" fixed md:static left-0 bottom-0 right-0 z-10 bg-yellow-50 md:bg-transparent pb-5 pt-2 px-5 md:p-0 shadow-xl md:shadow-none"
            >
              <ul className="summary-list md:hidden mb-4 inline-block w-full">
                <li className="text-lg font-semibold">
                  <span className="">Total</span>
                  <span>$63.00</span>
                </li>
              </ul>
              <Button
                className="btn btn-lg btn-accent btn-outline w-full"
                label="Checkout Now"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
