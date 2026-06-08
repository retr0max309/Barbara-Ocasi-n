import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EditorialSection from "@/components/sections/EditorialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EditorialSection />
      </main>
      <Footer />
    </>
  );
}
