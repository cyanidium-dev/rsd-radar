"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="px-[42px] pt-[20px] pb-[40px] hero-bg xl:pt-[40px] xl:pb-[20px] h-[calc(100svh-72px)] xl:h-[calc(100svh-88px)] flex flex-col justify-center items-center overflow-y-auto">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="relative w-full h-[40vh] md:h-[45vh] xl:h-[50vh] flex items-center justify-center">
          <Image
            src="/images/hero/radar-mob.webp"
            alt="Radar"
            fill
            className="xl:hidden object-contain"
            sizes="(max-width: 1280px) 229px, 280px"
            priority
          />
          <Image
            alt="Radar"
            className="hidden xl:block object-contain"
            src="/images/hero/radar-desk.webp"
            fill
            sizes="(min-width: 1280px) 280px, 229px"
            priority
          />
        </div>

        <div className="flex flex-col items-center mt-4 xl:mt-6">
          <motion.h1
            custom={0}
            viewport={{ once: true }}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            className="text-white text-[32px] md:text-[36px] font-extrabold leading-[150%] text-center tracking-[4.12px] uppercase xl:text-[64px]"
          >
            RSD Radar
          </motion.h1>

          <motion.h2
            custom={1}
            viewport={{ once: true }}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            className="mt-[8px] text-center text-white leading-[150%] tracking-[5.12px] font-medium text-[16px] md:text-[18px] uppercase xl:text-[24px] xl:mt-[12px]"
          >
            Road Safety device
          </motion.h2>

          <motion.p
            custom={2}
            viewport={{ once: true }}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            className="text-white text-center mx-auto text-[14px] md:text-[16px] mt-[16px] leading-[122%] tracking-[1.2px] max-w-[238px] md:max-w-[338px] lg:max-w-[439px] xl:text-[24px] xl:max-w-[642px] xl:mt-[24px]"
          >
            {t("description")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
