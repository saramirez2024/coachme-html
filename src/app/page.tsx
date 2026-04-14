import Nav from "@/components/sections/nav";
import Hero from "@/components/sections/hero";
import SocialProof from "@/components/sections/social-proof";
import Problem from "@/components/sections/problem";
import HowItWorks from "@/components/sections/how-it-works";
import Features from "@/components/sections/features";
import Comparison from "@/components/sections/comparison";
import Screenshots from "@/components/sections/screenshots";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main id="main" className="bg-slate-900">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Features />
      <Comparison />
      <Screenshots />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
