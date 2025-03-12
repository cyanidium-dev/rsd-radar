"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const InnovativeRoadSigns = () => {
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
              Інноваційне дорожнє табло RSD-Radar
            </motion.h2>

            <ul className="mt-[48px] xl:mt-[90px] grid grid-cols-1 gap-[48px] xl:gap-[70px] sm:grid-cols-2 xl:flex xxl:flex xxl:gap-[70px]">
              {[
                {
                  title: "Розроблений відповідно потребам вашої громади",
                  desc: "Для забезпечення безпеки дорожнього руху. Допоможе Вам підвищити безпеку дорожнього руху на дорогах",
                  width: "xxl:w-[311px]",
                },
                {
                  title: "Дотримання встановленої швидкості",
                  desc: "Спонукає та заохочує водія дотримуватись встановленої швидкості",
                  width: "xxl:w-[207px]",
                },
                {
                  title: "Формування відповідальності",
                  desc: "Емоційна комунікація, практично, з усіма мешканцями громади – водії, пасажири, пішоходи. Допомагає формувати відчуття відповідальності в громаді до безпеки дорожнього руху.",
                  width: "xxl:w-[230px] xl:w-[230px]",
                },
                {
                  title: "Вимірює та транслює швидкість автомобіля",
                  desc: "Акцентує увагу водія на поточному швидкісному режимі.",
                  width: "xxl:w-[199px]",
                },
              ].map((item, index) => (
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
                src="/images/innovative/radar-desk-second.png"
                alt="Radar"
                width={420}
                height={863}
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
                src="/images/innovative/radar-mob-second.png"
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
