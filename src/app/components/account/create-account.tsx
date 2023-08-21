import { Checkbox } from "antd";
import Button from "../../components/button";
import AutoCompleteBox from "../../components/form/autocomplete/autocomplete";
import CheckboxButton from "../../components/form/checkbox/checkbox";
import InputBox from "../../components/form/input/inputs";
import SelectBox from "../../components/form/select/selectbox";
import { useState } from "react";
import { Day, Month, Year } from "../../utils/data/date-picker-utils";
import { states } from "../../utils/data/states";
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const CreateAccount = () => {
  const [isAddressFieldManual, setIsAddressFieldManual] = useState(false);
  const [emailContactCheck, setEmailContactCheck] = useState(false);

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <>
      <div className="w-full max-w-[348px] mb-8">
        <h4 className=" font-semibold text-xl">I’m a new customer </h4>
        <h5 className="text-rose-500 font-semibold text-lg pb-4 border-b border-gray-300 flex items-center">
          Let’s get to know you!
          <span className="ml-1 w-5 min-w-5 h-5 text-base leading-4 text-zinc-900 flex items-center justify-center">
            <i className="fa-regular fa-smile-wink"></i>
          </span>
        </h5>
      </div>

      <div className="mb-5">
        <h4 className="font-semibold text-lg border-b border-gray-300 pb-3 mb-3">
          Your personal details
        </h4>
        <div className="grid grid-cols-2 gap-5">
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
            placeholder="Create Password"
            required
            label="Password"
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
      </div>
      <div className="mb-5">
        <h4 className="font-semibold text-lg border-b border-gray-300 pb-3 mb-3">
          Your home address
        </h4>
        <p className="text-gray-500 text-sm mb-3">
          While we can ship to most of the US, we need your home address to
          confirm you reside in a state where we are licensed. We are currently
          only licensed in AZ, CA, FL, OK, and TX.
        </p>
        {isAddressFieldManual ? (
          <div className="">
            <div className="grid grid-cols-6 gap-5 mb-5">
              <div className="col-span-3">
                <InputBox
                  placeholder="Address Line 1"
                  label="Address Line 1"
                  type="text"
                  required
                />
              </div>
              <div className="col-span-3">
                <InputBox
                  placeholder="Address Line 2"
                  label="Address Line 2"
                  type="text"
                />
              </div>

              <div className="col-span-2">
                <InputBox
                  placeholder="City"
                  label="City"
                  type="text"
                  required
                />
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
                <InputBox placeholder="Zip" label="Zip" type="text" required />
              </div>
            </div>
            <p className="text-base text-gray-500 cursor-pointer">
              Alternatively, you can{" "}
              <span
                className="underline font-semibold"
                onClick={() => setIsAddressFieldManual(false)}
              >
                use address auto-finder.
              </span>{" "}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <AutoCompleteBox
                options={options}
                onSearch={(text: string) => setOptions(getPanelValue(text))}
                label="Start typing to find and choose your address"
                placeholder="Start typing your address..."
              />
            </div>
            <p className="text-base text-gray-500 mb-5">
              Alternatively, you can{" "}
              <span
                className="underline font-semibold cursor-pointer"
                onClick={() => setIsAddressFieldManual(true)}
              >
                enter address manually
              </span>{" "}
            </p>
          </div>
        )}
      </div>
      <div className="w-full max-w-[350px] mb-12">
        <h4 className="text-base font-semibold pb-3 mb-3 border-b border-gray-300">
          Preferences
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
        <div className="">
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
      </div>
      <Button
        label="Create Account"
        className="btn btn-lg btn-accent btn-outline disabled"
      />
    </>
  );
};

export default CreateAccount;
