"use client";
import React from "react";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const Advantages = () => {
  return (
    <section className="bg-white">
      <div
        id="advantages"
        className="container bg-white mx-auto px-6 py-[87px] md:px-8 lg:px-12 xl:pl-[96px] xxl:pr-[220px] xl:pt-[180px]"
      >
        <div className="border-l-[2px] border-[#A1A1AA] pl-[18px] md:pl-[24px] xl:pl-[54px] sm:py-[5px]">
          <motion.h2
            custom={0}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-dark text-[16px] tracking-[2.24px] md:text-[18px] lg:text-[20px]"
          >
            RSD Radar
          </motion.h2>

          <motion.h3
            custom={1}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-[30px] uppercase text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] xl:leading-[108%] xl:tracking-[3.2px] font-medium text-dark leading-[180%] tracking-[3.2px]"
          >
            Наші переваги
          </motion.h3>

          <motion.h4
            custom={2}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-dark font-medium leading-[240%] tracking-[1.92px] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] xl:leading-[180%]"
          >
            Вироблено в Україні
          </motion.h4>

          <ul className="pl-3 sm:pl-0 mt-[48px] md:mt-[56px] xl:mt-[64px] grid grid-cols-1 sm:grid-cols-2 sm:items-baseline md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-[48px] md:gap-[56px] lg:gap-[64px] xxl:gap-[84px]">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.li
                key={index}
                custom={index + 3}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-2 max-w-[243px] sm:max-w-[250px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[398px]"
              >
                <h5 className="text-dark text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium leading-[122%] tracking-[1.92px]">
                  {
                    [
                      "Емоційна взаємодія",
                      "Сучасні світлодіодні дисплеї з високою якістю зображення.",
                      "Найбільший розмір екрану.",
                      "Легкість мотражу та підключення.",
                    ][index]
                  }
                </h5>
                <p className="text-dark text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-light leading-[122%]">
                  {
                    [
                      "Унікальна емоційна взаємодія",
                      "Інтерактивні, динамічні, чіткі та зрозумілі емоційні повідомлення водію, щодо швидкості його автомобіля.",
                      "Найбільший розмір екрану серед існуючи на ринку - 1280 x 640мм.",
                    ][index]
                  }
                </p>
                {index === 0 && (
                  <h5 className="text-dark text-[16px] mt-[56px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium leading-[122%] tracking-[1.92px]">
                    Гарантія та сервіс
                  </h5>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
