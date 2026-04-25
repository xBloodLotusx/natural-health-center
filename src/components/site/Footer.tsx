import { Facebook, Instagram, Leaf, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-moss text-primary-foreground py-16">
      <div className="container grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/30">
              <Leaf className="h-5 w-5 text-sage" strokeWidth={1.75} />
            </div>
            <div className="font-display text-xl font-semibold">
              Natural Health Center
            </div>
          </div>
          <p className="text-primary-foreground/70 italic font-display text-lg leading-snug">
            Natural healing for a healthier, happier you.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg mb-3">Visit</h4>
          <p className="flex items-start gap-2 text-primary-foreground/80">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            4879 S Amherst Hwy, Madison Heights, VA 24572
          </p>
          <a
            href="tel:+14349291164"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-sage transition-smooth"
          >
            <Phone className="h-4 w-4" /> (434) 929‑1164
          </a>
        </div>

        <div className="space-y-2 text-sm">
          <h4 className="font-display text-lg mb-3">Hours</h4>
          <p className="text-primary-foreground/80">Mon – Fri: 9 AM – 6 PM</p>
          <p className="text-primary-foreground/80">Saturday: 9 AM – 12 PM</p>
          <p className="text-primary-foreground/80">Sunday: Closed</p>

          <div className="flex gap-3 pt-4">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-sage hover:text-moss transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-sage hover:text-moss transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-primary-foreground/15 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Natural Health Center. All rights reserved.</span>
        <span>Madison Heights, Virginia</span>
      </div>
    </footer>
  );
};