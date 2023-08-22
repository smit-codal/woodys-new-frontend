import CheckboxButton from "@/components/form/checkbox/checkbox";
import InputBox from "@/components/form/input/inputs";
import React, { useState } from "react";
import { ManualAddressSection } from "../manual-address-section";
import AutoCompleteBox from "@/components/form/autocomplete/autocomplete";

const stateOption = [
  { value: "State 1", label: "State 1" },
  { value: "State 2", label: "State 2" },
  { value: "State 3", label: "State 3" },
  { value: "State 4", label: "State 4" },
  { value: "State 5", label: "State 5" },
  { value: "State 6", label: "State 6" },
  { value: "State 7", label: "State 7" },
  { value: "State 8", label: "State 8" },
  { value: "State 9", label: "State 9" },
  { value: "State 10", label: "State 10" },
];

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const YourAccount = () => {
  const [isShippingAddManual, setIsShippingAddManual] = useState(false);

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  return (
    <>
      <h4 className="hidden md:block font-semibold text-2xl mb-7">
        Your Account
      </h4>
      <div className="mb-10">
        <h6 className="text-lg font-semibold border-b border-gray-300 mb-3 pb-3">
          Your details
        </h6>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <InputBox
              type="text"
              label="First Name"
              required
              placeholder="First Name"
              infoTextShow={false}
              infoText={<>We’ll never share your details.</>}
            />
          </div>

          <div>
            <InputBox
              type="text"
              label="Last Name"
              required
              placeholder="Last Name"
              infoTextShow={false}
              infoText={<>We’ll never share your details.</>}
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <InputBox
              type="text"
              label="Email Address"
              required
              placeholder="Email Address"
              infoTextShow={false}
              infoText={<>We’ll never share your details.</>}
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <InputBox
              type="text"
              label="Date of Birth"
              required
              placeholder="Date of Birth"
              infoTextShow={false}
              infoText={<>We’ll never share your details.</>}
            />
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h6 className="text-lg font-semibold border-b border-gray-300 mb-3 pb-3">
          Your home address
        </h6>
        <ManualAddressSection action="edit" stateOption={stateOption} />
      </div>
      <h6 className="text-lg font-semibold border-b border-gray-300 pb-3 mb-3">
        Your shipping address
      </h6>
      {isShippingAddManual ? (
        <>
          <ManualAddressSection action="edit" stateOption={stateOption} />
          <p className="text-gray-500 mt-3 mb-7">
            Alternatively, you can&nbsp;
            <span
              className="inline-block text-base font-semibold underline cursor-pointer"
              onClick={() => setIsShippingAddManual(false)}
            >
              use address auto-finder.
            </span>
          </p>
        </>
      ) : (
        <>
          <div className="mb-3">
            <AutoCompleteBox
              options={options}
              onSearch={(text: string) => setOptions(getPanelValue(text))}
              label="Start typing to find and choose your address"
              placeholder="Start typing your address ..."
              error={true}
              value="123 Street Name, City, State, ZIP"
              status="error"
              infoTextShow={true}
              infoText="Shipping to AL, NC, and SC isn't currently supported"
            />
          </div>
          <p className="text-gray-500">
            Alternatively, you can&nbsp;
            <span
              className="inline-block text-base font-semibold underline cursor-pointer"
              onClick={() => setIsShippingAddManual(true)}
            >
              enter address manually
            </span>
          </p>
          <div className="my-7">
            <CheckboxButton
              checked={true}
              headingText="Billing address is same as shipping"
            ></CheckboxButton>
          </div>
        </>
      )}

      <h6 className="text-lg font-semibold border-b border-gray-300 mb-3 pb-3">
        Your billing address
      </h6>
      <div className="mb-3">
        <AutoCompleteBox
          options={options}
          onSearch={(text: string) => setOptions(getPanelValue(text))}
          label="Start typing to find and choose your address"
          placeholder="Start typing your address ..."
        />
      </div>
      <p className="text-gray-500">
        Alternatively, you can&nbsp;
        <span className="inline-block text-base font-semibold underline cursor-pointer">
          enter address manually
        </span>
        &nbsp;or&nbsp;
        <span className="inline-block text-base font-semibold underline cursor-pointer">
          use address auto-finder.
        </span>
      </p>
    </>
  );
};

export default YourAccount;
