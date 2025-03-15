"use client";
import ContactsModal from "@/modules/ContactsModal/ContactsModal";
import Button from "@/shared/components/Button/Button";
import { radarData, radarItems, screenData } from "@/shared/constants";
import { RadarPageProps } from "@/shared/types";
import Image from "next/image";
import React, { useState } from "react";
import { CircleIcon } from "../../../public/images/icons";
import { Table } from "@/shared/components/Table/Table";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";
import AdditionalPlus from "@/shared/components/AdditionalInformation/AdditionalPlus";
import AdditionalBusiness from "@/shared/components/AdditionalInformation/AdditionalBusiness";
import AdditionalIndividual from "@/shared/components/AdditionalInformation/AdditionalIndividual";

export default function RadarInfoPage({ params }: RadarPageProps) {
  const { slug } = React.use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentRadar = radarItems.find((radar) => radar.slug === slug);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="bg-white">
      <div className="radar-bg_hero pt-[86px] pb-[93px] md:py-[53px]">
        <Image
          src="/images/hero/radar-mob.webp"
          alt="Radar"
          width={229}
          height={470}
          className="mx-auto w-[229px] h-[470px] object-contain md:hidden"
        />
        <Image
          src="/images/hero/radar-desk.webp"
          alt="Radar"
          width={420}
          height={463}
          className="mx-auto w-[420px]  h-[463px] object-contain hidden md:block"
        />
      </div>

      <div className="container mx-auto px-[24px] pt-[70px] pb-[128px] xl:px-[150px]">
        <motion.div
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:flex md:justify-between gap-[40px] md:items-start "
        >
          <div className="flex flex-col gap-[14px]  ">
            <motion.p
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[20px] xl:text-[24px] text-dark xl:hidden"
            >
              Гарантія 1 рік.
            </motion.p>
            <motion.h2
              custom={1}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[32px] xl:text-[48px] font-extrabold uppercase text-dark"
            >
              {currentRadar?.title}
            </motion.h2>
            <motion.div
              custom={2}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-between "
            >
              <p className="text-[20px] xl:text-[24px] text-dark">
                Вироблено в Україні
              </p>
              <motion.p
                custom={3}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[20px] xl:text-[24px] text-dark hidden xl:block"
              >
                Гарантія 1 рік.
              </motion.p>
            </motion.div>
            {slug === "rsd-radar-standard" && (
              <motion.div
                custom={5}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-between text-[20px] xl:text-[24px] font-bold text-dark max-w-[280px] md:max-w-full"
              >
                <p>Вартість</p>
                <span>10,00 ₴ без ПДВ</span>
              </motion.div>
            )}
            <motion.div
              custom={6}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className="h-[40px] w-[235px] mt-[14px]"
                text="Замовити"
              />
            </motion.div>
          </div>
          <motion.p
            custom={7}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-[42px] md:mt-0 text-[14px]  xl:text-[18px] text-dark font-light md:max-w-[300px]   lg:max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px]"
          >
            Сучасні світлодіодні дисплеї з високою якістю зображення. Підсилює
            кольором реакцію емоцію на швидкість. Забезпечує чіткі та зрозумілі
            повідомлення водію, щодо швидкості його автомобіля та встановленої
            безпечної швидкості.
          </motion.p>
        </motion.div>
        {slug === "rsd-radar-plus" && <AdditionalPlus />}
        {slug === "rsd-radar-for-business" && <AdditionalBusiness />}
        {slug === "rsd-radar-individual" && <AdditionalIndividual />}
        <motion.div
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:mt-[80px] sm:flex-row sm:justify-between"
        >
          <div className="mt-[70px] sm:mt-0 sm:max-w-[250px] md:max-w-[330px] xl:max-w-[497px]">
            <motion.h2
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[24px] xl:text-[32px] font-extrabold uppercase"
            >
              Розташування RSD Radar для його ефективного використання
            </motion.h2>
            <ul className="flex flex-col gap-[18px] mt-[18px]">
              <motion.li
                custom={1}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-dark text-[14px] xl:text-[18px] flex gap-[12px] items-center"
              >
                <span>
                  <CircleIcon className="w-[14px] h-[14px]" />
                </span>
                <p>
                  Встановлюється з правого боку дороги – у напрямку до руху.
                </p>
              </motion.li>

              <motion.li
                custom={2}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-dark text-[14px] xl:text-[18px] flex gap-[12px] items-center"
              >
                <span>
                  <CircleIcon className="w-[14px] h-[14px]" />
                </span>
                <p>
                  Закріплюється на висоті не менше 2.5 метра над рівнем
                  дорожнього покриття
                </p>
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-col gap-[18px] mt-[70px] sm:mt-0 sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px]">
            <motion.h2
              custom={3}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[24px] xl:text-[32px] font-extrabold uppercase"
            >
              Монтаж
            </motion.h2>
            <motion.p
              custom={4}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[14px] flex flex-col xl:text-[18px] font-light"
            >
              <span>
                В комплект входять стандартні монтажні кріплення. RSD RADAR
                легко встановлюється на існуючі стовпи (наприклад, освітлення
                або електромережі) за допомогою стандартних монтажних кріплень.
              </span>
              <span>
                Для підключення достатньо під&apos;єднати пристрій до постійного
                джерела електроживлення
              </span>
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-[70px] flex flex-col gap-[70px] md:flex-row md:justify-between"
        >
          <div className="flex flex-col gap-[30px] justify-start items-start xl:min-w-[497px]">
            <motion.h2
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[32px] font-extrabold uppercase"
            >
              Характеристика екрану
            </motion.h2>
            <motion.div
              custom={1}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Table data={screenData} />
            </motion.div>
          </div>
          <div className="flex flex-col md:max-w-[300px] lg:max-w-[400px]  gap-[30px] xl:max-w-[491px] 2xl:max-w-[600px]">
            <motion.h2
              custom={2}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[32px] font-extrabold uppercase"
            >
              Характеристика радару
            </motion.h2>
            <motion.div
              custom={3}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Table variant="radar" data={radarData} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <ContactsModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
