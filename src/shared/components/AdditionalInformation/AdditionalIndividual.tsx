import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AdditionalIndividual = () => {
  const t = useTranslations("AdditionalIndividual");

  return (
    <div className="mt-[70px]">
      <motion.h4
        custom={2}
        variants={easeOutAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[24px] flex flex-col mt-[20px] xl:mt-[40px] xl:text-[32px] max-w-[800px] font-extrabold uppercase text-dark"
      >
        {t("title")} <span>{t("subtitle")}</span>
      </motion.h4>

      <ul className="max-w-[497px] mt-[30px] flex flex-col gap-2">
        {t.raw("features").map((item: string, index: number) => (
          <motion.li
            key={index}
            custom={index + 1}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-dark text-[14px] xl:text-[18px] flex items-center"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalIndividual;
