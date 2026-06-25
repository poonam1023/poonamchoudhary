import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BooksSection from "./components/BooksSection";
import SpeakingSection from "./components/SpeakingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import JournalSection from "./components/JournalSection";
import NewsletterSection from "./components/NewsletterSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <BooksSection />
        <SpeakingSection />
        <TestimonialsSection />
        <JournalSection />
        <NewsletterSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
