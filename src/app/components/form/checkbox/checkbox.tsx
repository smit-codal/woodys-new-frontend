import * as React from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type CheckboxProps = {
  value?: string;
  headingText?: string;
  helperText?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  onChange?: (e: CheckboxChangeEvent) => void;
};
const CheckboxButton = ({
  value,
  headingText,
  helperText,
  disabled,
  checked,
  className,
  onChange,
}: CheckboxProps) => {
  return (
    <>
      <Checkbox
        className={className}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      >
        {headingText && <h5 className="radio-heading-text">{headingText}</h5>}
        {helperText && <span className="radio-helper-text">{helperText}</span>}
      </Checkbox>
    </>
  );
};
export default CheckboxButton;
