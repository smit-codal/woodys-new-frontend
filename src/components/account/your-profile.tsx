import Button from "@/components/button";
import InputBox from "@/components/form/input/inputs";
import SelectBox from "@/components/form/select/selectbox";
import { useState } from "react";
import { Day, Month, Year } from "../../utils/data/date-picker-utils";
import { states } from "../../utils/data/states";

export const YourProfile = () => {
  const [showChangePasswordSection, setShowChangePasswordSection] =
    useState(false);
  return (
    <>
      <h1 className="font-semibold text-3xl mb-5">Your Profile</h1>
      <div className="text-sm pt-2 pb-2 pl-4 pr-4 bg-yellow-50 mb-8">
        Update your personal data
      </div>
      <h4 className="font-semibold text-lg border-b border-gray-300 pb-3 mb-3">
        Your personal details
      </h4>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        <InputBox
          placeholder="First Name"
          required
          label="First Name"
          type="text"
        />

        <InputBox
          placeholder="Last Name"
          required
          label="Last Name"
          type="text"
        />

        <div>
          <div className="grid grid-cols-3 gap-3">
            <SelectBox
              options={Year}
              label="Year"
              required
              placeholder="YYYY"
              status="error"
            />

            <SelectBox
              options={Month}
              label="Month"
              required
              placeholder="MM"
            />

            <SelectBox options={Day} label="Day" required placeholder="DD" />
          </div>
          <p className="form-helper-text form-helper-text-error">
            Sorry, you must be at least 18 to be a Woody&apos;s customer.
          </p>
        </div>
        <InputBox
          placeholder="Email Address"
          required
          label="Email Address"
          type="text"
        />

        <InputBox
          placeholder="Mobile Number"
          required
          label="Mobile Number"
          type="text"
          infoTextShow={true}
          infoText={
            <>
              We’ll need this so our physicians can contact you with any
              prescription questions or relevant information.
            </>
          }
        />
      </div>
      <h4 className="font-semibold text-lg border-b border-gray-300 pb-3 mb-3">
        Your home address
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mb-12">
        <div className="col-span-3">
          <InputBox
            type="text"
            label="Address Line 1"
            required
            placeholder="Address Line 1"
          />
        </div>
        <div className="col-span-3">
          <InputBox
            type="text"
            label="Address Line 2"
            placeholder="Address Line 2"
          />
        </div>
        <div className="col-span-2">
          <InputBox type="text" label="City" placeholder="City" required />
        </div>
        <div className="col-span-2">
          <SelectBox
            options={states}
            placeholder="State"
            label="State"
            required
          />
        </div>
        <div className="col-span-2">
          <InputBox type="text" label="ZIP" placeholder="ZIP" required />
        </div>
      </div>
      <div className="mb-12">
        <Button
          label="Save Changes"
          className="btn btn-outline btn-sm btn-accent"
        />
      </div>

      {showChangePasswordSection ? (
        <>
          <div className="flex justify-between items-center mb-5">
            <h4 className="font-semibold text-lg mb-2">Change Password</h4>
            <Button
              label="Close"
              className="btn btn-sm btn-secondary btn-outline "
              icon_suffix="fa-regular fa-close"
              onClick={() => setShowChangePasswordSection(false)}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <InputBox
              type="password"
              label="New Password"
              placeholder="New Password"
              required
              error
              infoTextShow
              infoText={
                <>Your new password can’t be the same as your old one.</>
              }
            />
            <InputBox
              type="password"
              label="Enter your old password to confirm changes"
              placeholder="Old Password"
              required
            />
            <div className="mb-12">
              <Button
                label="Save Password"
                className="btn btn-outline btn-sm btn-accent"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <h4 className="font-semibold text-lg mb-2">Password</h4>
          <Button
            label="Change Password"
            className="btn btn-sm btn-gray"
            onClick={() => setShowChangePasswordSection(true)}
          />
        </>
      )}
    </>
  );
};
