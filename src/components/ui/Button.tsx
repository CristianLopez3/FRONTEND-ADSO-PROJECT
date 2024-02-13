import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  variant: string;
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
    <button className={variant} {...props}>
      {content}
      {children}
    </button>
  );
}
