"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const InnovativeRoadSigns = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -4 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -4,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white">
      <div className="container px-6 md:px-8 mx-auto pt-[128px] pb-[50px] xl:pl-[150px] xxl:pr-[47px] bg-white">
        <div className="xxl:flex xxl:justify-between xxl:items-center">
          <div className="xxl:flex xxl:flex-col">
            <motion.h2
              custom={0} // Перший текстовий елемент
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[24px] font-medium leading-[122%] tracking-[3.2px] uppercase xl:text-[40px]"
            >
              Підвищіть безпеку доріг вашої громади за допомогою RSD Radar.
            </motion.h2>

            <ul className="mt-[48px] xl:mt-[90px] grid grid-cols-1 gap-[48px] xl:gap-[70px] sm:grid-cols-2 xxl:flex xxl:gap-[70px]">
              {[
                {
                  title: "Розроблений відповідно потребам вашої громади",
                  desc: "Для забезпечення безпеки дорожнього руху. Допоможе Вам підвищити безпеку дорожнього руху на дорогах",
                  width: "xxl:w-[311px]",
                },
                {
                  title: "Зменшує швидкість для підвищення безпеки",
                  desc: "Спонукає та заохочує водія дотримуватись встановленої швидкості",
                  width: "xxl:w-[207px]",
                },
                {
                  title: "Формування відповідальності",
                  desc: "Емоційна комунікація, практично, з усіма мешканцями громади – водії, пасажири, пішоходи. Допомагає формувати відчуття відповідальності в громаді до безпеки дорожнього руху.",
                  width: "xxl:w-[230px]",
                },
                {
                  title: "Вимірює та транслює швидкість автомобіля",
                  desc: "Емоційно акцентує увагу водія на його швидкість.",
                  width: "xxl:w-[199px]",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index + 1} // Затримка для кожного пункту списку
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  <h3
                    className={`text-dark text-[16px] md:max-w-[328px] xl:text-[24px] self-stretch font-medium leading-[122%] tracking-[1.92px] ${item.width}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-dark text-[14px] xl:text-[18px] font-light ${item.width}`}
                  >
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/radar-desk.png"
                alt="Radar"
                width={373}
                height={493}
                className="hidden rotate-[-4deg] xxl:block"
              />
            </motion.div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/radar-mob.png"
                alt="Radar"
                width={308}
                height={377}
                className="mt-[72px] rotate-[-4deg] mx-auto xxl:hidden"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeRoadSigns;
