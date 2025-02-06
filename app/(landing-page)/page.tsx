import NavigationHeader from "@/components/NavigationHeader";
import { FAQ } from "./_components/FAQ";
import { Features } from "./_components/Features";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <NavigationHeader />
      <Hero />
      <Features />
      <FAQ />
    </div>
  );
}
