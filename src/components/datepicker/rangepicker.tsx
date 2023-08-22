import { DatePicker } from "antd";
import React from "react";
const { RangePicker } = DatePicker;
type RangepickProps = {
  className?: string;
  disabled?: boolean;
};

const RangepickerComp = ({ className, disabled }: RangepickProps) => {
  return (
    <>
      <div className="relative">
        <RangePicker
          suffixIcon={false}
          className={`form-control ${className == null ? "" : className} ${
            disabled ? "disabled" : ""
          }`}
          separator={<i className="fa-light fa-arrow-right text-gray-300"></i>}
          prevIcon={<i className="fa-solid fa-arrow-left"></i>}
          nextIcon={<i className="fa-solid fa-arrow-right"></i>}
          disabled={disabled}
        />
        <span className="input-icon left">
          <i className="fa-solid fa-calendar"></i>
        </span>
      </div>
    </>
  );
};

export default RangepickerComp;
