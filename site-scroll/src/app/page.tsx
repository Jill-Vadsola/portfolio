import Nav from "@/components/Nav";
import HeroCanvas from "@/components/HeroCanvas";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="atmosphere" aria-hidden />
      <Nav />
      <HeroCanvas />
      <main>
        <About />
        <Experience />
        <FeaturedProject />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
