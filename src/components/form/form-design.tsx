import * as React from "react";
import InputDesignPage from "./input/input-design";
import RadioDesign from "./radio/radio-design";
import CheckBoxDesign from "./checkbox/checkbox-design";
import ToggleDesign from "./toggle/toggle-design";
import SelectDesignPage from "./select/select-design";
import AutoCompleteDesignPage from "./autocomplete/autocomplete-design";
const FormSection = (
  <>
    <div className="lg:grid grid-cols-5 gap-6">
      <div className="col-span-3">
        <div className="pb-6">
          <InputDesignPage />
        </div>
        <hr className="mb-10" />
        <div className="pb-6">
          <SelectDesignPage />
        </div>
        <hr className="mb-10" />
        <div className="pb-6">
          <AutoCompleteDesignPage />
        </div>
        <hr className="mb-10" />
      </div>
      <div className="col-span-2">
        <div className="mb-6">
          <RadioDesign />
        </div>
        <div className="mb-6">
          <CheckBoxDesign />
        </div>
      </div>
    </div>

    <div className="pb-4">
      <ToggleDesign />
    </div>
  </>
);
export default FormSection;
