import { DatePicker } from "antd";
import React from "react";

type DatepickProps = {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  required?: boolean;
  infoText?: JSX.Element;
  infoTextShow?: boolean;
  status?: "error" | "warning";
  hideIcon?: boolean;
  format?: string;
};

const DatepickerComp = ({
  className,
  disabled,
  placeholder,
  label,
  required,
  infoText,
  infoTextShow,
  status,
  hideIcon,
  format,
}: DatepickProps) => {
  return (
    <>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-700 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <DatePicker
          suffixIcon={false}
          className={`form-control ${className == null ? "" : className} ${
            disabled ? "disabled" : ""
          } ${!hideIcon ? "" : "pl-4"}`}
          showToday={false}
          prevIcon={<i className="fa-solid fa-arrow-left"></i>}
          nextIcon={<i className="fa-solid fa-arrow-right"></i>}
          disabled={disabled}
          status={status}
          placeholder={placeholder}
          format={format}
        />

        {!hideIcon && (
          <span className="input-icon left">
            <i className="fa-solid fa-calendar"></i>
          </span>
        )}
      </div>
      {infoTextShow ? (
        <p
          className={`form-helper-text ${
            status == "warning" ? "form-helper-text-success " : ""
          } ${status == "error" ? "form-helper-text-error" : ""}`}
        >
          {infoText}
        </p>
      ) : null}
    </>
  );
};

export default DatepickerComp;
