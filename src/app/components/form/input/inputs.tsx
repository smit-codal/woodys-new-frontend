import * as React from "react";

type InputProps = {
  type: string;
  className?: string;
  label?: string;
  size?: "lg" | "sm";
  value?: string | number;
  placeholder?: string;
  icon_prefix?: string;
  icon_suffix?: string;
  disable?: boolean;
  infoText?: JSX.Element;
  infoTextShow?: boolean;
  success?: boolean;
  error?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const InputBox = ({
  type,
  className,
  label,
  size,
  value,
  placeholder,
  icon_prefix,
  icon_suffix,
  disable,
  infoText,
  infoTextShow,
  onChange,
  success,
  error,
  required,
  onBlur,
}: InputProps) => {
  const sizeClassName =
    size === "sm" ? "form-control-sm" : size === "lg" ? "form-control-lg" : "";
  return (
    <div>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-700 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          className={`form-control ${sizeClassName} ${
            className == null ? "" : className
          } ${disable ? "disabled" : ""} ${
            success ? "form-success" : error ? "form-error" : ""
          } ${!icon_prefix ? "px-4" : ""}`}
          placeholder={placeholder}
          disabled={disable}
          onChange={onChange}
          value={value}
          required={required}
          onBlur={onBlur}
        />
        {icon_prefix && (
          <span className="input-icon left">
            <i className={icon_prefix} />
          </span>
        )}
        {icon_suffix && (
          <span className="input-icon right cursor-pointer">
            <i className={icon_suffix} />
          </span>
        )}
      </div>
      {infoTextShow ? (
        <p
          className={`form-helper-text ${
            success ? "form-helper-text-success " : ""
          } ${error ? "form-helper-text-error" : ""}`}
        >
          {infoText}
        </p>
      ) : null}
    </div>
  );
};
export default InputBox;
