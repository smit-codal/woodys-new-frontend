import { Checkbox, Modal } from "antd";
import Button from "@/components/button";
import CheckboxButton from "@/components/form/checkbox/checkbox";
import OrderComp from "@/components/order";
import { AccountMenuOptions } from "@/components/account/types";
import { Dispatch, SetStateAction, useState } from "react";

const OverView = ({
  setActiveMenu,
}: {
  setActiveMenu: Dispatch<SetStateAction<string>>;
}) => {
  const [emailContactCheck, setEmailContactCheck] = useState(false);
  const [isDeactivateAccount, setIsDeactivateAccount] = useState(false);
  return (
    <>
      <h1 className="font-semibold text-3xl mb-10">Overview</h1>
      <h4 className="font-semibold text-base border-b border-gray-300 pb-3 mb-5">
        Most recent order
      </h4>
      <div className="mb-12">
        <OrderComp orderStatus="delivered" />
      </div>
      <p className="text-base mb-12">You haven’t made any orders yet.</p>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <h4 className="font-semibold text-base border-b border-gray-300 pb-3 mb-3">
            Personal Details
          </h4>
          <p>
            Name Surname <br />{" "}
            <span className="underline">name.surname@email.com</span>
          </p>
          <p className="text-red-700 mb-3 text-xs">
            This email is not verified. You cannot receive updates to this
            address until you verify it.
          </p>
          <Button label="Resend Email" className="btn btn-sm btn-gray" />
        </div>

        <div>
          <h4 className="font-semibold text-base border-b border-gray-300 pb-3 mb-3">
            Home address
          </h4>
          <p>
            Address Line 1 <br />
            City, State <br />
            ZIP
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-base border-b border-gray-300 pb-3 mb-3">
            Mobile Number
          </h4>
          <p>(123) 456-7890</p>
          <p className="text-red-700 mb-3 text-xs">
            This number is not verified. You cannot receive messages to this
            number until you verify it.
          </p>
          <Button label="Resend Email" className="btn btn-sm btn-gray" />
        </div>
      </div>

      <div className="mb-12">
        <Button
          label="Edit Personal Data"
          className="btn btn-sm btn-gray"
          onClick={() => setActiveMenu(AccountMenuOptions.YourProfile)}
        />
      </div>
      <div className="grid grid-cols-2 gap-10 mb-12">
        <div>
          <div className="mb-3">
            <h4 className="font-semibold text-base border-b border-gray-300 pb-3 mb-3">
              Default shipping address
            </h4>
            <p>
              Address Line 1 <br />
              City, State <br />
              ZIP
            </p>
          </div>

          <Button
            label="Change Shipping Address"
            className="btn btn-sm btn-gray"
            onClick={() => setActiveMenu(AccountMenuOptions.Addresses)}
          />
        </div>
        <div>
          <div className="mb-3">
            <h4 className="font-semibold text-base border-b border-gray-300 pb-3 mb-3">
              Default billing address
            </h4>
            <p>None Saved</p>
          </div>
          <Button
            label="Add New Address"
            className="btn btn-sm btn-gray"
            onClick={() => setActiveMenu(AccountMenuOptions.Addresses)}
          />
        </div>
      </div>
      <div className="w-full max-w-[350px]">
        <h4 className="font-semibold text-base border-b border-gray-300 pb-3 mb-3 ">
          Your preferences
        </h4>
        <h5 className="text-sm font-semibold mb-3">Email</h5>
        <div className="mb-3">
          <CheckboxButton
            checked={emailContactCheck}
            onChange={(e) => setEmailContactCheck(e.target.checked)}
            headingText="Contact me with marketing communications."
            helperText="(This is separate to emails regarding order and account updates)"
          ></CheckboxButton>
        </div>
        <h5 className="text-sm font-semibold mb-3">SMS</h5>
        <div className="mb-12">
          <Checkbox.Group className="gap-3">
            <CheckboxButton
              value="1"
              headingText="Contact me with order confirmations and updates."
            ></CheckboxButton>
            <CheckboxButton
              value="2"
              headingText="Contact me with marketing communications."
            ></CheckboxButton>
            <CheckboxButton
              value="3"
              headingText="Contact me with account updates"
            ></CheckboxButton>
          </Checkbox.Group>
        </div>
        <Button
          className="btn btn-md btn-secondary btn-outline"
          label="Deactivate your account"
          onClick={() => setIsDeactivateAccount(true)}
        />
      </div>
      <Modal
        centered
        width={600}
        footer={false}
        title={
          <div className="flex items-center">
            <span className="alert-icon -mt-1 mr-2">
              <i
                className={`fa-solid fa-triangle-exclamation text-lg text-orange-600 leading-[18px]`}
              />
            </span>
            <span>Deactivate your account</span>
          </div>
        }
        open={isDeactivateAccount}
        onCancel={() => setIsDeactivateAccount(false)}
      >
        <>
          <p className="text-sm mb-2">
            Are you sure you want to deactivate your account?
          </p>
          <div className="flex flex-row-reverse gap-x-2">
            <Button
              className="btn btn-sm btn-orange btn-outline min-w-[162px]"
              label="Deactivate My Account"
              onClick={() => setIsDeactivateAccount(false)}
            />
            <Button
              className="btn btn-sm btn-secondary btn-outline min-w-[74px]"
              label="Go Back"
              onClick={() => setIsDeactivateAccount(false)}
            />
          </div>
        </>
      </Modal>
    </>
  );
};

export default OverView;
