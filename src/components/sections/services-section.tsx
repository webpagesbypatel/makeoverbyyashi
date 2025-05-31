
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, SprayCan, Gem, HandHeart } from "lucide-react"; // Example icons
import Link from "next/link";

const services = [
  {
    icon: <Scissors className="h-10 w-10 text-accent" />,
    title: "Hair Styling",
    description: "Chic cuts, vibrant colors, and elegant styling by our expert stylists.",
    link: "#contact",
  },
  {
    icon: <SprayCan className="h-10 w-10 text-accent" />,
    title: "Makeup Artistry",
    description: "Professional makeup for all occasions, enhancing your natural beauty.",
    link: "#contact",
  },
  {
    icon: <Gem className="h-10 w-10 text-accent" />,
    title: "Nail Care",
    description: "Luxurious manicures and pedicures with premium products for lasting beauty.",
    link: "#contact",
  },
  {
    icon: <HandHeart className="h-10 w-10 text-accent" />,
    title: "Spa Treatments",
    description: "Relaxing facials, massages, and body treatments to rejuvenate your senses.",
    link: "#contact",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Signature Services
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover a range of services meticulously crafted to enhance your beauty and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-card"
            >
              <CardHeader className="p-6 items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-center flex-grow">
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 justify-center">
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-6 py-2 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <Link href={service.link}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
