import Button from "../../../components/button";

export const SubscriptionsList = ({
  type,
  seeFullDetails,
}: {
  type: string;
  seeFullDetails: () => void;
}) => {
  return (
    <div className="border-2 border-gray-100 rounded p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-3">
        <div className="subscription-item flex font-semibold items-start text-base gap-8">
          <p>Generic Cialis</p>
          <p>8 x 100mg Tablets</p>
          <p>Monthly</p>
        </div>
        <div
          className={`${
            type === "Active" ? "bg-green-100" : "bg-rose-50"
          } rounded-2xl font-semibold text-sm px-5 py-1 cursor-pointer`}
        >
          {type}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-start">
          <div className="pr-4 xl:pr-8 border-r border-gray-200">
            <span className="text-xs text-gray-600 block uppercase">
              next order
            </span>
            <span className="block font-semibold text-base">July 12, 2023</span>
          </div>
          <div className="px-4 xl:px-8 border-r border-gray-200">
            <span className="text-xs text-gray-600 block uppercase">
              order no.
            </span>
            <span className="block font-semibold text-base">123456</span>
          </div>
          <div className="px-4 xl:px-8">
            <span className="text-xs text-gray-600 block uppercase">
              Subscription total
            </span>
            <span className="block font-semibold text-base">$33.33</span>
          </div>
        </div>
        <Button
          label="See Full Details"
          className="btn btn-sm btn-gray"
          icon_suffix="fa-regular fa-chevron-right"
          onClick={seeFullDetails}
        />
      </div>
    </div>
  );
};
