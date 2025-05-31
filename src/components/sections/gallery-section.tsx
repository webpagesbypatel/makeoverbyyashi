
import Image from "next/image";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxiZWF1dHl8ZW58MHx8fHwxNzQ4Njk5Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Client transformation 1", dataAiHint: "hairstyle makeover" },
  { src: "https://images.unsplash.com/photo-1602910344008-22f323cc1817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8bWFrZXVwfGVufDB8fHx8MTc0ODcwMDgwMnww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Makeup application", dataAiHint: "makeup" },
  { src: "https://images.unsplash.com/photo-1549236177-f9b0031756eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoYWlyJTIwc3R5bGluZ3xlbnwwfHx8fDE3NDg3MDA3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Client transformation 2", dataAiHint: "hair styling" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxuYWlscyUyMHBhcmxvdXJ8ZW58MHx8fHwxNzQ4NzAxMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Nail art closeup", dataAiHint: "nails parlour" },
  { src: "https://images.unsplash.com/photo-1692172123041-02869d991814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8bWFrZW92ZXIlMjB8ZW58MHx8fHwxNzQ4NzAxNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Client transformation 3", dataAiHint: "makeover" },
  { src: "https://images.unsplash.com/photo-1633685894176-9f715a092b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8c2FyZWV8ZW58MHx8fHwxNzQ4NzAwNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Saree model", dataAiHint: "saree model" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Gallery
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A glimpse into the transformations and serene ambiance at Makeover by Yashi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={item.dataAiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
