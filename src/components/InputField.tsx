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
  function InputField(
    { name, type = "text", styles, colorText = "black", ...props },
    ref
  ) {
    const uniqueId = name + (Math.random() * 100).toString();
    return (
      <div key={uniqueId}>
        {type !== "hidden" && (
          <label
            htmlFor={uniqueId}
            className={`font-medium text-sm mt-10 mb-2 capitalize text-${colorText} text-base  ${styles}`}
          >
            {name}
          </label>
        )}
        <input
          className="block w-full py-3 pl-2 pr-4 border border-gray-400 rounded-md outline-none text-sm text-black"
          ref={ref}
          id={uniqueId}
          name={name}
          placeholder={`Enter the ${name}`}
          color="gray"
          type={type}
          {...props}
        />
      </div>
    );
  }
);

export default InputField;
