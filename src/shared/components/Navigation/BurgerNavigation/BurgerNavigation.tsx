"use client";
import { IBurgerNavigationProps } from "@/shared/types";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactsModal from "@/modules/ContactsModal/ContactsModal";
import { useTranslations } from "next-intl";
import { PhoneIcon, ViberIcon } from "../../../../../public/images/icons";

const BurgerNavigation = ({
  isOpen,
  onClose,
  contacts,
}: IBurgerNavigationProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("Header");

  const navLinks = [
    { name: t("ourAdvantages"), href: "/#advantages" },
    { name: t("aboutUs"), href: "/#about-us" },
    { name: t("products"), href: "/#productions" },
    { name: t("directions"), href: "/#directions" },
  ];
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] pt-[64px] pb-[36px] px-6 bg-dark z-40 flex flex-col items-start justify-start gap-[54px]"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative w-full text-white-purple text-[20px] font-normal hover:text-purple-200 transition-colors group"
                onClick={onClose}
              >
                {link.name}
                <span className="absolute bottom-[-18px] left-0 w-full h-[2px] bg-white group-hover:bg-purple-200 transition-colors" />
              </Link>
            ))}
            <button
              className="relative w-full flex text-white-purple text-[20px] font-normal hover:text-purple-200 transition-colors group"
              onClick={() => {
                setIsModalOpen(true);
                onClose();
              }}
            >
              {t("actionButton")}
              <span className="absolute bottom-[-18px] left-0 w-full h-[2px] bg-white group-hover:bg-purple-200 transition-colors" />
            </button>
            <div className="flex gap-[18px] items-center mt-auto ">
              <div className=" gap-3 flex   items-center">
                <ViberIcon className="w-[30px] h-[30px]" />
                <PhoneIcon className="w-[30px] h-[30px]" />
              </div>

              <div className="flex flex-col">
                {contacts.map((contact, index) => (
                  <a
                    className="text-white text-[18px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
                    key={index}
                    href={`tel:${contact.phoneNumber}`}
                  >
                    {contact.phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      {isModalOpen && (
        <ContactsModal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default BurgerNavigation;
