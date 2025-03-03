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
          src="/images/radar-page_radar-mob.png"
          alt="Radar"
          width={187}
          height={381}
          className="mx-auto md:hidden"
        />
        <Image
          src="/images/radar-page_radar-desk.png"
          alt="Radar"
          width={359}
          height={747}
          className="mx-auto hidden md:block"
        />
      </div>
      <div className="container mx-auto px-[24px] pt-[70px] pb-[128px] xl:px-[150px]">
        <motion.div
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:flex sm:justify-between sm:items-start"
        >
          <div className="flex flex-col gap-[14px] xl:max-w-[497px] xxl:max-w-[609px]">
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
            <motion.div
              custom={4}
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
            custom={5}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-[42px] sm:mt-0 text-[14px] xl:text-[18px] text-dark font-light sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px]"
          >
            Radar використовує сучасні світлодіодні дисплеї з високою якістю
            зображення. Що дозволяє підсилити кольором емоцію реакції смайла на
            швидкість Забезпечить чіткі та зрозумілі повідомлення водію, щодо
            його швидкості та безпечної швидкості.
          </motion.p>
        </motion.div>
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
                <p>Закріплюється на висоті не менше 2.5 метра над землею.</p>
              </motion.li>
              <motion.li
                custom={2}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-dark text-[14px] xl:text-[18px] flex gap-[12px] items-center"
              >
                <CircleIcon className="w-[14px] h-[14px]" />
                <p>Перпендикулярно до осі дороги.</p>
              </motion.li>
              <motion.li
                custom={3}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-dark text-[14px] xl:text-[18px] flex gap-[12px] items-center"
              >
                <span>
                  <CircleIcon className="w-[14px] h-[14px]" />
                </span>
                <p>Встановлюється з правого боку дороги – у напрямку руху.</p>
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-col gap-[18px] mt-[70px] sm:mt-0 sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px]">
            <motion.h2
              custom={4}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[24px] xl:text-[32px] font-extrabold uppercase"
            >
              Монтаж
            </motion.h2>
            <motion.p
              custom={5}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[14px] xl:text-[18px] font-light"
            >
              В комплект входять стандартні монтажні кріплення. ЕмОніК легко
              встановлюється на існуючі стовпи (наприклад, освітлення або
              електромережі) за допомогою стандартних монтажних кріплень. Для
              підключення достатньо під&apos;єднати пристрій до постійного
              джерела електроживлення (з підключенням до мережі або через
              розетку).
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-[70px] flex flex-col gap-[70px] xl:flex-row xl:justify-between"
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
          <div className="flex flex-col gap-[30px] xl:max-w-[491px] 2xl:max-w-[500px]">
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
