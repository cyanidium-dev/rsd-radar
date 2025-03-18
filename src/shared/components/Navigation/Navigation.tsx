"use client";
import clsx from "clsx";
import Link from "next/link";
import Button from "../Button/Button";
import { useState } from "react";
import ContactsModal from "@/modules/ContactsModal/ContactsModal";
import { useTranslations } from "next-intl";

const Navigation = ({ className, ...props }: React.ComponentProps<"nav">) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("Header");

  const navLinks = [
    { name: t("ourAdvantages"), href: "/#advantages" },
    { name: t("aboutUs"), href: "/#about-us" },
    { name: t("products"), href: "/#productions" },
    { name: t("directions"), href: "/#directions" },
  ];

  return (
    <nav
      className={clsx(className, "flex gap-[19px] 2xl:gap-[29px]")}
      {...props}
    >
      {navLinks.map((link, index) => (
        <Link
          className="text-dark hover:text-dark/70 text-[18px] font-normal leading-[50px] text-right"
          key={index}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
      <Button
        onClick={() => setIsModalOpen(true)}
        className="w-[252px] ml-[6px]"
        text={t("actionButton")}
      />
      {isModalOpen && (
        <ContactsModal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
