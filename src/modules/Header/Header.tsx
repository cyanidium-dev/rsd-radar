"use client";

import Link from "next/link";
import { BurgerCloseIcon, BurgerOpenIcon } from "../../../public/images/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BurgerNavigation from "@/shared/components/Navigation/BurgerNavigation/BurgerNavigation";
import Navigation from "@/shared/components/Navigation/Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 py-5 px-6 xl:py-[15px] xl:px-[80px] bg-white  z-50">
        <div className="flex items-center justify-between xl:py-1">
          <Link className="logo" href="/">
            RSD Radar
          </Link>
          <Navigation className="hidden xl:flex" />
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
      </header>
      <BurgerNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
