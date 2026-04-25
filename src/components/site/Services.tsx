import { ImagePlaceholder } from "./ImagePlaceholder";
import { Activity, Hand, Leaf, ShieldPlus } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Chiropractic Care",
    description:
      "Gentle spinal adjustments, posture correction, and mobility care to restore alignment and ease pain at its source.",
    benefits: ["Pain relief", "Improved mobility", "Better posture"],
    ideal: "Back & neck pain, stiffness, accident recovery.",
  },
  {
    icon: Hand,
    title: "Massage Therapy",
    description:
      "Deep tissue, relaxation, and therapeutic massage tailored to release tension, reduce stress, and renew your body.",
    benefits: ["Muscle relief", "Stress reduction", "Better circulation"],
    ideal: "Stress, muscle tension, athletes, chronic tightness.",
  },
  {
    icon: Leaf,
    title: "Holistic Wellness",
    description:
      "Natural health guidance and lifestyle support that nurtures whole‑body wellbeing, not just symptoms.",
    benefits: ["Energy & vitality", "Lifestyle support", "Whole‑body balance"],
    ideal: "Anyone seeking long‑term, natural wellness.",
  },
  {
    icon: ShieldPlus,
    title: "Pain Relief Programs",
    description:
      "Targeted programs for back pain, neck pain, headaches, joint discomfort, and recovery from injury.",
    benefits: ["Lasting relief", "Faster recovery", "Personalized plan"],
    ideal: "Chronic pain, headaches, sports injury, joint issues.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-warm">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 leading-tight">
            Natural care for every step of your journey.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            From spinal alignment to deep relaxation, every treatment is
            designed around your body and your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description, benefits, ideal }) => (
            <article
              key={title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-smooth border border-border/50 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft group-hover:scale-105 transition-smooth">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <ImagePlaceholder
                  label="Photo"
                  aspect="aspect-[5/3]"
                  className="w-32 rounded-xl"
                />
              </div>

              <h3 className="font-display text-2xl text-primary mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1 rounded-full bg-sage/30 text-moss font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <p className="mt-5 pt-5 border-t border-border/60 text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Ideal for:</span>{" "}
                {ideal}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};