import React from "react";
import DatepickerComp from "./datepicker";
import RangepickerComp from "./rangepicker";

const DatePickerDesign = (
  <>
    <div className="w-1/5 mb-5">
      <h5 className="text-lg mb-1">Date Picker</h5>
      <DatepickerComp />
    </div>
    <div className="w-1/5">
      <h5 className="text-lg mb-1">Date Range Picker</h5>
      <RangepickerComp />
    </div>
  </>
);

export default DatePickerDesign;
