import React from "react";

export interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "primary" | "secondary";
  color?: string;
}

export type NavLink = {
  name: string;
  href: string;
};

export type RadarItem = {
  title: string;
  subtitle: string;
  slug: string;
};

export type RadarPageProps = {
  params: Promise<{ slug: string }>;
};

export interface IBurgerNavigationProps extends React.ComponentProps<"nav"> {
  isOpen: boolean;
  contacts: IContact[];
  onClose: () => void;
}

export interface IButtonProps extends React.ComponentProps<"button"> {
  text: string;
  variant?: "white" | "black";
}

export interface IModalProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IContactsModal {
  isModalOpen: boolean;
  onClose: () => void;
}

export interface IRadarListItemProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  onOrder: () => void;
  onMore: () => void;
}

export interface IDirectionItemProps extends React.ComponentProps<"div"> {
  title: string;
  text: string;
  titleClassName?: string;
  textClassName?: string;
}

export interface IFormData {
  name: string;
  phone: string;
}

export interface IContactFormProps {
  variant?: "white" | "black";
  onSubmit?: () => void;
  formClassName?: string;
}

export interface IRowData {
  label: string;
  value: string;
}

export interface ITableProps extends React.ComponentProps<"div"> {
  data: IRowData[];
  variant?: "default" | "radar";
}

export interface IDirectionData {
  title: string;
  text: string;
}

interface IFeature {
  title: string;
  desc: string;
}

export interface IAdvantagesTranslation {
  title: string;
  subtitle: string;
  madeIn: string;
  features: {
    [key: string]: IFeature;
  };
}

export interface IRadarItem {
  title: string;
  subtitle: string;
  slug: string;
}

export interface IContact {
  id: string;
  phoneNumber: string;
}

export interface IPrice {
  id: string;
  uahPrice: number;
  eurPrice: number;
}

export interface IEmail {
  id: string;
  email: string;
}

export interface IDatoCMSData {
  contacts: IContact[];
  price: IPrice;
  email: IEmail;
}
