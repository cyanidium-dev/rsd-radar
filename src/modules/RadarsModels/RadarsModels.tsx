"use client";
import RadarListItem from "@/shared/components/RadarListItem/RadarListItem";
import { radarItems } from "@/shared/constants";
import { useState } from "react";
import ContactsModal from "../ContactsModal/ContactsModal";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RadarsModels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  return (
    <section className=" models-bg ">
      <div className="container mx-auto px-6 pt-[109px] xl:px-[150px] xl:py-[120px]">
        <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
          <div>
            <h2 className="text-center max-w-[229px] mx-auto uppercase text-[32px] xl:text-[32px] xl:max-w-full text-white leading-[122%] tracking-[3.2px] font-medium">
              Моделі RSD RADAR
            </h2>
            <div className="mt-[90px] xl:mt-[58px] grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:gap-[20px] mx-auto max-w-[312px] md:max-w-full xl:max-[275px]">
              {radarItems.map((radar, index) => (
                <div
                  className="h-full w-full max-w-[312px] md:max-w-full  xl:max-w-[275px]  justify-items-stretch flex items-stretch"
                  key={index}
                >
                  <RadarListItem
                    title={radar.title}
                    subtitle={radar.subtitle}
                    onOrder={() => setIsModalOpen(true)}
                    onMore={() => router.push(`/${radar.slug}`)}
                  />
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/radar-second-mob.png"
            alt="Radar"
            width={283}
            height={398}
            className="mx-auto mt-[136px] xl:hidden"
          />
          <Image
            src="/images/radar-second-desk.png"
            alt="Radar"
            width={546}
            height={769}
            className="hidden xl:block xl:w-[382px] xl:h-[538px] xxl:h-[769px] xxl:w-[546px]"
          />
        </div>
      </div>
      {isModalOpen && (
        <ContactsModal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default RadarsModels;
