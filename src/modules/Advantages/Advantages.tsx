import React from "react";

const Advantages = () => {
  return (
    <section className="container mx-auto px-6 py-[87px] md:px-8 lg:px-12 xl:pl-[96px] xl:pt-[180px]">
      <div className="border-l border-[#A1A1AA] pl-[18px] md:pl-[24px] xl:pl-[54px] sm:py-[5px]">
        <h2 className="text-white text-[16px] tracking-[2.24px] md:text-[18px] lg:text-[20px]">
          RSD Radar
        </h2>
        <h3 className="mt-[30px] uppercase text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] xl:leading-[108%] xl:tracking-[3.2px] font-medium text-white leading-[180%] tracking-[3.2px]">
          Наші переваги
        </h3>
        <h4 className="text-white font-medium leading-[240%] tracking-[1.92px] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] xl:leading-[180%]">
          Вироблено в Україні
        </h4>
        <ul className="pl-3 sm:pl-0 mt-[48px] md:mt-[56px] xl:mt-[64px] grid grid-cols-1 sm:grid-cols-2 sm:items-baseline md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-[48px] md:gap-[56px] lg:gap-[64px] xxl:gap-[84px]">
          {/* 1 */}
          <li className="flex flex-col gap-2 max-w-[199px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] xl:max-w-[283px]">
            <h5 className="text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium leading-[122%] tracking-[1.92px]">
              Підвищеняя безпеки дорожнього руху у громаді.
            </h5>
            <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-light leading-[122%]">
              Найбільший розмір серед існуючих дорожніх табло - 640x1280мм,
              Табло радар неможливо не помітити
            </p>
            <h5 className="text-white mt-6 text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium leading-[122%] tracking-[1.92px]">
              Легкість мотражу та підключення.
            </h5>
            <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-light leading-[122%]">
              Відкрийте для себе ретельно розроблений підхід до безпеки
              дорожнього руху, який забезпечить максимальний ефект.
            </p>
          </li>
          {/* 2 */}
          <li className="flex flex-col gap-2 max-w-[228px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[398px]">
            <h5 className="text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium leading-[122%] tracking-[1.92px]">
              Емоційна взаємодія
            </h5>
            <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-light leading-[122%]">
              Емоційна взаємодія з водіями. Пять унікальних емоційних образів.
              Емоційна реакція на швидкість автомобіля. Формування відчуття
              відповідальності у громаді за безпеку дорожнього руху..
            </p>
          </li>
          {/* 3 */}
          <li className="flex flex-col gap-2 max-w-[223px] sm:max-w-[230px] md:max-w-[250px] lg:max-w-[270px] xl:max-w-[316px]">
            <h5 className="text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium leading-[122%] tracking-[1.92px]">
              Найбільший розмір екрану.
            </h5>
            <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-light leading-[122%]">
              Найбільший розмір екрану серед існуючи на ринку - 640x1280мм.
            </p>
          </li>
          {/* 4 */}
          <li className="flex flex-col gap-2 max-w-[243px] sm:max-w-[250px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[316px]">
            <h5 className="text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium leading-[122%] tracking-[1.92px]">
              Сучасні світлодіодні дисплеї з високою якістю зображення.
            </h5>
            <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-light leading-[122%]">
              Інтерактивні, динамічні, чіткі та зрозумілі емоційні повідомлення
              водію, щодо його швидкості та її відповідності швидкості, що
              встановлена.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
