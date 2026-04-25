import { ImagePlaceholder } from "./ImagePlaceholder";
import { HeartPulse, Users, Sprout, HandHeart } from "lucide-react";

const pillars = [
  { icon: HeartPulse, title: "Personalized Care", text: "Treatment plans built around your body, history, and goals." },
  { icon: Sprout, title: "Holistic Approach", text: "Whole‑body healing for lasting relief — not quick fixes." },
  { icon: Users, title: "Community Focused", text: "Proudly serving Madison Heights families for over a decade." },
  { icon: HandHeart, title: "Caring Practitioners", text: "Friendly, knowledgeable team in a relaxing space." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <ImagePlaceholder label="Treatment Room" aspect="aspect-[3/4]" />
          <div className="space-y-4 pt-12">
            <ImagePlaceholder label="Practitioner" aspect="aspect-square" />
            <ImagePlaceholder label="Wellness Space" aspect="aspect-[4/3]" />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
              About Our Center
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 leading-tight">
              A trusted home for natural healing in Madison Heights.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Natural Health Center has been a calm, welcoming space for our
            neighbors to find relief, restore mobility, and reconnect with
            their wellbeing. We believe the body is built to heal — our role
            is to support that journey through gentle, natural, and
            personalized care.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 pt-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-3 p-4 rounded-xl bg-cream/60 border border-border/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-primary leading-tight">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};