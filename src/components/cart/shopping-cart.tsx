import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/button/index";
import InputBox from "@/components/form/input/inputs";
import cartProdImage from "public/images/GettyImages-1281155872.jpg";
import ProductCard from "../promoted-product/product-card";
import DiscountCode from "../discount-code";

type CartItem = {
  image: string | StaticImageData;
  prodName: string;
  detail: string;
  subscribe: string;
  subtotal: string | number;
  oldsubtotal: string | number;
  quantity: number;
};

const ShoppingCart = () => {
  const cartList: CartItem[] = [
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
  const [cartProductList, setCartProductList] = useState<CartItem[]>(cartList);

  const handleQuantityChange = (quantity: string, index: number) => {
    const regex = /^(?:\d{1,2})?$/;
    const isValidInput = regex.test(quantity);
    if (isValidInput) {
      const currentList = [...cartProductList];
      currentList[index].quantity = +quantity;
      setCartProductList(currentList);
    }
  };

  const handleIncrementDecrement = (
    cartItem: CartItem,
    index: number,
    type: string
  ) => {
    let item: CartItem = {
      ...cartItem,
      quantity:
        type === "increment" ? +cartItem.quantity + 1 : +cartItem.quantity - 1,
    };
    const currentList = [...cartProductList];
    currentList[index] = item;
    setCartProductList(currentList);
  };

  const fillDefaultValue = (quantity: number, index: number) => {
    if (quantity === 0) {
      const currentList = [...cartProductList];
      currentList[index].quantity = 1;
      setCartProductList(currentList);
    }
  };
  return (
    <>
      <div className="lg:max-w-[680px] w-full pt-5 pb-4 md:py-15">
        <h2 className="text-xl  md:text-3xl font-semibold pb-5 md:pb-3 border-b border-gray-200 md:border-b-0">
          Shopping Cart
        </h2>
        <div className="table-responsive">
          <table className="cart-table border-b border-gray-200">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="text-left">Product</th>
                <th>Details</th>
                <th>Quantity</th>
                <th>Subscription</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartProductList.map((cartItem, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex md:items-center items-start">
                      <Link href="#" legacyBehavior>
                        <div className="relative w-[93px] h-[93px] min-w-[93px] md:w-25 md:min-w-25 md:h-25 overflow-hidden bg-zinc-100 mr-5 max-w-[93px] md:max-w-none">
                          <Image
                            src={cartItem.image}
                            className="object-cover"
                            fill
                            alt="cart-item-image"
                          />
                        </div>
                      </Link>

                      <div className="text-left">
                        <Link legacyBehavior href="#">
                          <a className="hover:text-rose-500 text-base font-semibold mb-1 md:mb-0 inline-block">
                            {cartItem.prodName}
                          </a>
                        </Link>
                        <span className="block mb-1 md:hidden">
                          {cartItem.detail}
                        </span>
                        <span className="block mb-1 md:hidden">
                          {cartItem.subscribe}
                        </span>
                        <div className="flex items-center gap-x-0.5 spinner-block md:hidden">
                          <Button
                            className="spinner-btn"
                            icon_prefix="fa-solid fa-minus"
                            label=""
                            disable={cartItem.quantity <= 1}
                            onClick={() =>
                              handleIncrementDecrement(
                                cartItem,
                                index,
                                "decrement"
                              )
                            }
                          />
                          <InputBox
                            type="text"
                            size="sm"
                            value={cartItem.quantity}
                            onChange={(e) =>
                              handleQuantityChange(e.target.value, index)
                            }
                            onBlur={() =>
                              fillDefaultValue(cartItem.quantity, index)
                            }
                          />
                          <Button
                            className="spinner-btn"
                            icon_prefix="fa-solid fa-plus"
                            label=""
                            disable={cartItem.quantity >= 99}
                            onClick={() =>
                              handleIncrementDecrement(
                                cartItem,
                                index,
                                "increment"
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell">
                    <span className="text-sm block">{cartItem.detail}</span>
                  </td>
                  <td className="hidden md:table-cell">
                    <div className="flex items-center justify-center gap-x-0.5 spinner-block">
                      <Button
                        className="spinner-btn"
                        icon_prefix="fa-solid fa-minus"
                        label=""
                        disable={cartItem.quantity <= 1}
                        onClick={() =>
                          handleIncrementDecrement(cartItem, index, "decrement")
                        }
                      />
                      <InputBox
                        type="text"
                        size="sm"
                        value={cartItem.quantity}
                        onChange={(e) =>
                          handleQuantityChange(e.target.value, index)
                        }
                        onBlur={() =>
                          fillDefaultValue(cartItem.quantity, index)
                        }
                      />
                      <Button
                        className="spinner-btn"
                        icon_prefix="fa-solid fa-plus"
                        label=""
                        disable={cartItem.quantity >= 99}
                        onClick={() =>
                          handleIncrementDecrement(cartItem, index, "increment")
                        }
                      />
                    </div>
                  </td>
                  <td className="hidden md:table-cell">
                    <span className="text-sm block">{cartItem.subscribe}</span>
                  </td>
                  <td>
                    <div className="md:flex flex-row-reverse items-center">
                      <span className="cart-remove ml-auto md:ml-4 mb-3 md:mb-0">
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                      <div className="text-right">
                        <span className="block font-semibold text-base ">
                          {cartItem.subtotal}
                        </span>
                        <span className="block text-red-600 line-through text-sm">
                          {cartItem.oldsubtotal}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-5 pt-5 md:hidden">
          <DiscountCode />
        </div>
        <div className="pt-10">
          <h4 className="text-lg mb-4">You’ll be excited for these</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
