"use client";
import RadarListItem from "@/shared/components/RadarListItem/RadarListItem";
import { radarItems } from "@/shared/constants";
import { useState } from "react";
import ContactsModal from "../ContactsModal/ContactsModal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const RadarsModels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <section id="productions" className="models-bg">
      <div className="container mx-auto px-6 pt-[109px] xl:px-[150px] xl:py-[120px]">
        <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
          <div>
            <motion.h2
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-[229px] mx-auto uppercase text-[32px] xl:text-[32px] xl:max-w-full text-white leading-[122%] tracking-[3.2px] font-medium"
            >
              Моделі RSD RADAR
            </motion.h2>

            <div className="mt-[90px] xl:mt-[58px] grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:gap-[20px] mx-auto max-w-[312px] md:max-w-full xl:max-[275px]">
              {radarItems.map((radar, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={easeOutAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-full w-full max-w-[312px] md:max-w-full xl:max-w-[275px] justify-items-stretch flex items-stretch"
                >
                  <RadarListItem
                    title={radar.title}
                    subtitle={radar.subtitle}
                    onOrder={() => setIsModalOpen(true)}
                    onMore={() => router.push(`/${radar.slug}`)}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            custom={3.6}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/images/models/radar-desk.png"
              alt="Radar"
              width={420}
              height={863}
              className="hidden xl:block xl:w-[382px] xl:h-[538px] xxl:h-[769px] xxl:w-[546px]"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        custom={3.6}
        variants={easeOutAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="models-bg_mob pt-[240px] pb-[120px] mt-[-85px] xl:hidden"
      >
        <Image
          src="/images/models/radar-mob.png"
          alt="Radar"
          width={229}
          height={470}
          className="mx-auto  xl:hidden"
        />
      </motion.div>
      {isModalOpen && (
        <ContactsModal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default RadarsModels;
