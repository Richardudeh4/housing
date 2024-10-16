import AboutUs from "@/components/AboutUs/page";
import Hero from "@/components/Hero/page";
import Investment from "@/components/Investment/page";



export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Investment/>
      <AboutUs/>
    </div>
  );
}
