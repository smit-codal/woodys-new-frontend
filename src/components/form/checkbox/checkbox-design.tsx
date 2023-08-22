import * as React from "react";
import CheckboxButton from "./checkbox";
import { Checkbox } from "antd";

const CheckBoxDesign = () => (
  <>
    <h5 className="text-xl mb-3">Checkbox</h5>
    <div className="xl:grid grid-cols-2 gap-6 border border-dashed border-accent-300 rounded-lg">
      <div className="p-4">
        <Checkbox.Group className="gap-2" defaultValue={["2"]}>
          <CheckboxButton
            value="1"
            headingText="Write label text here"
            helperText="Some helper text here"
          ></CheckboxButton>
          <CheckboxButton
            value="2"
            headingText="Write label text here"
            helperText="Some helper text here"
          ></CheckboxButton>
          <CheckboxButton
            value="3"
            headingText="Write label text here"
            helperText="Some helper text here"
            disabled
          ></CheckboxButton>
        </Checkbox.Group>
      </div>
      <div className="bg-gray-900 text-white p-4">
        <Checkbox.Group className="gap-2" defaultValue={["2"]}>
          <CheckboxButton
            value="1"
            className="dark-checkbox"
            headingText="Write label text here"
            helperText="Some helper text here"
          ></CheckboxButton>
          <CheckboxButton
            value="2"
            className="dark-checkbox"
            checked={true}
            headingText="Write label text here"
            helperText="Some helper text here"
          ></CheckboxButton>
          <CheckboxButton
            value="3"
            className="dark-checkbox"
            headingText="Write label text here"
            helperText="Some helper text here"
            disabled
          ></CheckboxButton>
        </Checkbox.Group>
      </div>
    </div>
  </>
);

export default CheckBoxDesign;
