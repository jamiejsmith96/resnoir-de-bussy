import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <IntroAnimation />
      <Header />
      <Hero />
      <Divider />
      <main id="main-content">
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
