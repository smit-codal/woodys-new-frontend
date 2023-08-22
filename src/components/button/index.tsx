import * as React from "react";

type ButtonProps = {
  className: string;
  label: string;
  icon_prefix?: string;
  icon_suffix?: string;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const Button = ({
  className,
  label,
  icon_prefix,
  icon_suffix,
  disable,
  onClick
}: ButtonProps) => (
  <button
    className={`${className} ${disable ? "disabled" : ""}`}
    disabled={disable}
    onClick={onClick}
  >
    {icon_prefix && (
      <span className="btn-icon">
        <i className={icon_prefix} />
      </span>
    )}
    {label}
    {icon_suffix && (
      <span className="btn-icon">
        <i className={icon_suffix} />
      </span>
    )}
  </button>
);

export default Button;
