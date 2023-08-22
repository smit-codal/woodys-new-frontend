import { Modal } from "antd";
import Button from "@/components/button";
import CheckboxButton from "@/components/form/checkbox/checkbox";
import { useState } from "react";
import { ManualAddressSection } from "../manual-address-section";
import { ManualAddressSectionProps } from "../types";
import AutoCompleteBox from "@/components/form/autocomplete/autocomplete";
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

export const AddEditAddressModal = ({
  isOpen,
  handleOk,
  handleCancel,
  stateOption,
  action,
}: ManualAddressSectionProps) => {
  const [addressAutoFill, setAddressAutofill] = useState(true);

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const title = action === "add" ? "Add New Address" : "Edit Address";
  const AvailableAddresses = [
    { primary: "Address Line 1", secondary: "City, State", zip: "Zip" },
    { primary: "Address Line 1", secondary: "City, State", zip: "Zip" },
    { primary: "Address Line 1", secondary: "City, State", zip: "Zip" },
  ];

  return (
    <Modal
      centered
      title={title}
      onOk={handleOk}
      onCancel={() => {
        setAddressAutofill(true);
        handleCancel();
      }}
      width={736}
      open={isOpen}
      footer={false}
    >
      <div className="mb-8">
        {addressAutoFill ? (
          <div className="mb-5">
            <div className="mb-3">
              <AutoCompleteBox
                options={options}
                onSearch={(text: string) => setOptions(getPanelValue(text))}
                label="Start typing to find and choose your address"
                placeholder="Start typing your address ..."
              />
            </div>
            <p className="text-gray-500 text-base">
              Alternatively, you can&nbsp;
              <span
                className="font-semibold underline cursor-pointer"
                onClick={() => setAddressAutofill(false)}
              >
                enter address manually
              </span>
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 text-base mb-5">
              Alternatively, you can&nbsp;
              <span
                className="font-semibold underline cursor-pointer"
                onClick={() => setAddressAutofill(true)}
              >
                enter address with auto-fill
              </span>
            </p>
            <div className="mb-5">
              <ManualAddressSection stateOption={stateOption} />
            </div>
          </>
        )}
        <div className="mb-5">
          <CheckboxButton
            checked={true}
            headingText="Billing address is same as shipping"
          ></CheckboxButton>
        </div>
        <Button
          className="mb-8 btn btn-md btn-accent btn-outline"
          label="Update & Use Address"
        />
      </div>
      <div className="text-zinc-900">
        <h5 className="mb-3 font-semibold text-lg pb-2 border-b border-gray-200">
          Available Shipping Addresses
        </h5>
        {AvailableAddresses.length > 0 ? (
          <div className="grid gap-x-15 gap-y-7 grid-cols-3">
            {AvailableAddresses.map((address, length) => (
              <div key={length} className="text-sm">
                <p>
                  {address.primary}
                  <br />
                  {address.secondary}
                  <br />
                  {address.zip}
                </p>
                <Button
                  className="mt-3 btn btn-md btn-accent btn-outline w-full"
                  label="Select Address"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No others saved.</p>
        )}
      </div>
    </Modal>
  );
};
