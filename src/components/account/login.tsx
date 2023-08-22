import { Modal } from "antd";
import Button from "@/components/button";
import InputBox from "@/components/form/input/inputs";
import Link from "next/link";
import { useState } from "react";

const Login = ({ handleLogin }: { handleLogin: Function }) => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  return (
    <>
      <div className="p-8 bg-yellow-50">
        <h4 className=" font-semibold text-xl">I’m already a customer </h4>
        <h5 className="text-rose-500 font-semibold text-lg pb-4 border-b border-gray-300 mb-6 flex items-center">
          Well hello there, partner{" "}
          <span className="ml-2 w-5 min-w-5 h-5 text-[17px] text-zinc-900 flex items-center justify-center">
            <i className="fa-solid fa-hat-cowboy"></i>
          </span>
        </h5>
        <div className="mb-4">
          <InputBox label="Email Address" type="text" placeholder="Email" />
        </div>
        <div className="mb-5">
          <InputBox label="Password" type="password" placeholder="Password" />
        </div>
        <Link
          href="#"
          className="inline-block underline text-rose-900 mb-5"
          onClick={() => setIsForgotPassword(true)}
        >
          I’ve forgotten my password
        </Link>
        <Button
          className="btn btn-lg btn-accent btn-outline min-w-25"
          label="Login"
          onClick={() => handleLogin()}
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
      </div>
    </>
  );
};
export default Login;
