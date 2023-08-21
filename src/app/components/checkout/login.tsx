import { Modal } from "antd";
import Button from "../../components/button";
import InputBox from "../../components/form/input/inputs";
import Link from "next/link";
import { useState } from "react";
import AlertNotify from "../../components/alert/alert-notify";
export const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  return <>
    <AlertNotify
      className="mb-7"
      alertType="success"
      alertContent="A link to change your password was successfully sent to the email provided."
    />
    <div className="text-lg font-semibold pb-3 border-b border-gray-200 mb-3">
      Log In
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-3 md:mb-7">
      <div className="col-span-1">
        <InputBox
          type="text"
          label="Your Email"
          required
          placeholder="Your Email"
        />
      </div>
      <div className="col-span-1">
        <InputBox
          type="text"
          label="Your Password"
          required
          placeholder="Your Password"
        />
      </div>
    </div>
    <Link
      href="#"
      className="inline-block underline text-rose-900 mb-3 md:mb-7"
      onClick={() => setIsForgotPassword(true)}>
      
        I’ve forgotten my password
      
    </Link>
    <Button
      className="btn btn-lg btn-accent btn-outline min-w-25"
      label="Login"
    />
    <Modal
      centered
      footer={false}
      title="Forgotten Password"
      open={isForgotPassword}
      onCancel={() => setIsForgotPassword(false)}
    >
      <>
        <p className="text-sm mb-2">
          Please enter your email to send a reset password link.
        </p>
        <InputBox
          className="mb-5"
          type="text"
          label="Your Email"
          required
          placeholder="Your Email"
        />
        <div className="flex flex-row-reverse gap-x-2">
          <Button
            className="btn btn-sm btn-accent btn-outline min-w-[90px]"
            label="Send Email"
          />
          <Button
            className="btn btn-sm btn-secondary btn-outline min-w-[90px]"
            label="Go Back"
            onClick={() => setIsForgotPassword(false)}
          />
        </div>
      </>
    </Modal>
  </>;
};
