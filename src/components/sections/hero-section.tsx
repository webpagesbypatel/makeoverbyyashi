
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Woman with dynamic pink hair"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute z-0"
        data-ai-hint="dynamic hair"
        priority
      />
      <div className="absolute inset-0 bg-accent/30 z-10"></div> {/* Overlay for text contrast, changed to rose gold 30% opacity */}
      
      <div className="relative z-20 flex flex-col items-center text-center p-4 animate-fade-in">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white mix-blend-lighten">
          Experience True Elegance
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg md:text-xl text-gray-200 leading-relaxed">
          Indulge in bespoke beauty treatments designed to rejuvenate your body and soul. Discover the art of transformation at Makeover by Yashi.
        </p>
        <Button asChild size="lg" className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
          <Link href="#services">Our Services</Link>
        </Button>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl h-24 z-10">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 10 C 20 0, 40 0, 50 5 S 80 10, 100 10 L 100 10 L 0 10 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}

