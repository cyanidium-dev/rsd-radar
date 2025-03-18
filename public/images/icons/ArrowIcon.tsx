import { ISvgIconProps } from "@/shared/types";

export const ArrowIcon = ({ className, ...props }: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M9.96004 4.47501L6.70004 7.73501C6.00004 8.43501 6.00004 8.435 5.30004 7.73501L2.04004 4.47501"
        stroke="#18181B"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
