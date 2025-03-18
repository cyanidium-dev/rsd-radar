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
      <InnovativeRoadSigns />
      <Advantages />
      <TopContactsSection />
      <RadarsModels />
      <DirectionsOfUse />
      <BotContactsSection />
    </>
  );
}
