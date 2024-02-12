import { type ReactNode, type ComponentPropsWithoutRef } from "react";


const variantStyle = {
  primary: "bg-primary text-black px-4 py-2 rounded hover:scale-105 duration-200",
  secondary: "bg-primary text-white px-4 py-2 rounded hover:scale-105 duration-200"
}

type ButtonProps = {
  variant: 'primary' | 'secondary';
  content: string | number;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;


export default function Button({variant, content, children, ...props}: ButtonProps) {
  return (
    <button className={variantStyle[variant]} {...props} >
      {content}
      {children}
    </button>
  );
}
