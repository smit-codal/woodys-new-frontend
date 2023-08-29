"use client";

import AlertDesign from "@/components/alert/alert-design";
import BreadcrumbDesign from "@/components/breadcrumb/breadcrumb-design";
import ButtonSection from "@/components/button/button-design";
import DatePickerDesign from "@/components/datepicker/datepicker-design";
import FormSection from "@/components/form/form-design";
import PaginationDesign from "@/components/pagination/pagination-design";
import { Tabs, TabsProps } from "antd";

export default function TypoGraphy() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Buttons`,
      children: ButtonSection,
    },
    {
      key: "2",
      label: `Form`,
      children: FormSection,
    },
    {
      key: "3",
      label: `Breadcrumbs`,
      children: BreadcrumbDesign,
    },
    {
      key: "4",
      label: `Date-Picker`,
      children: DatePickerDesign,
    },
    {
      key: "5",
      label: `Alerts`,
      children: AlertDesign,
    },
    {
      key: "6",
      label: `Pagination`,
      children: PaginationDesign,
    },
  ];

  return (
    <div className="pt-4 px-6">
      <Tabs defaultActiveKey="5" items={items} />
    </div>
  );
}
