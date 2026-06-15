import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SupportedBy from "./components/SupportedBy";
import CoreProcess from "./components/CoreProcess";
import ImpactModel from "./components/ImpactModel";
import FeaturedStory from "./components/FeaturedStory";
import ImpactNumbers from "./components/ImpactNumbers";
import PartnerWithUs from "./components/PartnerWithUs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative bg-brand-cream">
        <Navbar />
        <main>
          <Hero />
          <SupportedBy />
          <CoreProcess />
          <ImpactModel />
          <FeaturedStory />
          <ImpactNumbers />
          <PartnerWithUs />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
