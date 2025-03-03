import { IButtonProps } from "@/shared/types";
import clsx from "clsx";

const Button = ({
  variant = "black",
  text,
  className,
  onClick,
  ...props
}: IButtonProps) => {
  const variantStyle = clsx(
    variant === "black" ? "bg-dark text-white btn-shadow" : "bg-white text-dark"
  );
  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx("btn-primary", variantStyle, className)}
    >
      {text}
    </button>
  );
};

export default Button;
