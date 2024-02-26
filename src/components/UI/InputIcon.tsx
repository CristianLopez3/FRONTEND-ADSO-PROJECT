import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";

type InputIconProps = {
  placeholder: string;
  name: string;
  id: string;
  type: "text" | "email" | "password";
  icon: ReactNode;
  styles?: string;
} & ComponentPropsWithoutRef<"input">;

const InputIcon = ({
  placeholder,
  name,
  id,
  type,
  icon,
  styles,
  ...props
}: InputIconProps) => {
  return (
    <div className={`${styles} flex items-center border-b bg-transparent`}>
      <span className="p-2  border-grayLight flex items-center">{icon}</span>
      <input
        className="w-full bg-transparent  pl-3 text-left outline-none"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputIcon;
