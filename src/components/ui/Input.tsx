import { Label, TextInput } from "keep-react";
import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  // value: string;
  placeholder: string;
  name: string;
} & ComponentPropsWithoutRef<"input">;

const Input = ({
  id,
  // value,
  placeholder,
  name,
  ...props
}: InputProps) => {
  return (
    <>
      <Label htmlFor={id} value={name} className="capitalize" />
      <TextInput id={id} placeholder={placeholder} color="gray" />
    </>
  );
};

export default Input;
