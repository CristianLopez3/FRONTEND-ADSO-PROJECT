import { Label, TextInput } from "keep-react";

type InputFieldProps = {
  name: string;
  placeholder: string;
  value?: string;
  id: string;
  type?: string;
  styles?: string;
};

const InputField = ({
  name,
  placeholder,
  value,
  id,
  type = "text",
  styles,
}: InputFieldProps) => {

  return (
    <div key={id}>
      <Label
        htmlFor={id}
        value={name}
        className={`text-base text-secondary mb-2 ${styles}`}
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
};

export default InputField;
