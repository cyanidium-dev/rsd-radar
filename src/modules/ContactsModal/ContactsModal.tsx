"use client";
import ContactForm from "@/shared/components/ContactForm/ContactForm";
import Modal from "@/shared/components/Modal/Modal";
import { IContactsModal } from "@/shared/types";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const ContactsModal = ({ isModalOpen, onClose }: IContactsModal) => {
  const [isThanksOpen, setIsThanksOpen] = useState(false);
  const t = useTranslations("ContactsModal");

  useEffect(() => {
    if (!isModalOpen) {
      setIsThanksOpen(false);
    }
  }, [isModalOpen]);

  const onSubmit = () => {
    setIsThanksOpen(true);
  };

  return (
    <>
      <Modal
        className={isThanksOpen ? "hidden" : ""}
        isOpen={isModalOpen}
        onClose={() => {
          onClose();
          setIsThanksOpen(false);
        }}
      >
        <h2 className="text-white text-[24px] font-extrabold leading-normal uppercase">
          {t("consultation.title")}
        </h2>
        <p className="text-white text-[18px] font-light mt-5">
          {t("consultation.description")}
        </p>
        <ContactForm onSubmit={onSubmit} />
      </Modal>

      <Modal isOpen={isThanksOpen} onClose={() => setIsThanksOpen(false)}>
        <h2 className="text-white text-center text-[24px] font-extrabold uppercase">
          {t("thanks.title")}
        </h2>
        <p className="mt-[20px] max-w-[256px] flex justify-center mx-auto text-center text-white text-[18px] font-light">
          {t("thanks.description")}
        </p>
      </Modal>
    </>
  );
};

export default ContactsModal;
// const onFormSubmit = async (data: IFormData) => {
//   console.log("Форма надіслана:", data);

//   try {
//     const response = await fetch("/api/send-to-telegram", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log("Відповідь API:", result);

//     if (response.ok) {
//       setIsThanksOpen(true);
//       reset();
//     } else {
//       console.error("Помилка відправки:", result);
//     }
//   } catch (error) {
//     console.error("Помилка запиту:", error);
//   }
// };
