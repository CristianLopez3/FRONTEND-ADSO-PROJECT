import { Label, TextInput } from "keep-react";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputFieldProps = {
  type?: string;
  styles?: string;
  colorText?: string;
} & ComponentPropsWithoutRef<"input">;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    {
      name,
      type = "text",
      styles,
      colorText = "black",
    },
    ref
  ) {
    const uniqueId = name + (Math.random() * 100).toString();
    return (
      <div key={uniqueId}>
        <Label
          htmlFor={uniqueId}
          value={name}
          className={`capitalize text-${colorText} text-base mb-2 ${styles}`}
        />
        <TextInput
          id={uniqueId}
          name={name}
          placeholder={`Enter the ${name}`}
          color="gray"
          type={type}
        />
      </div>
    );
  }
);

export default InputField;
