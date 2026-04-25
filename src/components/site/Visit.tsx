import { ImagePlaceholder } from "./ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 12:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const Visit = () => {
  return (
    <section id="visit" className="py-24 bg-gradient-warm">
      <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50 flex flex-col">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 leading-tight">
            Come experience natural healing.
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-semibold text-primary">Location</div>
                <p className="text-muted-foreground mt-0.5">
                  4879 S Amherst Hwy<br />Madison Heights, VA 24572
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-semibold text-primary">Call to Book</div>
                <a
                  href="tel:+14349291164"
                  className="text-muted-foreground hover:text-primary transition-smooth mt-0.5 block"
                >
                  (434) 929‑1164
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-primary mb-2">Hours</div>
                <ul className="divide-y divide-border/60">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between py-2 text-sm"
                    >
                      <span className="text-foreground/80">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="rounded-full mt-8 self-start px-7 shadow-elegant">
            <a href="tel:+14349291164" className="gap-2">
              <Phone className="h-4 w-4" /> Call (434) 929‑1164
            </a>
          </Button>
        </div>

        <ImagePlaceholder
          label="Map — 4879 S Amherst Hwy"
          aspect="aspect-auto"
          className="min-h-[400px] h-full"
        />
      </div>
    </section>
  );
};