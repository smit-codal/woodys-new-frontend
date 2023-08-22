import React from "react";
import ToggleSwitch from "./toggle";

const ToggleDesign = () => (
  <>
    <div className="xl:grid grid-cols-2 gap-6">
      <div className="md:grid grid-cols-3 gap-4 p-7">
        <div className="">
          <h5 className="text-lg mb-3">Small Switch</h5>
          <div className="mb-7">
            <h6>Small default State</h6>
            <ToggleSwitch
              className="switch-sm"
              checked={false}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Small active State</h6>
            <ToggleSwitch
              className="switch-sm"
              checked={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Small disabled State</h6>
            <ToggleSwitch
              className="switch-sm"
              checked={false}
              disabled={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
        </div>
        <div className="">
          <h5 className="text-lg mb-3">Default Switch</h5>
          <div className="mb-7">
            <h6>Default State</h6>
            <ToggleSwitch
              checked={false}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Active State</h6>
            <ToggleSwitch
              checked={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>disabled State</h6>
            <ToggleSwitch
              checked={false}
              disabled={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
        </div>
        <div className="">
          <h5 className="text-lg mb-3">Large Switch</h5>
          <div className="mb-7">
            <h6>Large default State</h6>
            <ToggleSwitch
              className="switch-lg"
              checked={false}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Large active State</h6>
            <ToggleSwitch
              className="switch-lg"
              checked={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Large disabled State</h6>
            <ToggleSwitch
              className="switch-lg"
              checked={false}
              disabled={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-3 gap-4 p-7 dark-switch bg-gray-900 text-white">
        <div className="">
          <h5 className="text-lg mb-3">Small Switch</h5>
          <div className="mb-7">
            <h6>Small default State</h6>
            <ToggleSwitch
              className="dark-switch switch-sm"
              checked={false}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Small active State</h6>
            <ToggleSwitch
              className="dark-switch switch-sm"
              checked={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Small disabled State</h6>
            <ToggleSwitch
              className="dark-switch switch-sm"
              checked={false}
              disabled={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
        </div>
        <div className="">
          <h5 className="text-lg mb-3">Default Switch</h5>
          <div className="mb-7">
            <h6>Default State</h6>
            <ToggleSwitch
              className="dark-switch"
              checked={false}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Active State</h6>
            <ToggleSwitch
              className="dark-switch"
              checked={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>disabled State</h6>
            <ToggleSwitch
              className="dark-switch"
              checked={false}
              disabled={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
        </div>
        <div className="">
          <h5 className="text-lg mb-3">Large Switch</h5>
          <div className="mb-7">
            <h6>Large default State</h6>
            <ToggleSwitch
              className="dark-switch switch-lg"
              checked={false}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Large active State</h6>
            <ToggleSwitch
              className="dark-switch switch-lg"
              checked={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
          <div className="mb-7">
            <h6>Large disabled State</h6>
            <ToggleSwitch
              className="dark-switch switch-lg"
              checked={false}
              disabled={true}
              headingText="Write label text here"
              helperText="Some helper text here"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ToggleDesign;
