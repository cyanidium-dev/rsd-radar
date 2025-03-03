"use client";
import clsx from "clsx";
import Link from "next/link";
import Button from "../Button/Button";
import { useState } from "react";
import { navLinks } from "@/shared/constants";
import ContactsModal from "@/modules/ContactsModal/ContactsModal";

const Navigation = ({ className, ...props }: React.ComponentProps<"nav">) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className={clsx(className, "flex gap-[29px]")} {...props}>
      {navLinks.map((link, index) => (
        <Link
          className="text-dark hover:text-dark/70 text-[16px] font-normal leading-[50px] text-right"
          key={index}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
      <Button
        onClick={() => setIsModalOpen(true)}
        className="w-[252px] ml-[6px]"
        text="Отримати консультацію"
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
