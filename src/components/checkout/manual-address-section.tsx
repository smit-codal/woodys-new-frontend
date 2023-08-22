import InputBox from "@/components/form/input/inputs";
import SelectBox from "@/components/form/select/selectbox";
import { ManualAddressSectionProps } from "./types";

export const ManualAddressSection = ({
  stateOption,
}: ManualAddressSectionProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
      <div className="col-span-2 md:col-span-3">
        <InputBox
          type="text"
          label="Address Line 1"
          required
          placeholder="Address Line 1"
          icon_prefix=""
          icon_suffix=""
          infoTextShow={false}
          infoText={<>We’ll never share your details.</>}
        />
      </div>
      <div className="col-span-2 md:col-span-3">
        <InputBox
          type="text"
          label="Address Line 2"
          required
          placeholder="Address Line 2"
          icon_prefix=""
          icon_suffix=""
          infoTextShow={false}
          infoText={<>We’ll never share your details.</>}
        />
      </div>
      <div className="col-span-2">
        <InputBox
          type="text"
          label="City"
          required
          placeholder="City"
          icon_prefix=""
          icon_suffix=""
          infoTextShow={false}
          infoText={<>We’ll never share your details.</>}
        />
      </div>
      <div className="md:col-span-2">
        <SelectBox
          label="State"
          size="middle"
          placeholder="State"
          required
          options={stateOption}
        />
      </div>
      <div className="md:col-span-2">
        <InputBox
          type="text"
          label="Zip"
          required
          placeholder="Zip"
          icon_prefix=""
          icon_suffix=""
          infoTextShow={false}
          infoText={<>We’ll never share your details.</>}
        />
      </div>
    </div>
  );
};
