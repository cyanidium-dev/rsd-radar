"use client";

import Link from "next/link";
import {
  BurgerCloseIcon,
  BurgerOpenIcon,
  PhoneIcon,
  ViberIcon,
} from "../../../public/images/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BurgerNavigation from "@/shared/components/Navigation/BurgerNavigation/BurgerNavigation";
import Navigation from "@/shared/components/Navigation/Navigation";
import { IContact } from "@/shared/types";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher/LanguageSwitcher";

const Header = ({ contacts }: { contacts: IContact[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky  top-0 py-5 px-6 xl:py-[15px] xl:px-[80px] bg-white  z-50">
        <div className="flex items-center justify-between xl:py-1">
          <Link className="logo" href="/">
            RSD Radar
          </Link>
          <div className=" gap-[20px] 2xl:gap-[40px] items-center hidden xl:flex">
            <div className="flex gap-[20px] 2xl:gap-[40px] items-center">
              <div className="flex gap-3">
                <ViberIcon color="#18181B" />
                <PhoneIcon color="#18181B" />
              </div>
              <div className="flex flex-col">
                {contacts.map((contact, index) => (
                  <a
                    className="text-[12px] text-dark hover:text-dark/70 transition-colors duration-300"
                    key={index}
                    href="tel:{contact.phoneNumber}"
                  >
                    {contact.phoneNumber}
                  </a>
                ))}
              </div>
            </div>
            <LanguageSwitcher />
          </div>
          <Navigation className="hidden xl:flex" />
          <div className="flex gap-8 items-center">
            <div className="flex xl:hidden">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" xl:hidden transition-transform hover:scale-110"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BurgerCloseIcon />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BurgerOpenIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>
      <BurgerNavigation
        contacts={contacts}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
