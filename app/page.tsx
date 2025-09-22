// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact"; // 1. Import the Contact component
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-dark font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}