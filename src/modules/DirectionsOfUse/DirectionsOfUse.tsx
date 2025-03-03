import Image from "next/image";
import React from "react";
import DirectionItem from "./DirectionItem";
import { directionData } from "@/shared/constants";
import DirectionOfUseDesktop from "./DirectionOfUseDesktop";

const DirectionsOfUse = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pt-[128px] pb-[64px] xl:px-[150px]">
        <div className="flex xxl:hidden flex-col sm:flex-row sm:items-center xxl:flex-row-reverse">
          {/* Текстові блоки  */}
          <div className="w-full sm:w-1/2 xxl:w-full sm:pr-8 2xl:pr-0 xxl:flex">
            <div>
              <h2 className="text-[24px] xl:text-[40px] text-dark font-medium uppercase leading-[122%] tracking-[3.2px] md:text-[28px] lg:text-[32px]">
                Напрямки використання RSD Radar
              </h2>
              <div className="mt-[70px] md:mt-[80px] 2xl:mt-[100px]">
                <DirectionItem
                  title={directionData[0].title}
                  text={directionData[0].text}
                />
              </div>
            </div>
            <div className="flex flex-col mt-[48px] gap-[48px] md:gap-[56px] 2xl:gap-[64px]">
              <DirectionItem
                title={directionData[1].title}
                text={directionData[1].text}
              />
              <DirectionItem
                title={directionData[2].title}
                text={directionData[2].text}
              />
            </div>
            <div className="flex flex-col mt-[48px] gap-[48px] md:gap-[56px] 2xl:gap-[64px]">
              <DirectionItem
                title={directionData[3].title}
                text={directionData[3].text}
              />
              <DirectionItem
                title={directionData[4].title}
                text={directionData[4].text}
              />
            </div>
            <div className="flex flex-col mt-[48px] gap-[48px] md:gap-[56px] 2xl:gap-[64px]">
              <DirectionItem
                title={directionData[5].title}
                text={directionData[5].text}
              />
            </div>
          </div>

          {/* Зображення  */}
          <div className="sm:block sm:w-1/2 xxl:w-[508px] sm:pl-8 mt-[48px] sm:mt-0 flex items-center justify-center 2xl:items-start">
            <Image
              src="/images/radar-mob.png"
              alt="Radar"
              width={311}
              height={381}
              className="w-full xl:hidden h-auto object-contain"
            />
            <Image
              src="/images/radar-desk.png"
              alt="Radar"
              width={508}
              height={622}
              className="w-full hidden xl:block h-auto object-contain xxl:w-[508px] xxl:h-[622px]"
            />
          </div>
        </div>
        <div className="hidden xxl:block">
          <DirectionOfUseDesktop />
        </div>
      </div>
    </section>
  );
};

export default DirectionsOfUse;
