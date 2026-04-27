import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I thank God everyday that he sent me to Lina! She has been a great inspiration and has spoken the word of God over my life. I firmly believe that I am still here today because of her help through God's Spirit. Thank you Jesus and Thank you Lina!",
    name: "Brush Brothers",
  },
  {
    quote:
      "I love this Holistic Health Store! I've been going for years and they are so helpful and knowledgeable! I always recommend this place to everyone!",
    name: "Leeann",
  },
  {
    quote:
      "I was so happy to have gotten in 5 minutes before they closed, and was able to get what I needed and get out in about 3 minutes! Minutes! The service was great and I will be back!",
    name: "Monica Parson",
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

        <div className="grid md:grid-cols-3 gap-6">
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
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};