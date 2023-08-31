import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cartProdImage from "public/images/GettyImages-1281155872.jpg";
import Button from "../button";

const ProductCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };
  return (
    <div
      className={` bg-white shadow-md shadow-black/[0.15] transition-all border ${
        isExpanded ? "border-accent-300" : "border-zinc-50"
      }`}
    >
      <div className="py-3 px-5">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center mr-1">
            <h5 className=" font-semibold mr-1">Improve your mood</h5>
            <span className="w-4 min-w-4 h-4 leading-4 text-rose-500">
              <i className="fa-solid fa-circle-heart"></i>
            </span>
          </div>
          <span className="whitespace-nowrap bg-green-100 text-green-600 font-semibold text-xs py-0.5 px-2.5 rounded-2xl">
            SAVE UP TO 10%
          </span>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex md:items-center items-start">
            <Link href="#" legacyBehavior>
              <div className="relative w-15 min-w-15 h-15 overflow-hidden bg-zinc-100 mr-3">
                <Image
                  src={cartProdImage}
                  className="object-cover"
                  alt="cart-prod-image"
                  fill
                />
              </div>
            </Link>

            <div className="text-left ">
              <Link
                href="#"
                className="hover:text-rose-500 text-sm font-semibold inline-block"
              >
                Generic Cialis
              </Link>
              <span className="block text-xs">Pack of 8 capsules</span>
              <span className="block text-xs">25-100mg</span>
            </div>
          </div>
          <div className="max-w-[144px] ml-auto text-right">
            <div className="min-h-[43px] mb-1">
              <span className="block font-semibold text-base ">$33.00</span>
              <span className="block text-red-600 line-through text-sm -mt-0.5">
                $36.00
              </span>
            </div>
            <Button
              className="btn btn-xs-rounded btn-accent btn-outline ml-auto"
              icon_prefix={`fa-solid fa-plus transition-all  ${
                isExpanded ? "-rotate-45" : ""
              }`}
              label=""
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="px-5 pt-2 pb-4 bg-gray-50">
          <div className="mb-1">
            <h6 className="font-semibold text-xs mb-1">Dosage</h6>
            <div className="flex gap-1 flex-wrap">
              <Button className="btn btn-xs border btn-pdp " label="100mg" />
              <Button
                className="btn btn-xs border btn-pdp active"
                label="50mg"
              />
              <Button className="btn btn-xs border btn-pdp " label="25mg" />
            </div>
          </div>
          <div className="mb-2.5">
            <h6 className="font-semibold text-xs mb-1">Quantity</h6>
            <div className="flex gap-1 flex-wrap">
              <Button
                className="btn btn-xs border btn-pdp flex-1 active"
                label="Monthly Subscription"
              />
              <Button
                className="btn btn-xs border btn-pdp flex-1"
                label="Single Pack"
              />
            </div>
          </div>
          <Button
            className="btn btn-sm btn-accent btn-outline w-full"
            icon_prefix="fa-solid fa-plus"
            label="Add to Cart"
          />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
