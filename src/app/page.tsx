
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
