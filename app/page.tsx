import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Order } from "@/components/Order";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Order />
      </main>
      <Footer />
    </>
  );
}
