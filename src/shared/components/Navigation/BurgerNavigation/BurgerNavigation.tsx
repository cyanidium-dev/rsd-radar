"use client";
import { IBurgerNavigationProps } from "@/shared/types";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/shared/constants";
import ContactsModal from "@/modules/ContactsModal/ContactsModal";

const BurgerNavigation = ({ isOpen, onClose }: IBurgerNavigationProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] pt-[64px] px-6 bg-dark z-40 flex flex-col items-start justify-start gap-[54px]"
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
              Отримати консультацію
              <span className="absolute bottom-[-18px] left-0 w-full h-[2px] bg-white group-hover:bg-purple-200 transition-colors" />
            </button>
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
