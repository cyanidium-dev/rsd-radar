"use client";
import Image from "next/image";
import React from "react";
import DirectionItem from "./DirectionItem";
import { directionData } from "@/shared/constants";
import { motion } from "framer-motion";
import { easeOutAnimation } from "@/shared/utils/animation";

const DirectionOfUseDesktop = () => {
  return (
    <div className="flex items-center">
      <motion.div
        custom={0}
        variants={easeOutAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/images/radar-desk.png"
          alt="Radar"
          width={508}
          height={622}
        />
      </motion.div>
      <div className="ml-[65px]">
        <motion.h2
          custom={1}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[40px] w-[402px] text-dark font-medium uppercase leading-[122%] tracking-[3.2px]"
        >
          Напрямки використання RSD Radar
        </motion.h2>
        <motion.div
          custom={2}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <DirectionItem
            className="mt-[32px]"
            titleClassName="w-[253px]"
            textClassName="w-[290px]"
            title={directionData[0].title}
            text={directionData[0].text}
          />
        </motion.div>
        <motion.div
          custom={3}
          variants={easeOutAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <DirectionItem
            className="mt-[30px]"
            titleClassName="w-[153px]"
            textClassName="w-[290px]"
            title={directionData[5].title}
            text={directionData[5].text}
          />
        </motion.div>
      </div>
      <div className="ml-[130px]">
        <div className="flex gap-[92px]">
          <motion.div
            custom={4}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DirectionItem
              titleClassName="w-[170px]"
              textClassName="w-[170px]"
              title={directionData[1].title}
              text={directionData[1].text}
            />
          </motion.div>
          <motion.div
            custom={5}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DirectionItem
              titleClassName="w-[167px]"
              textClassName="w-[199px]"
              title={directionData[2].title}
              text={directionData[2].text}
            />
          </motion.div>
        </div>
        <div className="flex gap-[42px] mt-[60px]">
          <motion.div
            custom={6}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DirectionItem
              titleClassName="w-[221px]"
              textClassName="w-[220px]"
              title={directionData[3].title}
              text={directionData[3].text}
            />
          </motion.div>
          <motion.div
            custom={7}
            variants={easeOutAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DirectionItem
              titleClassName="w-[183px]"
              textClassName="w-[199px]"
              title={directionData[4].title}
              text={directionData[4].text}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DirectionOfUseDesktop;
