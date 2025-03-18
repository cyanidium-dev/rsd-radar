import { easeOutAnimation } from "@/shared/utils/animation/animation";
import { CircleIcon } from "../../../../public/images/icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AdditionalPlus = () => {
  const t = useTranslations("AdditionalPlus");

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
        {t("title1")}
      </motion.h4>
      <motion.h4
        custom={2}
        variants={easeOutAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[24px] mt-[20px] xl:mt-[40px] xl:text-[32px] max-w-[500px] font-extrabold uppercase text-dark"
      >
        {t("title2")}
      </motion.h4>
      <div className="sm:flex sm:mt-[40px] sm:justify-between sm:items-start">
        <div className="mt-[70px] sm:mt-0 sm:max-w-[250px] md:max-w-[330px] xl:max-w-[497px]">
          <ul className="flex flex-col gap-[18px] mt-[18px] sm:mt-0">
            {t.raw("features").map((item: string, index: number) => (
              <motion.li
                key={index}
                custom={index + 3}
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
        <div className="text-dark mt-[20px] sm:mt-0 text-[14px] xl:text-[18px] flex-col flex gap-1 sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px]">
          {t.raw("notes").map((item: string, index: number) => (
            <motion.p
              key={index}
              custom={index + 6}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-dark text-[14px] xl:text-[18px] flex gap-[12px] items-center"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalPlus;
