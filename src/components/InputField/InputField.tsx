import {
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";

type InputFieldProps = {
  type?: string;
  styles?: string;
  colorText?: string;
} & ComponentPropsWithoutRef<"input"> &
  InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ name, type = "text", ...props }, ref) {
    const uniqueId = name + (Math.random() * 100).toString();
    return (
      <div className="py-2">
        <input
          className="block w-full py-3 pl-1 pr-4 border-b border-gray-400 outline-none text-sm text-black"
          ref={ref}
          id={uniqueId}
          name={name}
          placeholder={`${name}`}
          color="gray"
          type={type}
          {...props}
        />
      </div>
    );
  }
);

export default InputField;
