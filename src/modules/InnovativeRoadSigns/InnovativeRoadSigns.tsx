"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { useTranslations } from "next-intl";

const InnovativeRoadSigns = () => {
  const t = useTranslations("InnovativeRoadSigns");

  const featuresWidth = [
    "xxl:w-[311px] xl:w-[220px]",
    "xxl:w-[207px] xl:w-[170px]",
    "xxl:w-[230px] xl:w-[210px]",
    "xxl:w-[199px] xl:w-[140px]",
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
      <div className="container px-6 md:px-8 mx-auto pt-[80px] pb-[40px] xl:pl-[80px] xl:pr-[80px] xxl:pl-[150px] xxl:pr-[150px] bg-dark">
        <div className="xl:flex xl:justify-between xl:items-center xxl:flex xxl:justify-between xxl:items-center">
          <div className="xl:flex xl:flex-col xxl:flex xxl:flex-col">
            <motion.h2
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-[24px] font-medium leading-[122%] tracking-[3.2px] uppercase xl:text-[32px] xxl:text-[40px]"
            >
              {t("title")}
            </motion.h2>

            <ul className="mt-[48px] xl:mt-[60px] xxl:mt-[90px] grid grid-cols-1 gap-[48px] sm:grid-cols-2 xl:flex xl:gap-[50px] xxl:flex xxl:gap-[70px]">
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
                    className={`text-white text-[18px] xl:text-[20px] xxl:text-[24px] self-stretch font-medium leading-[122%] tracking-[1.92px] ${item.width}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-white text-[14px] xl:text-[16px] xxl:text-[18px] font-light ${item.width}`}
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
                width={350}
                height={720}
                quality={100}
                className="hidden h-[720px] xl:w-[250px] xl:h-[520px] object-contain xl:block xxl:h-[863px] xxl:w-[420px]"
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
                className="mt-[48px] h-[470px] object-contain mx-auto xl:hidden"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeRoadSigns;
