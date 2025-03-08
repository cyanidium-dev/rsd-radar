import { IRadarListItemProps } from "@/shared/types";
import Button from "../Button/Button";

const RadarListItem = ({
  title,
  subtitle,
  onOrder,
  onMore,
}: IRadarListItemProps) => {
  return (
    <div className="bg-inherit px-5 py-8 rounded-[8px] border-[2px] border-white flex flex-col gap-6 justify-between">
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-[24px] uppercase font-medium tracking-[1.92px] text-left text-white">
          {title}
        </h3>
        <p className="text-[12px] font-light text-white ">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-[12px]  ">
        <Button
          onClick={onOrder}
          className="h-[40px]"
          variant="white"
          text="Замовити"
        />
        <Button
          onClick={onMore}
          className="h-[40px] border-[1px] border-white shadow-none"
          text="Дізнатись більше"
        />
      </div>
    </div>
  );
};

export default RadarListItem;
