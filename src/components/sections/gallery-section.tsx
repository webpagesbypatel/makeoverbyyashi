
import Image from "next/image";

const galleryItems = [
  { src: "https://placehold.co/600x400.png", alt: "Client transformation 1", dataAiHint: "hairstyle makeover" },
  { src: "https://placehold.co/600x400.png", alt: "Parlour ambiance 1", dataAiHint: "salon interior" },
  { src: "https://placehold.co/600x400.png", alt: "Client transformation 2", dataAiHint: "makeup result" },
  { src: "https://placehold.co/600x400.png", alt: "Parlour ambiance 2", dataAiHint: "spa room" },
  { src: "https://placehold.co/600x400.png", alt: "Client transformation 3", dataAiHint: "nail art" },
  { src: "https://placehold.co/600x400.png", alt: "Parlour detail", dataAiHint: "beauty products" },
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
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-headline text-xl">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
