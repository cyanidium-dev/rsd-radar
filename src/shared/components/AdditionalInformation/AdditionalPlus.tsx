import { easeOutAnimation } from "@/shared/utils/animation";
import { CircleIcon } from "../../../../public/images/icons";
import { motion } from "framer-motion";

const AdditionalPlus = () => {
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
        Модель на базі RSD RADAR СТАНДАРТ з додатковим функціоналом.{" "}
      </motion.h4>
      <motion.h4
        custom={2}
        variants={easeOutAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[24px] mt-[20px] xl:mt-[40px] xl:text-[32px] max-w-[500px] font-extrabold uppercase text-dark"
      >
        RSD RADAR ПЛЮС забезпечений зв’язком з мережею, що дозволяє:
      </motion.h4>
      <div className="sm:flex sm:mt-[40px] sm:justify-between sm:items-start">
        <div className="mt-[70px] sm:mt-0 sm:max-w-[250px] md:max-w-[330px] xl:max-w-[497px]">
          <ul className="flex flex-col gap-[18px] mt-[18px] sm:mt-0">
            {[
              "здійснювати віддалене оновлення ПЗ та калібровку пристрою;",
              "здійснювати збір та аналіз даних про трафік;",
              "виводити на пристрій попередження про небезпечні погодні умови та інше.",
            ].map((item, index) => (
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
        {/* Текст */}
        <div className="text-dark mt-[20px] sm:mt-0 text-[14px] xl:text-[18px] flex-col flex gap-1 sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px]">
          {[
            "Можливі додаткові індивідуальні опції відповідно вашим потребам.",
            "Комплектація та вартість підбирається та розраховується під кожнеокреме замовлення.",
            " RSD RADAR ПЛЮС включає абонентську плату, розмір якої залежить від комплектації.",
          ].map((item, index) => (
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
