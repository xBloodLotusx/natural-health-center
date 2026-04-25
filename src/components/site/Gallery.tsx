import { ImagePlaceholder } from "./ImagePlaceholder";

const photos = [
  { label: "Treatment Room", aspect: "aspect-[4/5]" },
  { label: "Massage Therapy", aspect: "aspect-square" },
  { label: "Chiropractic Adjustment", aspect: "aspect-[4/5]" },
  { label: "Reception Area", aspect: "aspect-square" },
  { label: "Wellness Lounge", aspect: "aspect-[4/5]" },
  { label: "Friendly Staff", aspect: "aspect-square" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <ImagePlaceholder
              key={i}
              label={p.label}
              aspect={p.aspect}
              className="hover:shadow-warm transition-smooth"
            />
          ))}
        </div>
      </div>
    </section>
  );
};