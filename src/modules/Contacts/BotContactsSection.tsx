"use client";
import ContactForm from "@/shared/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const BotContactsSection = () => {
  return (
    <section className="contacts-bg_second pt-[192px] pb-[60px]">
      <div className="container px-[32px] mx-auto xl:px-[150px]">
        <div className="md:flex md:items-center md:justify-between">
          <div className="bg-white py-[26px] px-[26px] xl:px-[95px] xl:py-[65px] rounded-[12px] max-w-[420px] xl:max-w-[653px] xl:mx-0 xl:mr-auto md:mx-0 mx-auto">
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
          <motion.div
            custom={3}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/images/radar-second-mob.png"
              alt="Radar"
              width={264}
              height={371}
              className="xl:hidden mx-auto mt-[73px] md:mt-0 md:mx-0"
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
              src="/images/radar-second-desk.png"
              alt="Radar"
              width={346}
              height={469}
              className="hidden xl:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BotContactsSection;
