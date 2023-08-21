import React from "react";
import Button from "./../../components/button/index";
import InputBox from "./../../components/form/input/inputs";
import AlertNotify from "../alert/alert-notify";
const DiscountCode = () => {
  return (
    <>
      <AlertNotify
        className="mb-2"
        alertType="error"
        alertContent="You no longer qualify for the discount code, it has been removed. Please
        try another."
      />
      <div className="relative coupne-code">
        <InputBox
          className="md:pl-0 pr-25 md:pr-20 py-4 text-base h-auto bg-yellow-50 border-t-0 border-l-0 border-r-0 border-b-2"
          type="text"
          placeholder="Enter discount code"
          infoTextShow={false}
        />
        <Button
          className="btn btn-xs btn-accent btn-outline btn-outline absolute top-1/2 -translate-y-1/2 right-4 md:right-0 uppercase"
          icon_prefix="fa-solid fa-plus"
          label="Add"
          disable
        />
      </div>
      <p className="text-xs text-red-600 mt-2">
        You do not qualify for this promotion
      </p>
    </>
  );
};

export default DiscountCode;
