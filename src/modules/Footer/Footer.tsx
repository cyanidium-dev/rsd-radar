"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container px-[42px] pt-[128px] xl:px-[150px] xl:pt-[278px] xl:pb-[100px] pb-[80px] mx-auto">
        <motion.div
          custom={0}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            className="text-white self-stretch md:justify-start flex justify-center text-center text-[20px] font-bold tracking-[7px] uppercase hover:opacity-80 hover:text-gray-300 transition duration-300"
            href="/"
          >
            RSD Radar
          </Link>
        </motion.div>
        <div className="md:flex md:justify-between xl:items-baseline md:mt-[70px]">
          <nav className="flex flex-col md:items-start items-center xl:flex-row mt-[74px] md:mt-0 gap-[20px]">
            <motion.div
              custom={1}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                className="text-white text-[18px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
                href="/"
              >
                Наші переваги
              </Link>
            </motion.div>
            <motion.div
              custom={2}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                className="text-white text-[18px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
                href="/"
              >
                Про нас
              </Link>
            </motion.div>
            <motion.div
              custom={3}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                className="text-white text-[18px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
                href="/"
              >
                Продукція
              </Link>
            </motion.div>
            <motion.div
              custom={4}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                className="text-white text-[18px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
                href="/"
              >
                Напрямки
              </Link>
            </motion.div>
          </nav>
          <div className="flex flex-col md:items-start xl:flex-row xl:items-center mt-[56px] md:mt-0 items-center justify-center gap-[20px]">
            <motion.div
              custom={5}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                className="text-white text-[18px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
                href="tel:+380441234567"
              >
                Тел.: +38 044 123 45 67
              </a>
            </motion.div>
            <motion.div
              custom={6}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                className="text-white text-[18px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
                href="mailto:info@mysite.ua"
              >
                Email: info@mysite.ua
              </a>
            </motion.div>
            <motion.div
              custom={7}
              variants={easeOutAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <p className="text-white text-[18px] md:text-left tracking-[0.64px] text-center ">
                  вул. Хрещатик, 22
                </p>
                <p className="text-white text-[18px] md:text-left tracking-[0.64px] text-center ">
                  м. Київ, 01001, Україна
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-[56px] md:mt-[70px] items-center justify-center gap-[20px]">
          <motion.p
            custom={8}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white text-center leading-[180%] tracking-[0.64px] text-[18px]"
          >
            © 2025 RSD Radar
          </motion.p>
          <motion.p
            custom={9}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white text-center leading-[180%] tracking-[0.64px] text-[18px]"
          >
            Сайт розробили{" "}
            <Link
              target="_blank"
              href="https://cyanidium.dev"
              className="hover:opacity-80 hover:text-gray-300 transition duration-300"
            >
              cyanidium.dev
            </Link>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
