import React, { useState } from "react";
import { Radio, Space } from "antd";
import Image from "next/image";
import ApplePay from "public/images/logos/Apple_Pay.svg";
import GPay from "public/images/logos/Google_Pay.svg";
import visa from "public/images/logos/visa.svg";
import Mastercard from "public/images/logos/Mastercard.svg";
import americalExpress from "public/images/logos/americal-express.svg";
import PayPal from "public/images/logos/PayPal.svg";
import { AddEditAddressModal } from "../modals/add-edit-address";
import { ShippingBillingAddress } from "../modals/change-shipping-billing-address";
import Button from "../../button";
import InputBox from "../../form/input/inputs";
import RadioButton from "../../form/radio/radio";
import DatepickerComp from "../../datepicker/datepicker";

const ShippingBilling = () => {
  const [currentAddressTypeModal, setCurrentAddressTypeModal] = useState<{
    action: "add" | "edit";
    type: "shipping" | "billing";
    isOpen: boolean;
  }>({
    action: "add",
    type: "shipping",
    isOpen: false,
  });
  const [currentChangeRequestForAddress, setCurrentChangeRequestForAddress] =
    useState<{ status: boolean; type: "billing" | "shipping" }>({
      status: false,
      type: "billing",
    });
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

  const handleEditAddressAction = () => {
    setCurrentChangeRequestForAddress({
      ...currentChangeRequestForAddress,
      status: false,
    });

    setCurrentAddressTypeModal({
      ...currentAddressTypeModal,
      action: "edit",
      isOpen: true,
    });
  };

  const handleAddNewAddressAction = () => {
    setCurrentChangeRequestForAddress({
      ...currentChangeRequestForAddress,
      status: false,
    });

    setCurrentAddressTypeModal({
      ...currentAddressTypeModal,
      action: "add",
      isOpen: true,
    });
  };

  return (
    <>
      <h4 className="hidden md:block font-semibold text-2xl mb-8 ">
        Complete Your Order
      </h4>
      <div className="mb-10 grid md:grid-cols-3 gap-4.5 ">
        <div>
          <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
            Home Address
          </h4>
          <p>
            Address Line 1<br />
            Address Line 2<br />
            City, State
            <br />
            ZIP
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
            Shipping Address
          </h4>
          <p>
            Address Line 1<br />
            City, State
            <br />
            ZIP
          </p>
          <Button
            className="btn btn-sm btn-gray mt-3 lg:px-6"
            label="Change Shipping Address"
            onClick={() =>
              setCurrentChangeRequestForAddress({
                status: true,
                type: "shipping",
              })
            }
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
            Billing Address
          </h4>
          <p>
            Address Line 1<br />
            City, State
            <br />
            ZIP
          </p>
          <Button
            className="btn btn-sm btn-gray mt-3 lg:px-6"
            label="Change Billing Address"
            onClick={() =>
              setCurrentChangeRequestForAddress({
                status: true,
                type: "billing",
              })
            }
          />
        </div>
      </div>
      <div className="mb-7 grid md:grid-cols-2 gap-4.5 ">
        <div>
          <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
            Payment Method
          </h4>
          <Radio.Group className="" name="payMethod" defaultValue="1">
            <Space direction="vertical">
              <RadioButton
                className="mb-5"
                value="1"
                headingText="Credit or Debit Card"
              ></RadioButton>
              <RadioButton
                className="mb-5 items-center"
                value="2"
                image={ApplePay}
              ></RadioButton>
              <RadioButton
                className="mb-5 items-center"
                value="3"
                image={GPay}
              ></RadioButton>
              <RadioButton
                className="items-center"
                value="4"
                image={PayPal}
              ></RadioButton>
            </Space>
          </Radio.Group>
        </div>
        <div>
          <h4 className="text-lg font-semibold pb-1.5 mb-3 border-b border-gray-200">
            Payment Method
          </h4>
          <Radio.Group className="" name="ShipMethod" defaultValue="1">
            <Space direction="vertical">
              <RadioButton
                className="mb-3"
                value="1"
                headingText="Standard • (FREE)"
                helperText="Delivered within 2-5 working days."
              ></RadioButton>
              <RadioButton
                className=""
                value="2"
                headingText="DHL • $4.99"
                helperText="Delivered in 1-2 working days."
              ></RadioButton>
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="mb-7 py-6 px-5 border-2 border-accent-300">
        <div className="flex items-center mb-4">
          <h5 className="font-semibold text-base text-black">
            Credit or Debit Card
          </h5>
          <div className="flex ml-5 gap-x-1">
            <span className="w-8 min-w-8 h-5.5 border border-gray-200 rounded-sm flex items-center justify-center">
              <Image src={visa} width={24} height={18} alt="visa" />
            </span>
            <span className="w-8 min-w-8 h-5.5 border border-gray-200 rounded-sm flex items-center justify-center">
              <Image src={Mastercard} width={24} height={18} alt="Mastercard" />
            </span>
            <span className="w-8 min-w-8 h-5.5 border border-gray-200 rounded-sm flex items-center justify-center bg-[#016FD0]">
              <Image
                src={americalExpress}
                width={24}
                height={18}
                alt="america-express"
              />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputBox
              type="text"
              label="Name on Card"
              placeholder="Name on Card"
              required
              infoTextShow={false}
              infoText={<>Enter name</>}
            />
          </div>
          <div>
            <DatepickerComp
              label="Name on Card"
              placeholder="MM/DD"
              required
              infoTextShow={false}
              infoText={<>Enter Date</>}
              hideIcon={true}
              format="MM/DD"
            />
          </div>
          <div>
            <InputBox
              type="text"
              label="Security Code (CVC)"
              placeholder="123"
              icon_suffix="fa-solid fa-lock"
              required
              infoTextShow={false}
              infoText={<>Enter CVC</>}
            />
          </div>
          <div className="col-span-2">
            <InputBox
              type="text"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              required
              infoTextShow={false}
              infoText={<>Enter card number</>}
            />
          </div>
        </div>
      </div>
      <div className="py-2.5 px-5 bg-yellow-200 text-sm">
        <span className="font-semibold text-sm block">
          Your payment won’t be charged until your order is fulfilled with the
          pharmaceutical provider.
        </span>
        This is after your ID has been uploaded, and prescription approved with
        one of our clinicians once they’ve reviewed your personal details and
        medical information.
      </div>
      <AddEditAddressModal
        action={currentAddressTypeModal.action}
        isOpen={currentAddressTypeModal.isOpen}
        stateOption={stateOption}
        handleCancel={() => {
          setCurrentAddressTypeModal({
            ...currentAddressTypeModal,
            isOpen: false,
          });
        }}
      />
      <ShippingBillingAddress
        type={currentChangeRequestForAddress.type}
        handleEditAddressAction={handleEditAddressAction}
        handleAddNewAddressAction={handleAddNewAddressAction}
        handleCancel={() => {
          setCurrentChangeRequestForAddress({
            ...currentChangeRequestForAddress,
            status: false,
          });
        }}
        isOpen={currentChangeRequestForAddress.status}
      />
    </>
  );
};

export default ShippingBilling;
