import { BookCanvas } from "./components/book";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BooksSection from "./components/BooksSection";
import PhilosophySection from "./components/PhilosophySection";
import TestimonialsSection from "./components/TestimonialsSection";
import JournalSection from "./components/JournalSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BookCanvas>
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <PhilosophySection />
          <BooksSection />
          <TestimonialsSection />
          <JournalSection />
          <ConnectSection />
        </main>
      </BookCanvas>
      <Footer />
    </>
  );
}
