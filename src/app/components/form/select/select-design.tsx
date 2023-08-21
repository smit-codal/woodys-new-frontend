import * as React from "react";
import SelectBox from "./selectbox";
import Link from "next/link";

const SelectDesignPage = () => {
  const selectOption = [
    { value: "State 1", label: "State 1" },
    { value: "State 2", label: "State 2" },
    { value: "State 3", label: "State 3" },
    { value: "State 4", label: "State 4" },
    { value: "State 5", label: "State 5" },
    { value: "State 6", label: "State 6" },
    { value: "State 7", label: "State 7" },
    { value: "State 8", label: "State 8" },
    { value: "State 9", label: "State 9" },
    { value: "State 10", label: "State 10" },
  ];
  return (
    <>
      <section>
        <div className="md:grid grid-cols-3 gap-6">
          <div>
            <div className="mb-2 text-xl">Small Select</div>
            <div className="mb-4">
              <SelectBox
                label="Small default"
                size="small"
                placeholder="State"
                //   status="warning"
                required
                options={selectOption}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Small active"
                size="small"
                defaultValue="State 3"
                placeholder="State"
                //   status="warning"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Small disabled"
                size="small"
                placeholder="State"
                //   status="warning"
                required
                disable
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Small success"
                size="small"
                placeholder="State"
                status="warning"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Small error"
                size="small"
                defaultValue="State 3"
                placeholder="State"
                status="error"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
          </div>
          <div>
            <div className="mb-2 text-xl">Select</div>
            <div className="mb-4">
              <SelectBox
                label="default"
                placeholder="State"
                //   status="warning"
                required
                options={selectOption}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="active"
                defaultValue="State 3"
                placeholder="State"
                //   status="warning"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="disabled"
                placeholder="State"
                //   status="warning"
                required
                disable
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="success"
                defaultValue="State 3"
                placeholder="State"
                status="warning"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="error"
                defaultValue="State 3"
                placeholder="State"
                status="error"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
          </div>
          <div>
            <div className="mb-2 text-xl">Large Select</div>
            <div className="mb-4">
              <SelectBox
                label="Large default"
                size="large"
                placeholder="State"
                //   status="warning"
                required
                options={selectOption}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Large active"
                size="large"
                defaultValue="State 3"
                placeholder="State"
                //   status="warning"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Large disabled"
                size="large"
                placeholder="State"
                //   status="warning"
                required
                disable
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Large success"
                size="large"
                defaultValue="State 3"
                placeholder="State"
                status="warning"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="mb-4">
              <SelectBox
                label="Large error"
                size="large"
                defaultValue="State 3"
                placeholder="State"
                status="error"
                required
                options={selectOption}
                infoTextShow={true}
                infoText={
                  <>
                    We’ll never share your details. See our
                    <Link href="">
                      <a className="ml-1">Privacy Policy</a>
                    </Link>
                    .
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectDesignPage;
