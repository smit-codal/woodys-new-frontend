import React from "react";
import RadioButton from "./radio";
import { Radio, Space } from "antd";

const RadioDesign = () => {
  return (
    <>
      <h5 className="text-xl mb-3">Radio</h5>
      <div className="xl:grid grid-cols-2 gap-6 border border-dashed border-accent-300 rounded-lg">
        <div className="p-4">
          <Radio.Group name="radioDark" defaultValue="2">
            <Space direction="vertical">
              <RadioButton
                value="1"
                headingText="Write label text here"
                helperText="Some helper text here"
              ></RadioButton>
              <RadioButton
                value="2"
                headingText="Write label text here"
                helperText="Some helper text here"
              ></RadioButton>
              <RadioButton
                value="3"
                headingText="Write label text here"
                helperText="Some helper text here"
                disabled
              ></RadioButton>
            </Space>
          </Radio.Group>
        </div>
        <div className="bg-gray-900 text-white p-4">
          <Radio.Group name="radioWhite" defaultValue="2">
            <Space direction="vertical">
              <RadioButton
                className="dark-radio"
                value="1"
                headingText="Write label text here"
                helperText="Some helper text here"
              ></RadioButton>
              <RadioButton
                className="dark-radio"
                value="2"
                headingText="Write label text here"
                helperText="Some helper text here"
              ></RadioButton>
              <RadioButton
                className="dark-radio"
                value="3"
                headingText="Write label text here"
                helperText="Some helper text here"
                disabled
              ></RadioButton>
            </Space>
          </Radio.Group>
        </div>
      </div>
    </>
  );
};

export default RadioDesign;
