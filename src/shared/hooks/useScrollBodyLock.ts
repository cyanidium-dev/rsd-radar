"use clinet";

import { useEffect } from "react";

export const useScrollBodyLock = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
};
