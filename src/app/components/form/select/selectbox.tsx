import * as React from "react";
import { Select } from "antd";

type SelectBoxProps = {
  className?: string;
  label?: string;
  size?: "large" | "middle" | "small";
  defaultValue?: string;
  placeholder?: string;
  disable?: boolean;
  infoText?: JSX.Element;
  infoTextShow?: boolean;
  options?: any;
  required?: boolean;
  status?: "error" | "warning";
};

const SelectBox = ({
  className,
  label,
  size,
  defaultValue,
  placeholder,
  disable,
  infoText,
  infoTextShow,
  options,
  required,
  status,
}: SelectBoxProps) => {
  return (
    <div>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-700 ml-1">*</span>}
        </label>
      )}

      <Select
        className={`${className == null ? "" : className}`}
        size={size}
        placeholder={placeholder}
        disabled={disable}
        status={status}
        options={options}
        defaultValue={defaultValue}
      />

      {infoTextShow ? (
        <p
          className={`form-helper-text ${
            status == "warning" ? "form-helper-text-success " : ""
          } ${status == "error" ? "form-helper-text-error" : ""}`}
        >
          {infoText}
        </p>
      ) : null}
    </div>
  );
};
export default SelectBox;
