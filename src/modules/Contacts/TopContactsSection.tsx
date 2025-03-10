"use client";
import ContactForm from "@/shared/components/ContactForm/ContactForm";
import React from "react";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const TopContactsSection = () => {
  return (
    <section
      id="contacts"
      className="px-[32px] py-[183px] xl:pl-[70px] contacts-bg_first"
    >
      <div className="bg-white py-[36px] px-[26px] xl:px-[95px] xl:py-[65px] rounded-[12px] max-w-[420px] xl:max-w-[653px] xl:mx-0 xl:mr-auto mx-auto">
        <motion.h2
          custom={0}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-dark text-[16px] font-medium uppercase tracking-[3.2px] xl:text-[36px]"
        >
          Маєте запитання щодо RSD Radar?
        </motion.h2>

        <motion.p
          custom={1}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-[16px] text-[14px] text-dark font-light xl:text-[18px]"
        >
          Залиште свої контакти, і наші менеджери зв’яжуться з вами у
          найкоротший час, щоб допомогти з вибором, дати консультацію або
          прийняти замовлення.
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
    </section>
  );
};

export default TopContactsSection;
