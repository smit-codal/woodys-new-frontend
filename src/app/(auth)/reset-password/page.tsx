"use client";

import AlertNotify from "@/components/alert/alert-notify";
import Button from "@/components/button";
import InputBox from "@/components/form/input/inputs";
import Image from "next/image";
import RocketOrbitingEarth from "public/images/logos/rocket-orbiting-earth.svg";
import { useState } from "react";

const ResetPassword = () => {
  const [isResetPassword, setResetPassword] = useState(false);
  return (
    <>
      <div className="mt-5 md:mt-15 md:mb-15">
        <h1
          className="font-semibold text-xl md:text-3xl text-center"
          onClick={() => setResetPassword((prev) => !prev)}
        >
          Reset Your Password
        </h1>
        {isResetPassword ? (
          <div className="mt-4 md:mt-11 mb-15 mx-auto max-w-[343px] md:max-w-[538px]">
            <AlertNotify
              className=" mb-10 md:mb-15"
              alertType="success"
              alertContent="Your password was successfully updated. You can now close this
        window."
            />
            <Image
              src={RocketOrbitingEarth}
              alt="Rocket Orbiting Earth"
              width={414}
              height={414}
            />
          </div>
        ) : (
          <div className="max-w-[395px] mx-auto mt-5 md:mt-7">
            <div className="bg-yellow-50 px-5 py-8 md:p-8 m-4 md:m-0">
              <p className="text-sm mb-4 md:mb-6 text-gray-900">
                Type in a new password and confirm to save changes.
              </p>
              <div className="mb-5">
                <InputBox
                  label="New Password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="mb-5">
                <InputBox
                  className="mb-5"
                  label="Repeat Password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <Button
                className="btn btn-sm btn-accent btn-outline min-w-25"
                label="Confirm"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ResetPassword;
