import Button from "../../button";
import React from "react";
import AlertNotify from "../../alert/alert-notify";

const IdUpload = () => {
  return (
    <>
      <div className="mb-12">
        <h4 className="hidden md:block font-semibold text-2xl mb-8 ">
          You’re almost there!{" "}
          <span className="font-normal">Just one more thing...</span>
        </h4>
        <div className="grid md:grid-cols-3 gap-4.5 ">
          <div>
            <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
              Shipping Address
            </h4>
            <p>
              Address Line 1<br />
              Address Line 2<br />
              City, State
              <br />
              ZIP
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
              Billing Address
            </h4>
            <p>
              Address Line 1<br />
              City, State
              <br />
              ZIP
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
              Information
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="text-base">
                <span className="block font-semibold">Payment Method:</span>{" "}
                VISA ****1224
              </div>
              <div className="text-base">
                <span className="block font-semibold">Shipping Method:</span>{" "}
                Standard Delivery (FREE)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-3">
        <AlertNotify
          className="mb-7"
          alertType="error"
          alertContent="You no longer qualify for the discount code, it has been removed. Please
        try another."
        />
        <h4 className="hidden md:block font-semibold text-2xl mb-3 ">
          Confirm Your Identity
        </h4>
        <p className="text-sm mb-7">
          Before we can process your prescription, we require your
          identification to be verified.
        </p>
        <div className="flex justify-between py-4.5 px-3 bg-gray-50 border-2 border-accent-400 border-dashed">
          <div className="relative">
            <input
              type="file"
              className="absolute top-0 left-0 right-0 bottom-0 z-10 file:cursor-pointer cursor-pointer opacity-0"
            />
            <div className="flex items-center">
              <span className="w-12 min-w-12 h-12 flex items-center justify-center text-4xl leading-12">
                <i className="fa-regular fa-id-badge"></i>
              </span>
              <span className="text-lg">Click to verify your identity</span>
            </div>
          </div>
          <Button
            className="btn btn-lg btn-accent btn-outline"
            icon_suffix="fa-solid fa-circle-chevron-right"
            label="Verify Your ID"
          />
        </div>
      </div>
    </>
  );
};

export default IdUpload;
