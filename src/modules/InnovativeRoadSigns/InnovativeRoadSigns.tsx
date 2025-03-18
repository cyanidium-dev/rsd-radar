"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { useTranslations } from "next-intl";

const InnovativeRoadSigns = () => {
  const t = useTranslations("InnovativeRoadSigns");

  const featuresWidth = [
    "xxl:w-[311px]",
    "xxl:w-[207px]",
    "xxl:w-[230px] xl:w-[230px]",
    "xxl:w-[199px]",
  ];

  const features = Object.values(t.raw("features")).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (feature: any, index) => ({
      title: feature.title,
      desc: feature.desc,
      width: featuresWidth[index],
    })
  );

  return (
    <section id="about-us">
      <div className="container px-6 md:px-8 mx-auto pt-[128px] pb-[50px] xl:pl-[150px] xxl:pr-[150px] bg-dark">
        <div className="xxl:flex xxl:justify-between xxl:items-center">
          <div className="xxl:flex xxl:flex-col">
            <motion.h2
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-[24px] font-medium leading-[122%] tracking-[3.2px] uppercase xl:text-[40px]"
            >
              {t("title")}
            </motion.h2>

            <ul className="mt-[48px] xl:mt-[90px] grid grid-cols-1 gap-[48px] xl:gap-[70px] sm:grid-cols-2 xl:flex xxl:flex xxl:gap-[70px]">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index + 1}
                  variants={easeOutAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  <h3
                    className={`text-white text-[18px] md:max-w-[328px] xl:text-[24px] self-stretch font-medium leading-[122%] tracking-[1.92px] ${item.width}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-white text-[14px] xl:text-[18px] font-light ${item.width}`}
                  >
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.div
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/innovative/radar-desk.webp"
                alt="Radar"
                width={420}
                height={863}
                quality={100}
                className="hidden h-[863px] object-contain  xxl:block"
              />
            </motion.div>
            <motion.div
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/innovative/radar-mob.webp"
                alt="Radar"
                width={229}
                height={470}
                className="mt-[48px] h-[470px] object-contain  mx-auto xxl:hidden"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeRoadSigns;
