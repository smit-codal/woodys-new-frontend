import React from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
type PageProps = {
  className?: string;
  currentPage?: number;
  totalPage?: number;
  prevNextShow?: boolean;

  disabled?: boolean;
};
const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <a className="ant-pagination-item-link">Previous</a>;
  }
  if (type === "next") {
    return <a className="ant-pagination-item-link">Next</a>;
  }
  return originalElement;
};

const PaginationComp = ({
  className,
  currentPage,
  totalPage,
  prevNextShow,

  disabled,
}: PageProps) => {
  return (
    <>
      {prevNextShow ? (
        <Pagination
          className={className}
          defaultCurrent={currentPage}
          total={totalPage}
          showSizeChanger={false}
          itemRender={itemRender}
          disabled={disabled}
        />
      ) : (
        <Pagination
          className={className}
          defaultCurrent={currentPage}
          total={totalPage}
          showSizeChanger={false}
          disabled={disabled}
        />
      )}
    </>
  );
};
export default PaginationComp;
