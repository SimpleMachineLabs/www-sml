import Header from "@/app/components/header";
import HeroSection from "@/app/components/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
        title='Autonomous Test Automation'
        subtitle='SML is an enterprise-grade system for capturing user interactions and automatically generating tests based on real user behavior. It combines sophisticated analytics with privacy-first design and intelligent test generation.'
      />
    </main>
  );
}
