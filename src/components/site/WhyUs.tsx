import { Check } from "lucide-react";

const reasons = [
  "Experienced, caring practitioners who listen first.",
  "Personalized treatment plans built around you.",
  "Natural, non‑invasive healing — no shortcuts.",
  "Comfortable, relaxing, and welcoming environment.",
  "Strong local reputation in Madison Heights.",
  "Focus on long‑term wellness, not quick fixes.",
  "Convenient location on S Amherst Hwy.",
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-sage blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-terracotta blur-3xl" />
      </div>

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-sage font-semibold">
            Why Patients Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
            Real care.{" "}
            <span className="italic text-sage">Real results.</span>{" "}
            Right here at home.
          </h2>
          <p className="text-primary-foreground/75 mt-6 text-lg leading-relaxed max-w-lg">
            For over a decade, neighbors across Madison Heights have trusted
            us to help them move better, feel better, and live better — the
            natural way.
          </p>
        </div>

        <ul className="space-y-3">
          {reasons.map((r, i) => (
            <li
              key={r}
              className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage text-moss">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <span className="text-primary-foreground/95 leading-snug pt-0.5">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};