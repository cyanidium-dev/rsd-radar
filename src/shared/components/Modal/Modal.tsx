"use client";
import { IModalProps } from "@/shared/types";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useScrollBodyLock } from "@/shared/hooks/useScrollBodyLock";

const Modal = ({ isOpen, onClose, children, className }: IModalProps) => {
  useScrollBodyLock(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={clsx(
            "fixed inset-0 bg-black/50 flex justify-center items-center z-50",
            className
          )}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="bg-black px-9 py-[38px] rounded-lg w-[86%] max-w-md xl:max-w-[584px] xl:px-[94px] xl:py-[77px] shadow-lg text-white"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
