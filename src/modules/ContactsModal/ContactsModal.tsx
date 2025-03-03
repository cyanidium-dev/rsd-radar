"use client";
import ContactForm from "@/shared/components/ContactForm/ContactForm";
import Modal from "@/shared/components/Modal/Modal";
import { IContactsModal } from "@/shared/types";
import React, { useState } from "react";

const ContactsModal = ({ isModalOpen, onClose }: IContactsModal) => {
  const [isThanksOpen, setIsThanksOpen] = useState(false);

  const onSubmit = (data: unknown) => {
    console.log(`Sub: ${data}`);
    setIsThanksOpen(true);
  };
  return (
    <>
      <Modal
        className={isThanksOpen ? "hidden" : ""}
        isOpen={isModalOpen}
        onClose={onClose}
      >
        <h2 className="text-white text-[24px] font-extrabold leading-normal uppercase">
          Отримай швидку та детальну консультацію
        </h2>
        <p className="text-white text-[16px]  font-light mt-5">
          Залиште свої контакти, і наші менеджери зв’яжуться з вами у
          найкоротший час, щоб допомогти з вибором.
        </p>
        <ContactForm onSubmit={onSubmit} />
      </Modal>

      <Modal isOpen={isThanksOpen} onClose={() => setIsThanksOpen(false)}>
        <h2 className="text-white text-center text-[24px] font-extrabold uppercase">
          Дякуємо за відповідь!
        </h2>
        <p className="mt-[20px] max-w-[256px] flex justify-center mx-auto text-center text-white text-[16px] font-light">
          Найближчим часом менеджер зв’яжеться з Вами!
        </p>
      </Modal>
    </>
  );
};

export default ContactsModal;
