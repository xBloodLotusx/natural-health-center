import naturalAisle from "@/assets/natural-aisle.jpg";
import naturalEntrance from "@/assets/natural-health-entrance.png";
import naturalOnly from "@/assets/natural-health-natural-only.jpg";

const photos = [
  { src: naturalEntrance, label: "Our Storefront", aspect: "aspect-[4/5]" },
  { src: naturalAisle, label: "Product Aisle", aspect: "aspect-square" },
  { src: naturalOnly, label: "Natural Products", aspect: "aspect-[4/5]" },
];

export const Gallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
            Inside Our Center
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 leading-tight">
            A warm, welcoming place to heal.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`${p.aspect} w-full rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-smooth`}>
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};