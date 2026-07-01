import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Areas from "@/components/sections/Areas";
import WhyUs from "@/components/sections/WhyUs";
import ConsultationForm from "@/components/sections/ConsultationForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Areas />
        <WhyUs />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}
