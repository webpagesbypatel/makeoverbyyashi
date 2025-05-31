
import Link from "next/link";
import { Sparkles, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground/90 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="h-8 w-8 text-accent" />
            <span className="font-headline text-2xl font-bold">
              Makeover by Yashi
            </span>
          </div>

          <nav className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 font-body">
            <Link href="#services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="#gallery" className="hover:text-accent transition-colors">Gallery</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </nav>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="https://www.instagram.com/makeover.by_yashi/?igsh=MWF0MDA1cHF1MzJ6ZA%3D%3D#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://www.instagram.com/makeover.by_yashi/?igsh=MWF0MDA1cHF1MzJ6ZA%3D%3D#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://www.instagram.com/makeover.by_yashi/?igsh=MWF0MDA1cHF1MzJ6ZA%3D%3D#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} Makeover by Yashi. All rights reserved.</p>
          <p className="mt-1">@webpagesbypatel.</p>
        </div>
      </div>
    </footer>
  );
}
