import * as React from "react";
import { Radio } from "antd";
import Image from "next/image";

type RadioProps = {
  value?: string;
  headingText?: string;
  helperText?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  image?: {
    src: string;
    height: number;
    width: number;
  };
};
const RadioButton = ({
  value,
  headingText,
  helperText,
  disabled,
  checked,
  className,
  image,
}: RadioProps) => {
  return (
    <>
      <Radio
        className={className}
        value={value}
        disabled={disabled}
        checked={checked}
      >
        {headingText && <h5 className="radio-heading-text">{headingText}</h5>}
        {helperText && <span className="radio-helper-text">{helperText}</span>}
        {image && (
          <Image
            src={image}
            width={image.width}
            height={image.height}
            alt="image"
          />
        )}
      </Radio>
    </>
  );
};
export default RadioButton;
