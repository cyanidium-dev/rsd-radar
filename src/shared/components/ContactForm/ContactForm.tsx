"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputMask } from "@react-input/mask";
import clsx from "clsx";
import Button from "../Button/Button";
import { IContactFormProps, IFormData } from "@/shared/types";
import Modal from "../Modal/Modal";
import { useState } from "react";

const ContactForm = ({
  variant = "black",
  onSubmit,
  formClassName,
}: IContactFormProps) => {
  const [isThanksOpen, setIsThanksOpen] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Вкажіть ваше ім’я")
      .min(2, "Ім’я має містити щонайменше 2 символи"),
    phone: yup
      .string()
      .required("Номер телефону є обов’язковим")
      .matches(
        /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        "Номер телефону має бути у форматі +380XXXXXXXXX (9 цифр після +380)"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onFormSubmit = (data: IFormData) => {
    console.log("submited:", data);
    setIsThanksOpen(true);
    if (onSubmit) {
      onSubmit(data);
    }
    reset();
  };

  const formClasses = clsx(
    "mt-8",
    variant === "white" ? "bg-white " : "bg-black"
  );

  const inputClasses = clsx(
    `py-[13px] px-4 rounded-[4px] border-[2px] text-[14px] font-raleway placeholder:font-raleway leading-[20px] `,
    variant === "white"
      ? "bg-white border-dark text-dark placeholder:text-dark"
      : "bg-black border-white text-white placeholder:text-white"
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className={clsx(`flex flex-col w-full ${formClasses}`, formClassName)}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Ім’я"
          className={inputClasses}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}

        <InputMask
          mask="+38 (___) ___-__-__"
          replacement={{ _: /\d/ }}
          showMask={false}
          {...register("phone")}
          placeholder="Номер телефону"
          className={clsx("mt-4", inputClasses)}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}

        <Button
          className="h-[47px] mt-5"
          text="Надіслати"
          type="submit"
          variant={variant === "white" ? "black" : "white"}
        />
      </form>
      <Modal isOpen={isThanksOpen} onClose={() => setIsThanksOpen(false)}>
        <h2 className="text-white text-center text-[24px] font-extrabold uppercase">
          Дякуємо за відповідь!
        </h2>
        <p className="mt-[20px] max-w-[256px] flex justify-center mx-auto text-center text-white text-[18px] font-light">
          Найближчим часом менеджер зв’яжеться з Вами!
        </p>
      </Modal>
    </>
  );
};

export default ContactForm;
