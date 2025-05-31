
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming you have this hook

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!isMounted) {
    return null; 
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">
            Makeover by Yashi
          </span>
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 shadow-md transition-transform hover:scale-105">
              <Link href="#contact">Book Now</Link>
            </Button>
          </nav>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg absolute w-full left-0 top-20">
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors duration-300 py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 shadow-md transition-transform hover:scale-105 w-full mt-4">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
