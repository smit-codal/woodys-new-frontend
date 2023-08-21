import AlertNotify from "../../components/alert/alert-notify";

export const Toast = ({
  message,
  type,
  className,
}: {
  message: string;
  type: "success" | "info" | "warning" | "error" | undefined;
  className: string;
}) => {
  return (
    <AlertNotify
      className={className}
      alertType={type}
      alertContent={message}
    />
  );
};
