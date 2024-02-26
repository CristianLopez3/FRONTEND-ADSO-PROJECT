import { Label, TextInput } from "keep-react";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputFieldProps = {
  name: string;
  placeholder: string;
  value?: string;
  id: string;
  type?: string;
  styles?: string;
  colorText?: string;
} & ComponentPropsWithoutRef<"input">;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    {
      name,
      placeholder,
      value,
      id,
      type = "text",
      styles,
      colorText = "black",
    },
    ref
  ) {
    return (
      <div key={id}>
        <Label
          htmlFor={id}
          value={name}
          className={`capitalize text-${colorText} text-base mb-2 ${styles}`}
        />
        <TextInput
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          color="gray"
          type={type}
        />
      </div>
    );
  }
);

export default InputField;
