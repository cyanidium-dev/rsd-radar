import Image from "next/image";
import React from "react";
import DirectionItem from "./DirectionItem";
import { directionData } from "@/shared/constants";

const DirectionOfUseDesktop = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/radar-desk.png"
        alt="Radar"
        width={508}
        height={622}
      />
      <div className="ml-[65px]">
        <h2 className="text-[40px] w-[402px]  text-dark font-medium uppercase leading-[122%] tracking-[3.2px] ">
          Напрямки використання RSD Radar
        </h2>
        <DirectionItem
          className="mt-[32px]"
          titleClassName="w-[253px]"
          textClassName="w-[290px]"
          title={directionData[0].title}
          text={directionData[0].text}
        />
        <DirectionItem
          className="mt-[30px]"
          titleClassName="w-[153px]"
          textClassName="w-[290px]"
          title={directionData[5].title}
          text={directionData[5].text}
        />
      </div>
      <div className="ml-[130px]">
        <div className="flex gap-[92px]">
          <DirectionItem
            titleClassName="w-[170px]"
            textClassName="w-[170px]"
            title={directionData[1].title}
            text={directionData[1].text}
          />
          <DirectionItem
            titleClassName="w-[167px]"
            textClassName="w-[199px]"
            title={directionData[2].title}
            text={directionData[2].text}
          />
        </div>
        <div className="flex gap-[42px] mt-[60px]">
          <DirectionItem
            titleClassName="w-[221px]"
            textClassName="w-[220px]"
            title={directionData[3].title}
            text={directionData[3].text}
          />
          <DirectionItem
            titleClassName="w-[183px]"
            textClassName="w-[199px]"
            title={directionData[4].title}
            text={directionData[4].text}
          />
        </div>
      </div>
    </div>
  );
};

export default DirectionOfUseDesktop;
