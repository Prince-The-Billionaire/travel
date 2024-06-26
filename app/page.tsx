import Navbar from "@/components/elements/Navbar";
import Camp from "@/components/sections/Camp";
import Features from "@/components/sections/Features";
import GetApp from "@/components/sections/GetApp";
import Guide from "@/components/sections/Guide";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </main>
  );
}
