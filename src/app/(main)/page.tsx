import Header from "@/app/components/header";
import HeroSection from "@/app/components/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
        title='Autonomous Test Automation'
        subtitle='Test generation based on real user behavior'
      />
    </main>
  );
}
