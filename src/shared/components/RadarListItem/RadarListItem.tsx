"use client";
import { IRadarListItemProps } from "@/shared/types";
import Button from "../Button/Button";
import { useTranslations } from "next-intl";

const RadarListItem = ({
  title,
  subtitle,
  onOrder,
  onMore,
  className,
}: IRadarListItemProps) => {
  const t = useTranslations("RadarListItem");

  return (
    <div
      className={`bg-inherit px-5 py-8 rounded-[8px] border-[2px] border-white flex flex-col gap-6 h-full justify-between w-full ${className}`}
    >
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-[24px] uppercase font-medium tracking-[1.92px] text-left text-white">
          {title}
        </h3>
        <p className="text-[14px] xl:text-[18px] font-light text-white">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Button
          onClick={onOrder}
          className="h-[40px] !text-[18px]"
          variant="white"
          text={t("orderButton")}
        />
        <Button
          onClick={onMore}
          className="h-[40px] !text-[18px] border-[1px] border-white shadow-none"
          text={t("moreButton")}
        />
      </div>
    </div>
  );
};

export default RadarListItem;
