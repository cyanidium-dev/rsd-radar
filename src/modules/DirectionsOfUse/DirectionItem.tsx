import { IDirectionItemProps } from "@/shared/types";
import clsx from "clsx";
import React from "react";

const DirectionItem = ({
  title,
  text,
  className,
  titleClassName,
  textClassName,
  ...props
}: IDirectionItemProps) => {
  return (
    <div className={clsx("flex flex-col gap-4", className)} {...props}>
      <h3
        className={clsx(
          "self-stretch text-[16px] text-dark font-medium leading-[122%] tracking-[1.92px] xl:text-[24px]",
          titleClassName
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "text-[14px] xl:text-[18px] text-dark font-light ",
          textClassName
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default DirectionItem;
