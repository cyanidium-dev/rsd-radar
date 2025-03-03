import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const defaultTitle = "RSD Radar | Безпека доріг";
  const description =
    "RSD Radar — інноваційні рішення для безпеки доріг. Дізнайся про наші радари, переваги та напрямки використання.";
  const keywords = [
    "RSD Radar",
    "безпека доріг",
    "радар для доріг",
    "інноваційні радари",
  ];

  return {
    metadataBase: new URL(baseUrl),
    keywords: keywords,
    title: {
      default: defaultTitle,
      template: `%s | RSD Radar`,
    },
    description: description,
    openGraph: {
      type: "website",
      url: baseUrl,
      title: defaultTitle,
      description: description,
    },
  };
}

import Advantages from "@/modules/Advantages/Advantages";
import DirectionsOfUse from "@/modules/DirectionsOfUse/DirectionsOfUse";
import InnovativeRoadSigns from "@/modules/InnovativeRoadSigns/InnovativeRoadSigns";
import RadarsModels from "@/modules/RadarsModels/RadarsModels";
import Hero from "@/modules/Hero/Hero";
import TopContactsSection from "@/modules/Contacts/TopContactsSection";
import BotContactsSection from "@/modules/Contacts/BotContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <InnovativeRoadSigns />
      <TopContactsSection />
      <RadarsModels />
      <DirectionsOfUse />
      <BotContactsSection />
    </>
  );
}
