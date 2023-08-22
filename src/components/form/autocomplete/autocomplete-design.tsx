import { useState } from "react";
import AutoCompleteBox from "./autocomplete";
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const AutoCompleteDesignPage = () => {
  const [options1, setOptions1] = useState<{ value: string }[]>([]);
  const [options2, setOptions2] = useState<{ value: string }[]>([]);
  const [options3, setOptions3] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  return (
    <>
      <div className="md:grid grid-cols-3 gap-6">
        <div>
          <div className="mb-2 text-xl">Small Autocomplete</div>
          <div className="mb-4">
            <AutoCompleteBox
              size="sm"
              options={options1}
              onSearch={(text: string) => setOptions1(getPanelValue(text))}
              label="Start typing to find and choose your address"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl">Autocomplete</div>
          <div className="mb-4">
            <AutoCompleteBox
              options={options2}
              onSearch={(text: string) => setOptions2(getPanelValue(text))}
              status="error"
              label="Start typing to find and choose your address"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl">Large Autocomplete</div>
          <div className="mb-4">
            <AutoCompleteBox
              size="lg"
              options={options3}
              onSearch={(text: string) => setOptions3(getPanelValue(text))}
              status="warning"
              label="Start typing to find and choose your address"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoCompleteDesignPage;
