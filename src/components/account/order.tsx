import Button from "@/components/button";
import OrderComp from "@/components/order";
import PaginationComp from "@/components/pagination/pagination";
import React from "react";

const Order = () => {
  return (
    <div>
      <div className="pb-8">
        <h3 className="text-3xl font-semibold mb-2">Orders</h3>
        <p className="mb-8">You haven’t made any orders yet.</p>
        <div className="grid gap-3 md:grid-cols-2 max-w-[680px] mb-5 w-full">
          <Button
            className="btn btn-md btn-secondary btn-outline btn-take-quiz-header btn-hover-icon-change"
            icon_suffix="fa-solid fa-fire text-rose-500"
            label="Take the quiz"
          />
          <Button
            className="btn btn-md btn-secondary btn-outline"
            label="See Product FAQs"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2 max-w-[680px]">
          <Button
            className="btn btn-md btn-secondary btn-outline"
            label="See All Products"
          />
          <Button
            className="btn btn-md btn-secondary btn-outline"
            label="See Product FAQs"
          />
        </div>
      </div>
      <div className="grid gap-y-3">
        <OrderComp orderStatus="delivered" />
        <OrderComp orderStatus="awaiting" />
        <OrderComp orderStatus="accepted" />
      </div>
      <div className="pt-5">
        <PaginationComp currentPage={1} totalPage={30} />
      </div>
    </div>
  );
};

export default Order;
