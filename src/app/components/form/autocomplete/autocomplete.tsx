import * as React from "react";
import { AutoComplete } from "antd";

type AutoCompleteProps = {
  className?: string;
  label?: string;
  size?: "lg" | "sm";
  defaultValue?: string;
  placeholder?: string;
  disable?: boolean;
  options?: any;
  required?: boolean;
  status?: "error" | "warning";
  onSearch?: any;
  infoTextShow?: boolean;
  success?: boolean;
  error?: boolean;
  infoText?: string;
  value?: string
};

const AutoCompleteBox = ({
  className,
  label,
  size,
  defaultValue,
  placeholder,
  disable,
  options,
  required,
  status,
  onSearch,
  infoTextShow,
  success,
  error,
  infoText,
  value
}: AutoCompleteProps) => {
  const sizeClassName =
    size === "sm" ? "auto-comp-sm" : size === "lg" ? "auto-comp-lg" : "";
  return (
    <>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-700 ml-1">*</span>}
        </label>
      )}

      <AutoComplete
        className={`${sizeClassName} ${className == null ? "" : className} ${
          disable ? "disabled" : ""
        }`}
        options={options}
        onSearch={onSearch}
        status={status}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disable}
        open={true}
        value={value}
      />
      {infoTextShow ? (
        <p
          className={`form-helper-text ${
            success ? "form-helper-text-success " : ""
          } ${error ? "form-helper-text-error" : ""}`}
        >
          {infoText}
        </p>
      ) : null}
    </>
  );
};
export default AutoCompleteBox;
