import { ISvgIconProps } from "@/shared/types";

export const CircleIcon = ({ color, className, ...props }: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill={color}
      className={className}
      {...props}
    >
      <circle cx="7" cy="7" r="7" fill="black" />
    </svg>
  );
};
