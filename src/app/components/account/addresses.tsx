import { Modal } from "antd";
import Button from "../../components/button";
import AutoCompleteBox from "../../components/form/autocomplete/autocomplete";
import CheckboxButton from "../../components/form/checkbox/checkbox";
import InputBox from "../../components/form/input/inputs";
import SelectBox from "../../components/form/select/selectbox";
import { useState } from "react";
import WarningIcon from "public/images/icons/warning.svg";
import Image from "next/image";
import { states } from "../../utils/data/states";

type AddressScreenTypeProps = {
  addressType: "new" | "edit" | "";
  entryType: "manual" | "search" | "";
};

export const Addresses = () => {
  const [addressScreenType, setAddressScreenType] =
    useState<AddressScreenTypeProps>({
      addressType: "",
      entryType: "search",
    });

  const [isDeleteAddressModalOpen, setIsDeleteAddressModalOpen] =
    useState(false);

  const FooterSection = () => (
    <>
      <div className="mb-3">
        <CheckboxButton
          headingText="Make default shipping address"
          helperText="We cannot currently ship to AK or HI"
          checked={true}
          disabled
        />
      </div>
      <div className="mb-7">
        <CheckboxButton
          headingText="Make default shipping address"
          checked={true}
        />
      </div>
      <div className="flex gap-2 max-w-[275px]">
        <Button
          className="btn btn-md btn-secondary btn-outline"
          label="Back to Addresses"
          onClick={() =>
            setAddressScreenType({
              addressType: "",
              entryType: "search",
            })
          }
        />
        <Button
          className="btn btn-sm btn-accent btn-outline"
          label="Add New Address"
        />
      </div>
    </>
  );

  const DeleteButtonWithModal = () => {
    return (
      <>
        <Button
          className="w-full btn btn-sm btn-gray"
          label="Delete"
          onClick={() => setIsDeleteAddressModalOpen(true)}
        />
        <Modal
          open={isDeleteAddressModalOpen}
          footer={false}
          width={600}
          onCancel={() => setIsDeleteAddressModalOpen(false)}
          centered
          title={
            <div className="flex items-center">
              <span className="text-red-700 mr-2 mt-1">
                <Image
                  src={WarningIcon.src}
                  width={WarningIcon.width}
                  height={WarningIcon.height}
                  alt="warning-icon"
                />
              </span>
              <h4 className="text-lg font-semibold">Delete Address</h4>
            </div>
          }
        >
          <p className="text-sm mb-2">
            Are you sure you want to delete this address?
          </p>
          <p className="mb-5">
            Address Line 1 <br /> City, State <br /> ZIP
          </p>
          <div className="flex flex-row-reverse gap-2">
            <Button
              className="btn btn-sm btn-red"
              label="Yes Delete"
              onClick={() => setIsDeleteAddressModalOpen(false)}
            />
            <Button
              className="btn btn-sm btn-secondary btn-outline"
              label="No, Cancel"
              onClick={() => setIsDeleteAddressModalOpen(false)}
            />
          </div>
        </Modal>
      </>
    );
  };

  const EditAddressButton = () => {
    return (
      <Button
        className="w-full btn btn-sm btn-gray"
        label="Edit Address"
        onClick={() => {
          setAddressScreenType({
            addressType: "edit",
            entryType: "search",
          });
        }}
      />
    );
  };

  const LandingScreen = (
    <>
      <div className="grid grid-cols-2 gap-10 mb-3">
        <div>
          <h4 className="font-semibold text-base pb-3 border-b border-gray-300 mb-3">
            Default Shipping Address
          </h4>
          <p>
            Address Line 1 <br />
            City, State <br />
            ZIP
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-base pb-3 border-b border-gray-300 mb-3">
            Default Billing Address
          </h4>
          <p>
            Address Line 1 <br />
            City, State <br />
            ZIP
          </p>
        </div>
      </div>
      <div className="mb-14">
        <Button
          className="btn btn-sm btn-gray"
          label="Add New Address"
          onClick={() => {
            setAddressScreenType({
              ...addressScreenType,
              addressType: "new",
            });
          }}
        />
      </div>

      <h4 className="font-semibold text-base pb-3 border-b border-gray-300 mb-3">
        Saved Addresses
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
        <div>
          <p className="mb-3">
            Address Line 1 <br />
            City, State <br />
            ZIP
          </p>
          <EditAddressButton />
        </div>

        <div>
          <p className="mb-3">
            Address Line 1 <br />
            City, State <br />
            ZIP
          </p>
          <div className="flex gap-2 justify-between items-center">
            <EditAddressButton />
            <DeleteButtonWithModal />
          </div>
        </div>

        <div>
          <p className="mb-3">
            Address Line 1 <br />
            City, State <br />
            ZIP
          </p>
          <div className="flex gap-2 justify-between items-center">
            <EditAddressButton />
            <DeleteButtonWithModal />
          </div>
        </div>
      </div>
    </>
  );

  const SearchAddressSection = (
    <>
      <h4 className="font-semibold text-lg mb-3">Your address</h4>
      <div className="mb-5">
        <AutoCompleteBox
          placeholder="Start typing your address..."
          label="Start typing to find and choose your address"
        />
      </div>

      <p className="text-gray-500 text-base mb-7">
        Alternatively, you can{" "}
        <span
          className="font-semibold cursor-pointer"
          onClick={() => {
            setAddressScreenType({
              ...addressScreenType,
              entryType: "manual",
            });
          }}
        >
          enter address manually
        </span>
      </p>
      <FooterSection />
    </>
  );

  const ManualAddressSection = (
    <>
      <h4 className="font-semibold text-lg mb-3">Your address</h4>
      <div className="grid grid-cols-6 gap-5 mb-7">
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

      <p className="text-gray-500 text-base mb-7">
        Alternatively, you can{" "}
        <span
          className="font-semibold cursor-pointer"
          onClick={() => {
            setAddressScreenType({
              ...addressScreenType,
              entryType: "search",
            });
          }}
        >
          enter address with auto-fill
        </span>
      </p>

      <FooterSection />
    </>
  );

  const renderAddressScreen = (addressScreenType: AddressScreenTypeProps) => {
    let title = "Addresses";
    let content = LandingScreen;
    if (
      addressScreenType.addressType === "new" &&
      addressScreenType.entryType === "search"
    ) {
      title = "Add a New Address";
      content = SearchAddressSection;
    }
    if (
      addressScreenType.addressType === "new" &&
      addressScreenType.entryType === "manual"
    ) {
      title = "Add a New Address";
      content = ManualAddressSection;
    }
    if (
      addressScreenType.addressType === "edit" &&
      addressScreenType.entryType === "search"
    ) {
      title = "Edit Address";
      content = SearchAddressSection;
    }
    if (
      addressScreenType.addressType === "edit" &&
      addressScreenType.entryType === "manual"
    ) {
      title = "Edit Address";
      content = ManualAddressSection;
    }
    return {
      title,
      content,
    };
  };

  const addressScreen = renderAddressScreen(addressScreenType);

  return (
    <>
      {addressScreen && (
        <>
          <h2 className="text-3xl font-semibold mb-10">
            {addressScreen.title}
          </h2>
          {addressScreen.content}
        </>
      )}
    </>
  );
};
