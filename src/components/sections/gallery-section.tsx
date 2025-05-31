
import Image from "next/image";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8bWFrZXVwJTIwa2l0fGVufDB8fHx8MTc0ODcwMzU2MHww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Makeup kit and products", dataAiHint: "makeup kit" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8cnVzc2lhbiUyMGdpcmx8ZW58MHx8fHwxNzQ4NzAzODkwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Portrait of a woman", dataAiHint: "woman portrait" },
  { src: "https://images.unsplash.com/photo-1596205521983-9c372fb3d4f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYWtldXB8ZW58MHx8fHwxNzQ4NzAzNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Makeup application", dataAiHint: "makeup" },
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

