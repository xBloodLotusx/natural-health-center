import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Education } from "@/components/site/Education";
import { Gallery } from "@/components/site/Gallery";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Education />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
