import { ISvgIconProps } from "@/shared/types/props.types";
import React from "react";

export const BurgerOpenIcon = ({
  color,
  className,
  ...props
}: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill={color}
      className={className}
      {...props}
    >
      <path
        d="M2 7H29M2 16H29M2 25H29"
        stroke="#18181B"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BurgerCloseIcon = ({
  color,
  className,
  ...props
}: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill={color}
      className={className}
      {...props}
    >
      <path
        d="M16.0003 2.66667C8.65366 2.66667 2.66699 8.65334 2.66699 16C2.66699 23.3467 8.65366 29.3333 16.0003 29.3333C23.347 29.3333 29.3337 23.3467 29.3337 16C29.3337 8.65334 23.347 2.66667 16.0003 2.66667ZM20.4803 19.0667C20.867 19.4533 20.867 20.0933 20.4803 20.48C20.2803 20.68 20.027 20.7733 19.7737 20.7733C19.5203 20.7733 19.267 20.68 19.067 20.48L16.0003 17.4133L12.9337 20.48C12.7337 20.68 12.4803 20.7733 12.227 20.7733C11.9737 20.7733 11.7203 20.68 11.5203 20.48C11.1337 20.0933 11.1337 19.4533 11.5203 19.0667L14.587 16L11.5203 12.9333C11.1337 12.5467 11.1337 11.9067 11.5203 11.52C11.907 11.1333 12.547 11.1333 12.9337 11.52L16.0003 14.5867L19.067 11.52C19.4537 11.1333 20.0937 11.1333 20.4803 11.52C20.867 11.9067 20.867 12.5467 20.4803 12.9333L17.4137 16L20.4803 19.0667Z"
        fill={color}
      />
    </svg>
  );
};
