import { FAQ } from "./_components/FAQ";
import { Navbar } from "./_components/Navbar";
import { Features } from "./_components/Features";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
    </div>
  );
}
