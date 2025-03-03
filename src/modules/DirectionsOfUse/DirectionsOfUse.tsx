"use client";
import Image from "next/image";
import React from "react";
import DirectionItem from "./DirectionItem";
import { directionData } from "@/shared/constants";
import DirectionOfUseDesktop from "./DirectionOfUseDesktop";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const DirectionsOfUse = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto sm:px-4 md:px-3 lg:px-6 px-6 pt-[128px] pb-[64px] xl:px-[150px]">
        <div className="flex xxl:hidden flex-col sm:flex-row sm:items-center xxl:flex-row-reverse">
          {/* Текстові блоки */}
          <div className="w-full sm:w-1/2 xxl:w-full sm:pr-8 2xl:pr-0 xxl:flex">
            <div>
              <motion.h2
                custom={0}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[24px] xl:text-[40px] text-dark font-medium uppercase leading-[122%] tracking-[3.2px] md:text-[28px] lg:text-[32px]"
              >
                Напрямки використання RSD Radar
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
          <div className="sm:block sm:w-1/2 xxl:w-[508px] sm:pl-8 mt-[48px] sm:mt-0 flex items-center justify-center 2xl:items-start">
            <motion.div
              custom={7}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/directions/radar-mob.png"
                alt="Radar"
                width={181}
                height={419}
                className="w-full xl:hidden h-auto object-contain"
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
                src="/images/directions/radar-desk.png"
                alt="Radar"
                width={398}
                height={916}
                className="w-full hidden xl:block h-auto object-contain xxl:w-[508px] xxl:h-[622px]"
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
