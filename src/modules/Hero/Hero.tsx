"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-[42px] pt-[84px] pb-[111px] hero-bg xl:pb-[28px] xl:pt-[77px]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/radar-second-mob.png"
          alt="Radar"
          width={209}
          height={289}
          className="xl:hidden"
        />
        <Image
          alt="Radar"
          className="hidden xl:block"
          src="/images/radar-hero-desk.png"
          width={398}
          height={560}
        />
        <h1 className="mt-[31px] text-white  text-[36px] font-extrabold leading-[150%] text-center tracking-[4.12px] uppercase xl:text-[64px] xl:mt-[82px]">
          RSD Radar
        </h1>
        <h2 className="mt-[10px] text-center text-white leading-[150%] tracking-[5.12px] self-stretch font-medium text-[16px] uppercase xl:text-[24px] ">
          Road Safety device
        </h2>
        <p className="text-white text-center mx-auto text-[16px] mt-[31px] leading-[122%] tracking-[1.2px] max-w-[238px] self-stretch xl:text-[24px] xl:max-w-[642px]">
          Кращий іноваційний партнер для безпеки доріг у вашій громаді.
        </p>
      </div>
    </section>
  );
};

export default Hero;
