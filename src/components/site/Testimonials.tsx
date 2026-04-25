import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "After years of chronic back pain, I finally feel like myself again. The team listened, explained everything, and built a plan just for me.",
    name: "Sarah M.",
    location: "Madison Heights, VA",
  },
  {
    quote:
      "The office is calm and welcoming, and every staff member is genuinely kind. My massage therapist is incredible — I leave feeling brand new.",
    name: "James T.",
    location: "Lynchburg, VA",
  },
  {
    quote:
      "I felt better after just one visit. They take the time to actually understand what's going on and never rush you. Highly recommend.",
    name: "Linda P.",
    location: "Amherst, VA",
  },
  {
    quote:
      "Tension headaches that bothered me for years are finally gone. Their natural, holistic approach has truly changed my quality of life.",
    name: "Marcus W.",
    location: "Madison Heights, VA",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 leading-tight">
            Healing, in their own words.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="bg-cream/70 border border-border/60 rounded-2xl p-8 shadow-soft relative"
            >
              <Quote
                className="absolute top-6 right-6 h-10 w-10 text-primary/10"
                strokeWidth={1}
              />
              <div className="flex gap-0.5 text-terracotta mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/85 text-lg leading-relaxed font-display italic">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60">
                <div className="font-semibold text-primary">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};