import ContactForm from "@/shared/components/ContactForm/ContactForm";
import React from "react";

const TopContactsSection = () => {
  return (
    <section className="px-[32px] py-[183px] xl:pl-[70px] contacts-bg_first">
      <div className="bg-white py-[36px] px-[26px] xl:px-[95px] xl:py-[65px] rounded-[12px] max-w-[420px] xl:max-w-[653px] xl:mx-0 xl:mr-auto   mx-auto">
        <h2 className="text-dark text-[16px] font-medium uppercase tracking-[3.2px] xl:text-[36px] ">
          Маєте запитання щодо RSD Radar?
        </h2>
        <p className="mt-[16px] text-[14px] text-dark font-light xl:text-[18px]">
          Залиште свої контакти, і наші менеджери зв’яжуться з вами у
          найкоротший час, щоб допомогти з вибором, дати консультацію або
          прийняти замовлення.
        </p>
        <ContactForm formClassName="mt-[20px]" variant="white" />
      </div>
    </section>
  );
};

export default TopContactsSection;
