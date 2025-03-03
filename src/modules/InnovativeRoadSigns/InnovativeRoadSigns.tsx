import Image from "next/image";
import React from "react";

const InnovativeRoadSigns = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 md:px-8 mx-auto pt-[128px] pb-[50px] xl:pl-[150px] xxl:pr-[47px] bg-white">
        <div className="xxl:flex xxl:justify-between xxl:items-center">
          <div className="xxl:flex xxl:flex-col">
            <h2 className="text-dark text-[24px] font-medium leading-[122%] tracking-[3.2px] uppercase xl:text-[40px] ">
              Підвищіть безпеку доріг вашої громади за допомогою RSD Radar.
            </h2>
            <ul className="mt-[48px] xl:mt-[90px] grid grid-cols-1 gap-[48px] xl:gap-[70px] sm:grid-cols-2 xxl:flex xxl:gap-[70px]">
              {/* 1 */}
              <li className="flex flex-col gap-4 xxl:w-[311px]">
                <h3 className="text-dark text-[16px] md:max-w-[328px] xxl:w-[311px] xl:text-[24px] self-stretch font-medium leading-[122%] tracking-[1.92px]">
                  Розроблений відповідно потребам вашої громади
                </h3>
                <p className="text-dark text-[14px] xl:text-[18px] font-light xxl:w-[311px]">
                  Для забезпечення безпеки дорожнього руху. Допоможе Вам
                  підвищити безпеку дорожнього руху на дорогах
                </p>
              </li>
              {/* 2 */}
              <li className="flex flex-col gap-4 xxl:w-[207px]">
                <h3 className="text-dark text-[16px] xl:text-[24px] md:max-w-[328px] xl:max-w-[357px] self-stretch font-medium leading-[122%] tracking-[1.92px]">
                  Зменшує швидкість для підвищення безпеки
                </h3>
                <p className="text-dark text-[14px] xl:text-[18px] font-light max-w-[207px] xl:max-w-full xxl:w-[207px]">
                  Спонукає та заохочує водія дотримуватись встановленої
                  швидкості
                </p>
              </li>
              {/* 3 */}
              <li className="flex flex-col gap-4 xxl:w-[230px]">
                <h3 className="text-dark text-[16px] xxl:w-[183px] xl:text-[24px] md:max-w-[220px] xl:max-w-[357px] self-stretch font-medium leading-[122%] tracking-[1.92px]">
                  Формування відповіда-льності
                </h3>
                <p className="text-dark text-[14px] xl:text-[18px] font-light xxl:w-[230px]">
                  Емоційна комунікація, практично, з усіма мешканцями громади –
                  водії, пасажири, пішоходи. Допомагає формувати відчуття
                  відповідальності в громаді до безпеки дорожнього руху.
                </p>
              </li>
              {/* 4 */}
              <li className="flex flex-col gap-4 xxl:w-[199px]">
                <h3 className="text-dark text-[16px] xxl:w-[167px] xl:text-[24px] md:max-w-[220px] self-stretch font-medium leading-[122%] tracking-[1.92px]">
                  Вимірює та транслює швидкість автомобіля
                </h3>
                <p className="text-dark text-[14px] xl:text-[18px] font-light xxl:w-[199px]">
                  Емоційно акцентує увагу водія на його швидкість.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/radar-desk.png"
              alt="Radar"
              width={373}
              height={493}
              className=" hidden rotate-[-4deg] xxl:block"
            />
            <Image
              src="/images/radar-mob.png"
              alt="Radar"
              width={308}
              height={377}
              className="mt-[72px] rotate-[-4deg] mx-auto xxl:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeRoadSigns;
