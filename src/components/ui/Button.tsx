import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  variant: string;
  content: string | number;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const  Button = ({
  variant,
  content,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={variant} {...props}>
      {content}
      {children}
    </button>
  );
}

export default Button;