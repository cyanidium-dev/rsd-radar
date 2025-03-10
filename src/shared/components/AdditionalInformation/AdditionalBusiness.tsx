import { easeOutAnimation } from "@/shared/utils/animation";
import { motion } from "framer-motion";

const AdditionalBusiness = () => {
  return (
    <div className="mt-[70px]">
      <motion.h4
        custom={2}
        variants={easeOutAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[24px] mt-[20px] xl:mt-[40px] xl:text-[32px] max-w-[800px] font-extrabold uppercase text-dark"
      >
        RSD RADAR БІЗНЕС виробляється на базі RSD RADAR СТАНДАРТ.
      </motion.h4>

      <ul className=" max-w-[497px] mt-[30px] flex flex-col gap-2">
        {[
          "Індивідуальні налаштування да додаткові функціональні можливості, водповідно потребам вашогот бізнесу, або вашої громади.",
          "Наприклад, підїзди до АЗС, готелів, магазинів, бізнес центрів, тощо.",
          "RSD RADAR БІЗНЕС може включати абонентську плату в залежності від додаткових функціональних можливлсстей якиі будуть встановленені.",
        ].map((item, index) => (
          <motion.li
            key={index}
            custom={index + 1}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-dark text-[14px] xl:text-[18px] flex  items-center"
          >
            {item}
          </motion.li>
        ))}
      </ul>
      {/* Текст */}
    </div>
  );
};

export default AdditionalBusiness;
