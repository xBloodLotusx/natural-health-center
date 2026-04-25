import { ImagePlaceholder } from "./ImagePlaceholder";

const articles = [
  {
    title: "How Chiropractic Helps Your Body Heal Naturally",
    text: "Spinal alignment supports your nervous system — the body's communication network. Gentle adjustments help reduce pressure, restore movement, and let healing happen the way nature intended.",
    tag: "Chiropractic 101",
  },
  {
    title: "The Benefits of Therapeutic Massage",
    text: "Massage isn't just relaxation — it improves circulation, eases muscle tension, supports recovery, and reduces stress hormones, helping body and mind reset.",
    tag: "Massage Therapy",
  },
  {
    title: "Understanding Holistic Wellness",
    text: "Holistic care looks beyond symptoms to consider movement, nutrition, sleep, and stress. Small, sustainable changes lead to lasting energy and resilience.",
    tag: "Whole‑Body Health",
  },
];

export const Education = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
            Wellness Education
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 leading-tight">
            Learn. Heal. Thrive.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:shadow-elegant transition-smooth flex flex-col"
            >
              <ImagePlaceholder label={a.tag} aspect="aspect-[16/10]" className="rounded-none" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-semibold">
                  {a.tag}
                </span>
                <h3 className="font-display text-2xl text-primary mt-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed text-sm flex-1">
                  {a.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};