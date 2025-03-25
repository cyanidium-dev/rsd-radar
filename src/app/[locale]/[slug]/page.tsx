"use client";
import ContactsModal from "@/modules/ContactsModal/ContactsModal";
import Button from "@/shared/components/Button/Button";
import { IPrice, IRowData, RadarItem, RadarPageProps } from "@/shared/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CircleIcon } from "../../../../public/images/icons";
import { Table } from "@/shared/components/Table/Table";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation/animation";
import AdditionalPlus from "@/shared/components/AdditionalInformation/AdditionalPlus";
import AdditionalBusiness from "@/shared/components/AdditionalInformation/AdditionalBusiness";
import AdditionalIndividual from "@/shared/components/AdditionalInformation/AdditionalIndividual";
import { useFormatter, useTranslations } from "next-intl";
import { fetchSiteData } from "@/shared/utils/dotacms";
import { usePathname } from "next/navigation";

export default function RadarInfoPage({ params }: RadarPageProps) {
  const { slug } = React.use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState<null | IPrice>(null);
  const pathName = usePathname();
  const lang = pathName.split("/")[1];
  const format = useFormatter();

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const { price } = await fetchSiteData();
        setPrice(price);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };
    fetchPrice();
  }, []);
  const t = useTranslations("RadarInfoPage");
  const radarItems = Object.values(t.raw("items")) as RadarItem[];
  const currentRadar = radarItems.find((radar) => radar.slug === slug);
  const screenData = t.raw("screenSpecs.data") as IRowData[];
  const radarData = t.raw("radarSpecs.data") as IRowData[];

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white">
      <div className="radar-bg_hero pt-[20px] pb-[20px] md:pt-[30px] md:pb-[30px] h-[calc(70svh-72px)] md:h-[calc(70svh-88px)] flex items-center justify-center overflow-y-auto">
        <div className="relative w-full h-[40vh] md:h-[45vh] xl:h-[50vh] flex items-center justify-center">
          <Image
            src="/images/hero/radar-mob.webp"
            alt="Radar"
            fill
            className="md:hidden object-contain"
            sizes="(max-width: 768px) 229px, 420px"
            priority
          />
          <Image
            src="/images/hero/radar-desk.webp"
            alt="Radar"
            fill
            className="hidden md:block object-contain"
            sizes="(min-width: 768px) 420px, 229px"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-[24px] pt-[70px] pb-[128px] xl:px-[150px]">
        <motion.div
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:flex md:justify-between gap-[40px] md:items-start"
        >
          <div className="flex flex-col gap-[14px]">
            <motion.p
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[20px] xl:text-[24px] text-dark xl:hidden"
            >
              {t("warranty")}
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
              className="flex justify-between"
            >
              <p className="text-[20px] xl:text-[24px] text-dark">
                {t("madeInUkraine")}
              </p>
              <motion.p
                custom={3}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[20px] xl:text-[24px] text-dark hidden xl:block"
              >
                {t("warranty")}
              </motion.p>
            </motion.div>
            {slug === "rsd-radar-standard" && (
              <motion.div
                custom={5}
                variants={easeOutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-between gap-[10px] text-[20px] xl:text-[24px] font-bold text-dark max-w-[320px] md:max-w-full"
              >
                {lang === "uk" && price !== null ? (
                  <p>Вартість</p>
                ) : (
                  <p>Price</p>
                )}
                {lang === "uk" && price !== null ? (
                  <span>
                    {format.number(price.uahPrice as number, {
                      style: "currency",
                      currency: "UAH",
                    })}{" "}
                    без ПДВ
                  </span>
                ) : (
                  <span>
                    {format.number(price?.eurPrice as number, {
                      style: "currency",
                      currency: "EUR",
                    })}{" "}
                    excl. VAT
                  </span>
                )}
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
                text={t("orderButton")}
              />
            </motion.div>
          </div>
          <motion.p
            custom={7}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-[42px] md:mt-0 text-[14px] xl:text-[18px] text-dark font-light md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px]"
          >
            {t("description")}
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
              {t("location.title")}
            </motion.h2>
            <ul className="flex flex-col gap-[18px] mt-[18px]">
              {t.raw("location.items").map((item: string, index: number) => (
                <motion.li
                  key={index}
                  custom={index + 1}
                  variants={easeOutAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-dark text-[14px] xl:text-[18px] flex gap-[12px] items-center"
                >
                  <span>
                    <CircleIcon className="w-[14px] h-[14px]" />
                  </span>
                  <p>{item}</p>
                </motion.li>
              ))}
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
              {t("installation.title")}
            </motion.h2>
            <motion.p
              custom={4}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[14px] flex flex-col xl:text-[18px] font-light"
            >
              {t
                .raw("installation.description")
                .map((line: string, index: number) => (
                  <span key={index}>{line}</span>
                ))}
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
              {t("screenSpecs.title")}
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
          <div className="flex flex-col md:max-w-[300px] lg:max-w-[400px] gap-[30px] xl:max-w-[491px] 2xl:max-w-[600px]">
            <motion.h2
              custom={2}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[32px] font-extrabold uppercase"
            >
              {t("radarSpecs.title")}
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
