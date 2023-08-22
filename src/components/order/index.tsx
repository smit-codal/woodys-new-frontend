import Button from "@/components/button";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import cartProdImage from "public/images/GettyImages-1281155872.jpg";

const items: MenuProps["items"] = [
  {
    label: <span className="block">Cancel Order</span>,
    key: "0",
  },
  {
    label: <span className="block">Change Delivery Address</span>,
    key: "1",
  },
];
const orderProcess = [
  {
    icon: "box",
    title: "Order Accepted",
    text: "Do a little dance!",
    trackNum: "",
  },
  {
    icon: "clipboard-list",
    title: "Test Kit Received",
    text: "We received your kit on 01/12/23",
    trackNum: "",
  },

  {
    icon: "clipboard-check",
    title: "Interview Complete",
    text: "You’re all done!",
    trackNum: "",
  },
  {
    icon: "truck",
    title: "Order Shipped",
    text: "01/25/23",
    trackNum: (
      <div>
        <span className="text-xs text-gray-900 block">Tracking No.</span>
        <Link href="#">
          <a className="text-[9px] leading-3 underline block hover:text-rose-500">
            #12345678901234567890
          </a>
        </Link>
      </div>
    ),
  },
  {
    icon: "house",
    title: "Order Delivered",
    text: "02/01/23",
    trackNum: "",
  },
];
type CartItem = {
  image: string | StaticImageData;
  prodName: string;
  detail: string;
  subscribe: string;
  subtotal: string | number;
  oldsubtotal: string | number;
  quantity: number;
};
type OrderProp = {
  orderStatus?: "delivered" | "awaiting" | "accepted";
};
const OrderComp = ({ orderStatus }: OrderProp) => {
  const [isOrderShow, setIsOrderShow] = useState(false);
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
  const OrderStatusBg =
    orderStatus === "accepted"
      ? "yellow-200"
      : orderStatus === "awaiting"
      ? "rose-50"
      : "green-100";

  const OrderStatus =
    orderStatus === "accepted"
      ? "Order Accepted"
      : orderStatus === "awaiting"
      ? "Awaiting Test Kit Return"
      : "Delivered";
  return (
    <div className="border-2 border-gray-100 rounded bg-white px-8">
      <div className="py-8">
        <div className="mb-5">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <h5 className="font-semibold mr-3">Order date: 29/06/2023</h5>
              <span className={`badge bg-${OrderStatusBg}`}>{OrderStatus}</span>
            </div>

            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button
                className="btn btn-xs-rounded btn-gray bg-gray-200 hover:bg-gray-300"
                icon_prefix="fa-solid fa-ellipsis"
                label=""
                onClick={(e) => e.preventDefault()}
              />
            </Dropdown>
          </div>
          <span className="block">
            Order No. <span className="font-semibold">123456</span>
          </span>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <div className="pr-4 xl:pr-8 border-r border-gray-200">
              <span className="text-xs text-gray-600 block uppercase">
                PAYMENT STATUS
              </span>
              <span className="text-sm text-gray-900 block">Complete</span>
            </div>
            <div className="px-4 xl:px-8 border-r border-gray-200">
              <span className="text-xs text-gray-600 block uppercase">
                ORDER TOTAL
              </span>
              <span className="text-sm text-gray-900 block">$63.00</span>
            </div>
            <div className="px-4 xl:px-8 border-r border-gray-200">
              <span className="text-xs text-gray-600 block uppercase">
                PAYMENT METHOD
              </span>
              <span className="text-sm text-gray-600 block">
                VISA DEBIT ****1234
              </span>
            </div>
            <div className="pl-4 xl:pl-8">
              <span className="text-xs text-gray-600 block uppercase">
                SHIPPING METHOD
              </span>
              <span className="text-sm text-gray-900 block">
                Standard (3-5 days)
              </span>
            </div>
          </div>
          <Button
            className="btn btn-xs btn-accent btn-outline"
            icon_suffix={`fa-solid fa-chevron-${isOrderShow ? "up" : "down"}`}
            label={isOrderShow ? "Collapse" : "Expand"}
            onClick={() => setIsOrderShow(!isOrderShow)}
          />
        </div>
      </div>
      {isOrderShow && (
        <div className="pt-8 border-t border-gray-300">
          <div className="pb-8">
            <div className="mb-10 grid grid-cols-5 gap-x-9">
              {orderProcess.map((items, index) => (
                <div key={index} className="text-center relative">
                  <span
                    className={`order-circle ${
                      index === 0 ? "first" : index === 4 ? "last" : ""
                    }`}
                  >
                    <i className="fa-regular fa-check"></i>
                  </span>
                  <span className="w-6 min-w-6 block mx-auto text-xl mb-2">
                    <i className={`fa-regular fa-${items.icon}`}></i>
                  </span>
                  <h6 className="text-sm text-gray-900 block">{items.title}</h6>
                  <span className="text-xs text-gray-900 block">
                    {items.text}
                  </span>
                  {items.trackNum}
                </div>
              ))}
            </div>
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
                  {cartList.map((cartItem, index) => (
                    <tr key={index}>
                      <td>
                        <div className="flex md:items-center items-start">
                          <Link href="#">
                            <a>
                              <div className="w-[93px] h-[93px] min-w-[93px] md:w-25 md:min-w-25 md:h-25 overflow-hidden bg-zinc-100 mr-5 max-w-[93px] md:max-w-none">
                                <Image
                                  src={cartItem.image}
                                  width={100}
                                  height={100}
                                  className="object-cover"
                                  alt="cart-item-image"
                                />
                              </div>
                            </a>
                          </Link>

                          <div className="text-left">
                            <Link href="#">
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
                            <span className="block mb-1 md:hidden">
                              ({cartItem.quantity})
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell">
                        <span className="text-sm block">{cartItem.detail}</span>
                      </td>
                      <td className="hidden md:table-cell">
                        ({cartItem.quantity})
                      </td>
                      <td className="hidden md:table-cell">
                        <span className="text-sm block">
                          {cartItem.subscribe}
                        </span>
                      </td>
                      <td>
                        <div className="text-right">
                          <span className="block font-semibold text-base ">
                            {cartItem.subtotal}
                          </span>
                          <span className="block text-red-600 line-through text-sm">
                            {cartItem.oldsubtotal}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="-mx-8 bg-zinc-50/50 p-8 md:flex flex-row-reverse justify-between">
            <div className="w-full max-w-[254px]">
              <ul className="summary-list">
                <li>
                  <span>Shipping Costs:</span>
                  <span>FREE</span>
                </li>
                <li>
                  <span>Tax</span>
                  <span>$0.00</span>
                </li>
                <li>
                  <span>
                    <span className="block">
                      Discount Code: <span>SAVE3</span>
                    </span>
                  </span>
                  <span>-$3.00</span>
                </li>
                <li className="font-semibold">
                  <span className="">Total</span>
                  <span>$63.00</span>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-[265px] grid md:flex gap-y-5 md:gap-x-15">
              <div>
                <h6 className="text-gray-600 text-xs uppercase mb-3">
                  SHIPPING ADDRESS
                </h6>
                <p className="text-gray-900 text-sm">
                  John Smith
                  <br /> 123 Street Name
                  <br /> City, State
                  <br /> ZIP
                </p>
              </div>
              <div>
                <h6 className="text-gray-600 text-xs uppercase mb-3">
                  BILLING ADDRESS
                </h6>
                <p className="text-gray-900 text-sm">
                  John Smith
                  <br /> 123 Street Name
                  <br /> City, State
                  <br /> ZIP
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderComp;
