"use client";
import ContactForm from "@/shared/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { useTranslations } from "next-intl";

const BotContactsSection = () => {
  const t = useTranslations("TopContactsSection");

  return (
    <section className="contacts-bg_second pt-[192px] pb-[60px]">
      <div className="container px-[32px] mx-auto xl:pl-[150px] xxl:pr-[226px]">
        <div className="md:flex md:items-center md:justify-between">
          <div className="bg-white py-[26px] px-[26px] xl:px-[95px] xl:py-[65px] rounded-[12px] max-w-[420px] xl:max-w-[653px] xl:mx-0 xl:mr-auto md:mx-0 mx-auto">
            <motion.h2
              custom={0}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[18px] font-medium uppercase tracking-[3.2px] xl:text-[36px]"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              custom={1}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-[16px] text-[14px] text-dark font-light xl:text-[18px]"
            >
              {t("description")}
            </motion.p>
            <motion.div
              custom={2}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-[20px]"
            >
              <ContactForm formClassName="mt-0" variant="white" />
            </motion.div>
          </div>
          <motion.div
            custom={3}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:ml-auto"
          >
            <Image
              src="/images/bot-contacts/radar-mob.webp"
              alt="Radar"
              width={229}
              height={470}
              className="xl:hidden h-[470px] object-contain mx-auto mt-[73px] md:mt-0 md:mx-0"
            />
          </motion.div>
          <motion.div
            custom={3}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/images/bot-contacts/radar-desk.webp"
              alt="Radar"
              width={420}
              height={863}
              className="hidden xl:block h-[863px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BotContactsSection;
