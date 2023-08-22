import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import cartProdImage from "public/images/GettyImages-1281155872.jpg";
import ProductCard from "@/components/promoted-product/product-card";
import DiscountCode from "@/components/discount-code";

type CartItem = {
  image: string | StaticImageData;
  prodName: string;
  detail: string;
  subscribe: string;
  subtotal: string | number;
  oldsubtotal: string | number;
  quantity: number;
}[];

const CheckoutSummary = ({ containerOffset }: any) => {
  const cartList: CartItem = [
    {
      image: cartProdImage,
      prodName: "Generic Cialis",
      detail: "8 x 100mg Tablets",
      subscribe: "Monthly",
      subtotal: "$33.00",
      oldsubtotal: "$36.00",
      quantity: 1,
    },
    {
      image: cartProdImage,
      prodName: "Viagra",
      detail: "8 x 100mg Tablets",
      subscribe: "Monthly",
      subtotal: "$66.00",
      oldsubtotal: "",
      quantity: 1,
    },
  ];

  return (
    <>
      <div className="md:max-w-[463px] w-full lg:h-full pb-10 lg:pb-0">
        <div
          className="bg-yellow-50 lg:h-full"
          style={{
            marginRight: `-${containerOffset}px`,
            paddingRight: `${containerOffset}px`,
          }}
        >
          <div className="md:py-7 lg:py-15 p-4 md:px-7">
            <div>
              <h4 className="text-xl font-semibold mb-3">Summary</h4>
              <ul className="summary-list">
                <li>
                  <span>Subtotal</span>
                  <span>$66.00</span>
                </li>
                <li>
                  <span>
                    <span className="block">
                      Discount Code:{" "}
                      <span className="font-semibold">SAVE3</span>
                    </span>
                    <span className="underline cursor-pointer inline-block text-sm align-middle hover:text-rose-500">
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
              <div className="hidden md:block md:mt-5">
                <DiscountCode />
              </div>
            </div>
            <div className="pt-10">
              <h4 className="text-xl font-semibold mb-3">Shopping Cart</h4>
              <table className="cart-table summary-table">
                <tbody>
                  {cartList.map((cartItem, index) => (
                    <tr key={index}>
                      <td>
                        <div className="flex md:items-center items-start">
                          <Link href="#" legacyBehavior>
                            <div className="w-[93px] h-[93px] min-w-[93px] md:w-25 md:min-w-25 md:h-25 overflow-hidden bg-zinc-100 mr-5 max-w-[93px] md:max-w-none">
                              <Image
                                src={cartItem.image}
                                width={100}
                                height={100}
                                className="object-cover"
                                alt="cart-item-image"
                              />
                            </div>
                          </Link>

                          <div className="text-left ">
                            <Link
                              href="#"
                              className="hover:text-rose-500 text-base font-semibold inline-block"
                              legacyBehavior
                            >
                              {cartItem.prodName}
                            </Link>
                            <span className="block text-sm">
                              {cartItem.detail}
                            </span>
                            <span className="block text-sm">
                              {cartItem.subscribe}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-right max-w-[144px] ml-auto">
                          <span className="block font-semibold text-base ">
                            {cartItem.subtotal}
                          </span>
                          <span className="block text-red-600 line-through text-sm">
                            {cartItem.oldsubtotal}
                          </span>
                          <span className="block text-xs">
                            Billed monthly from 06/20, then $33.00 thereafter
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pt-5">
              <div className="bg-yellow-200 py-2.5 px-8 text-sm mb-3">
                You can pause, change or cancel subscriptions at any time
              </div>
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSummary;
