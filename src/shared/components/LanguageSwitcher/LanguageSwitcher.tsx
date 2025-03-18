"use client";

import { useState, useRef } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "../../../../public/images/icons";
import useClickOutside from "@/shared/hooks/useClickOutside";

const languages = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
];

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLocaleSwitch = (newLocale: string) => {
    router.replace({ pathname }, { locale: newLocale });
    setIsOpen(false);
  };

  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-dark text-[14px] font-medium uppercase bg-transparent border-none cursor-pointer"
        aria-label="Toggle language menu"
      >
        <span>{currentLocale === "uk" ? "UA" : "EN"}</span>
        <ArrowIcon
          className={`w-[12px] h-[12px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[30px] right-0 bg-white shadow-md rounded-md py-2 w-[60px] z-10"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLocaleSwitch(lang.code)}
                className={`block px-4 py-1 text-dark text-[14px] font-medium uppercase hover:bg-gray-100 w-full text-left ${
                  currentLocale === lang.code ? "bg-gray-200" : ""
                }`}
                aria-label={`Switch to ${lang.label}`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
