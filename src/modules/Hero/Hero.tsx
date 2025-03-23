"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="px-[42px] pt-[0px] pb-[111px] hero-bg xl:pb-[28px] xl:pt-[77px]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/hero/radar-mob.webp"
          alt="Radar"
          width={229}
          height={470}
          className="xl:hidden"
        />
        <Image
          alt="Radar"
          className="hidden xl:block"
          src="/images/hero/radar-desk.webp"
          width={280}
          height={575}
        />

        <motion.h1
          custom={0}
          viewport={{ once: true }}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          className=" text-white text-[36px] font-extrabold leading-[150%] text-center tracking-[4.12px] uppercase xl:text-[64px] mt-10"
        >
          RSD Radar
        </motion.h1>

        <motion.h2
          custom={1}
          viewport={{ once: true }}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          className="mt-[10px] text-center text-white leading-[150%] tracking-[5.12px] self-stretch font-medium text-[18px] uppercase xl:text-[24px]"
        >
          Road Safety device
        </motion.h2>

        <motion.p
          custom={2}
          viewport={{ once: true }}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-white text-center mx-auto text-[18px] mt-[31px] leading-[122%] tracking-[1.2px] max-w-[238px] self-stretch xl:text-[24px] xl:max-w-[642px]"
        >
          {t("description")}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
