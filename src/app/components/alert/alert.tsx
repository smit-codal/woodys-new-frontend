import React from "react";
import { Alert } from "antd";
import Button from "./../button/index";
type AlertProps = {
  alertHeading?: string;
  alertContent?: string;
  alertType?: "success" | "info" | "warning" | "error";
};
const AlertMessage = ({
  alertHeading,
  alertContent,
  alertType,
}: AlertProps) => {
  const buttonConfig = {
    success: {
      className: "btn btn-sm btn-green",
      icon_prefix: "fa-regular fa-fire-flame",
      icon_suffix: "fa-regular fa-fire-flame",
      label: "Button text",
    },
    info: {
      className: "btn btn-sm btn-accent btn-outline",
      icon_prefix: "fa-regular fa-fire-flame",
      icon_suffix: "fa-regular fa-fire-flame",
      label: "Button text",
    },
    warning: {
      className: "btn btn-sm btn-orange btn-outline",
      icon_prefix: "fa-regular fa-fire-flame",
      icon_suffix: "fa-regular fa-fire-flame",
      label: "Button text",
    },
    error: {
      className: "btn btn-sm btn-red",
      icon_prefix: "fa-regular fa-fire-flame",
      icon_suffix: "fa-regular fa-fire-flame",
      label: "Button text",
    },
  };
  const iconClassName =
    alertType === "warning"
      ? "triangle-exclamation"
      : alertType === "error"
      ? "circle-exclamation"
      : "circle-check";

  return (
    <Alert
      message={
        <div className="flex items-center">
          <span className="w-5 mr-2 text-base">
            <i className={`fa-regular fa-${iconClassName}`} />
          </span>
          <h4 className="text-lg font-semibold">{alertHeading}</h4>
        </div>
      }
      description={
        <>
          <p className="mb-5">{alertContent}</p>
          <div className="flex justify-end">
            {alertType && <Button {...buttonConfig[alertType]} />}
          </div>
        </>
      }
      type={alertType}
      closeIcon={<i className="fa-regular fa-xmark" />}
      closable
    />
  );
};
export default AlertMessage;
