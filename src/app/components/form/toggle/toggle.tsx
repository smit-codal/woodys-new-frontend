import React from "react";
import { Switch } from "antd";
type SwicthProps = {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  headingText?: string;
  helperText?: string;
};
const ToggleSwitch = ({
  className,
  checked,
  disabled,
  headingText,
  helperText,
}: SwicthProps) => {
  return (
    <>
      <div className="flex">
        <Switch
          className={className}
          defaultChecked={checked}
          disabled={disabled}
        />
        {(headingText || helperText) && (
          <div className="switch-text pl-2">
            {headingText && (
              <h5 className="switch-heading-text">{headingText}</h5>
            )}
            {helperText && (
              <span className="switch-helper-text">{helperText}</span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ToggleSwitch;
