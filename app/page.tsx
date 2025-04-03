"use client"

import Navbar from "./pages/header/page";
import Footer from "./pages/footer/page";
import { HeroSection } from "./pages/herosection/page";
import { FeaturesSection } from "./pages/featuresection/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
