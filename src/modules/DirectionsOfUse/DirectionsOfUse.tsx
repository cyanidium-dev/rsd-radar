"use client";
import Image from "next/image";
import React from "react";
import DirectionItem from "./DirectionItem";
import DirectionOfUseDesktop from "./DirectionOfUseDesktop";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { IDirectionData } from "@/shared/types";
import { useTranslations } from "next-intl";

const DirectionsOfUse = () => {
  const t = useTranslations("DirectionsOfUse");

  const directionData = Object.values(t.raw("items")) as IDirectionData[];
  return (
    <section id="directions" className="bg-white">
      <div className="container mx-auto sm:px-4 md:px-3 lg:px-6 px-6 pt-[128px] pb-[64px] xl:px-[150px]">
        <div className="flex xxl:hidden flex-col sm:flex-row sm:items-center">
          {/* Текстові блоки */}
          <div className="w-full  sm:pr-8 2xl:pr-0 ">
            <div>
              <motion.h2
                custom={0}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[24px] xl:text-[40px] text-dark font-medium uppercase leading-[122%] tracking-[3.2px] md:text-[28px] lg:text-[32px]"
              >
                {t("title")}
              </motion.h2>

              <div className="mt-[70px] md:mt-[80px] 2xl:mt-[100px]">
                <motion.div
                  custom={1}
                  variants={easeOutAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <DirectionItem
                    title={directionData[0].title}
                    text={directionData[0].text}
                  />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col mt-[48px] gap-[48px] md:gap-[56px] 2xl:gap-[64px]">
              <motion.div
                custom={2}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <DirectionItem
                  title={directionData[1].title}
                  text={directionData[1].text}
                />
              </motion.div>
              <motion.div
                custom={3}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <DirectionItem
                  title={directionData[2].title}
                  text={directionData[2].text}
                />
              </motion.div>
            </div>

            <div className="flex flex-col mt-[48px] gap-[48px] md:gap-[56px] 2xl:gap-[64px]">
              <motion.div
                custom={4}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <DirectionItem
                  title={directionData[3].title}
                  text={directionData[3].text}
                />
              </motion.div>
              <motion.div
                custom={5}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <DirectionItem
                  title={directionData[4].title}
                  text={directionData[4].text}
                />
              </motion.div>
            </div>

            <div className="flex flex-col mt-[48px] gap-[48px] md:gap-[56px] 2xl:gap-[64px]">
              <motion.div
                custom={6}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <DirectionItem
                  title={directionData[5].title}
                  text={directionData[5].text}
                />
              </motion.div>
            </div>
          </div>

          {/* Зображення */}
          <div className="sm:block sm:w-1/2 sm:ml-auto mt-[48px] sm:mt-0 flex items-center justify-center 2xl:items-end">
            <motion.div
              custom={7}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/directions/radar-mob.webp"
                alt="Radar"
                width={229}
                height={470}
                className="xl:hidden object-contain ml-auto h-[470px]"
              />
            </motion.div>
            <motion.div
              custom={7}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/directions/radar-desk.webp"
                alt="Radar"
                width={420}
                height={863}
                className=" hidden xl:block w-[420px] h-[863px]  object-contain "
              />
            </motion.div>
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
