import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-leaf">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sage/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />
      </div>

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 border border-border shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.18em] text-primary/80 font-semibold">
              Madison Heights, VA
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-primary">
            Feel Better{" "}
            <span className="italic text-terracotta">Naturally</span>
            <span className="block text-foreground/85 text-3xl md:text-4xl lg:text-5xl mt-4 font-normal">
              Your path to pain relief & whole‑body wellness.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Personalized chiropractic care, therapeutic massage, and natural
            health solutions designed to support your long‑term wellbeing.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-7 h-12 shadow-elegant">
              <a href="tel:+14349291164" className="gap-2">
                Book an Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 border-primary/30 text-primary hover:bg-primary/5"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              Natural & Non‑Invasive
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="hidden sm:block">Trusted Local Practitioners</div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <ImagePlaceholder
            label="Peaceful Wellness Environment"
            aspect="aspect-[4/5]"
            className="shadow-elegant"
          />
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <ImagePlaceholder
              label="Massage Therapy"
              aspect="aspect-square"
              className="w-48 shadow-warm border-4 border-background"
            />
          </div>
          <div className="absolute -top-6 -right-6 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant text-center p-4">
            <div>
              <div className="font-display text-3xl leading-none">15+</div>
              <div className="text-[10px] uppercase tracking-widest mt-1 opacity-90">
                Years caring for our community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};