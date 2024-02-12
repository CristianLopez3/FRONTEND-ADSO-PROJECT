import { type ReactNode, type ComponentPropsWithoutRef } from "react";

const variantStyle = {
  primary:
    "bg-primary text-black px-4 py-2 rounded hover:scale-105 duration-200",
  secondary:
    "bg-primary text-white px-4 py-2 rounded hover:scale-105 duration-200",
  black:
    "bg-black text-white px-4 py-2 rounded hover:scale-105 duration-200 dark:border-white",
  empty:
    "border bg-transparent mx-2 text-black px-4 py-2 rounded duration-200 dark:text-white",
};

type ButtonProps = {
  variant: "primary" | "secondary" | "black" | "empty";
  content: string | number;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  variant,
  content,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={variantStyle[variant]} {...props}>
      {content}
      {children}
    </button>
  );
}
