import React from "react";
import PaginationComp from "./pagination";

const PaginationDesign = (
  <>
    <h5 className="text-xl mb-4">Pagination</h5>
    <div className="md:flex gap-x-4">
      <div className="mb-8">
        <PaginationComp currentPage={1} totalPage={50} prevNextShow={true} />
      </div>
      <div className="mb-8">
        <PaginationComp
          currentPage={1}
          totalPage={50}
          prevNextShow={true}
          disabled={true}
        />
      </div>
    </div>
    <div className="md:flex gap-x-4">
      <div className="mb-8">
        <PaginationComp currentPage={1} totalPage={50} />
      </div>
      <div className="mb-8">
        <PaginationComp currentPage={1} totalPage={50} disabled={true} />
      </div>
    </div>
    <div className="md:flex gap-x-4">
      <div className="mb-8">
        <PaginationComp
          className="onlyprevnext"
          currentPage={1}
          totalPage={100}
          prevNextShow={true}
        />
      </div>
      <div className="mb-8">
        <PaginationComp
          className="onlyprevnext"
          currentPage={1}
          totalPage={100}
          prevNextShow={true}
          disabled={true}
        />
      </div>
    </div>
    <div className="md:flex gap-x-4">
      <div className="mb-8">
        <PaginationComp currentPage={1} totalPage={100} />
      </div>
      <div className="mb-8">
        <PaginationComp currentPage={1} totalPage={100} disabled={true} />
      </div>
    </div>
  </>
);
export default PaginationDesign;
