import Breadcrumbs from "@/components/breadcrumb";
import Button from "@/components/button";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import EmptyImage from "public/images/empty-image-square.svg";

export const SubscriptionDetail = ({
  type,
  setIsDetailView,
}: {
  type: string;
  setIsDetailView: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="mb-10">
        <Breadcrumbs
          excludeDefault
          pages={[
            {
              title: "Subscriptions",
              href: "#",
            },
            {
              title: "Generic Cialis",
              href: "#",
            },
          ]}
        />
      </div>
      <div
        className="flex gap-5 items-center mb-5"
        onClick={() => setIsDetailView(false)}
      >
        <Image
          src={EmptyImage.src}
          height={EmptyImage.height}
          width={EmptyImage.width}
          alt="empty-image"
        />
        <div>
          <h4 className="font-semibold text-base mb-2 text-gray-900">
            Generic Cialis
          </h4>
          <div
            className={`${
              type === "Active" ? "bg-green-100" : "bg-rose-50"
            } rounded-2xl font-semibold text-sm py-0.5 cursor-pointer max-w-15 text-center`}
          >
            {type}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-3 mb-3">
        <div className="bg-white border-2 border-gray-100 rounded p-4">
          <div className="uppercase text-gray-600 text-xs mb-2.5">quantity</div>
          <div className="font-semibold text-sm text-gray-900">
            8 x 100mg x1
          </div>
        </div>

        <div className="bg-white border-2 border-gray-100 rounded p-4">
          <div className="uppercase text-gray-600 text-xs mb-2.5">
            subscription
          </div>
          <div className="font-semibold text-sm text-gray-900">Monthly</div>
        </div>

        <div className="bg-white border-2 border-gray-100 rounded p-4">
          <div className="uppercase text-gray-600 text-xs mb-2.5">
            next order
          </div>
          <div className="font-semibold text-sm text-gray-900">07/01/2023</div>
        </div>

        <div className="bg-white border-2 border-gray-100 rounded p-4">
          <div className="uppercase text-gray-600 text-xs mb-2.5">
            payment method
          </div>
          <div className="font-semibold text-sm text-gray-900">
            VISA DEBIT ****1234
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-4 border-2 border-gray-100 rounded">
          <div className="text-xs text-gray-600 block uppercase mb-2.5">
            SHIPPING ADDRESS
          </div>
          <div className="block">
            <p className="text-sm font-semibold text-gray-900">John Smith</p>
            <p className="text-sm">
              123 Address Line 1 <br />
              State, ZIP CODE{" "}
            </p>
          </div>
        </div>
        <div className="p-4 border-2 border-gray-100 rounded">
          <div className="text-xs text-gray-600 block uppercase mb-2.5">
            BILLING ADDRESS
          </div>
          <div className="block">
            <p className="text-sm font-semibold mb-0.5 text-gray-900">
              John Smith
            </p>
            <p className="text-sm">
              123 Address Line 1 <br />
              State, ZIP CODE{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 py-8 px-10 mb-5">
        <div className="flex justify-end">
          <div className="flex justify-between min-w-[254px] gap-x-11 text-base">
            <div className="flex flex-col gap-2">
              <p>Subtotal</p>
              <p>Tax</p>
              <p>Shipping Costs:</p>
              <p>Discount Code: SAVE3</p>
              <p className="font-semibold text-gray-900">Total: </p>
            </div>

            <div className="flex flex-col gap-2">
              <p>$36.00</p>
              <p>$0.00</p>
              <p>FREE</p>
              <p>-$3.00</p>
              <p className="font-semibold text-gray-900">$63.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <Button
          label="Buy & Ship Next Order Now"
          className="btn btn-md btn-accent btn-outline"
        />
        <Button
          label="Skip Next Order"
          className="btn btn-md btn-secondary btn-outline "
        />
        <Button
          label="Cancel Subscription"
          className="btn btn-md btn-secondary btn-outline "
        />
      </div>
    </>
  );
};
