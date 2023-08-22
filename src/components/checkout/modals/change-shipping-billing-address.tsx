import { Modal } from "antd";
import Button from "@/components/button";

type Props = {
  type: "shipping" | "billing";
  handleOk?: any;
  handleCancel: any;
  isOpen: boolean;
  handleEditAddressAction: React.MouseEventHandler<HTMLButtonElement>;
  handleAddNewAddressAction: React.MouseEventHandler<HTMLButtonElement>;
};

export const ShippingBillingAddress = ({
  type,
  handleOk,
  handleCancel,
  isOpen,
  handleEditAddressAction,
  handleAddNewAddressAction,
}: Props) => {
  const title = type === "billing" ? "Billing Address" : "Shipping Address";

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
      onCancel={handleCancel}
      width={736}
      open={isOpen}
      footer={false}
    >
      <div className="mb-8">
        <div className="mb-3 text-zinc-900">
          <p>
            Address Line 1<br />
            City, State
            <br />
            Zip
          </p>
        </div>
        <div className="flex gap-x-3">
          <Button
            className="btn btn-sm btn-gray"
            label="Edit Address"
            onClick={handleEditAddressAction}
          />
          <Button
            className="btn btn-sm btn-gray"
            label="Add New Address"
            onClick={handleAddNewAddressAction}
          />
        </div>
      </div>

      <div className="text-zinc-900">
        <h2 className="text-lg font-semibold pb-2 border-b border-gray-200 mb-3">
          Available {type === "billing" ? "Billing" : "Shipping"} Address
        </h2>
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
