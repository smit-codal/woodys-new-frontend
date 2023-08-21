import React from "react";
type AlertNotifyProps = {
  className?: string;
  alertContent?: string;
  alertType?: "success" | "info" | "warning" | "error";
};
const AlertNotify = ({
  className,
  alertContent,
  alertType,
}: AlertNotifyProps) => {
  const iconClassName =
    alertType === "warning"
      ? "triangle-exclamation"
      : alertType === "error"
      ? "circle-exclamation"
      : "circle-check";
  return (
    <div className={`alert-box alert-${alertType} ${className}`}>
      <span className="alert-icon">
        <i className={`fa-solid fa-${iconClassName} text-lg leading-[18px]`} />
      </span>
      <span className="font-semibold text-sm">{alertContent}</span>
    </div>
  );
};

export default AlertNotify;
