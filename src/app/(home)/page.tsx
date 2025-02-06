import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

const Page = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </main>
  );
};

export default Page;
