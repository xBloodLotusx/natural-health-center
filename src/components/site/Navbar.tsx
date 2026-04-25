import { Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-smooth group-hover:scale-105">
            <Leaf className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-primary">
              Natural Health Center
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Chiropractic • Massage • Wellness
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="default" className="rounded-full px-5 shadow-soft">
          <a href="tel:+14349291164" className="gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(434) 929-1164</span>
            <span className="sm:hidden">Call</span>
          </a>
        </Button>
      </div>
    </header>
  );
};