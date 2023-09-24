import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Social />
      <Footer />
    </>
  )

}
