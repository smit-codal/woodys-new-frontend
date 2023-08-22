import { useState } from "react";
import { SubscriptionsList } from "./subscriptions-list";
import { SubscriptionDetail } from "./subscriptions-detail";

export const Subscriptions = () => {
  const [isDetailView, setIsDetailView] = useState(false);

  const seeFullDetails = () => {
    setIsDetailView(true);
  };

  return (
    <>
      {!isDetailView ? (
        <div>
          <h1 className="font-semibold text-3xl mb-8">Subscriptions</h1>
          <div className="mb-12">
            <h4 className="font-semibold text-lg mb-3">Your Next Order</h4>
            <SubscriptionsList type="Active" seeFullDetails={seeFullDetails} />
          </div>

          <div className="mb-12">
            <h4 className="font-semibold text-lg mb-3">Active Subscriptions</h4>
            <div className="mb-3">
              <SubscriptionsList
                type="Active"
                seeFullDetails={seeFullDetails}
              />
            </div>
            <SubscriptionsList type="Active" seeFullDetails={seeFullDetails} />
          </div>

          <div className="mb-12">
            <h4 className="font-semibold text-lg mb-3">
              Inactive Subscriptions
            </h4>
            <SubscriptionsList
              type="Cancelled"
              seeFullDetails={seeFullDetails}
            />
          </div>

          <div className="bg-yellow-50 w-full mt-3 text-center p-[10px]">
            You have no inactive subscriptions.
          </div>
        </div>
      ) : (
        <SubscriptionDetail type="Active" setIsDetailView={setIsDetailView} />
      )}
    </>
  );
};
