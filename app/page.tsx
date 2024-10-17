import AboutUs from "@/components/AboutUs/page";
import AustralianInvestment from "@/components/AustralianInvestment/page";
import Buying from "@/components/Buying/page";
import Hero from "@/components/Hero/page";
import Investment from "@/components/Investment/page";
import MegaProject from "@/components/MegaProject/page";



export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Investment/>
      <AboutUs/>
      <MegaProject/>
      <AustralianInvestment/>
      <Buying/>
    </div>
  );
}
