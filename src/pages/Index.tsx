
import HeroSection from '../components/HeroSection';
import StickyNavbar from '../components/StickyNavbar';
import AboutSection from '../components/AboutSection';
import ProductGrid from '../components/ProductGrid';
import IndustryIcons from '../components/IndustryIcons';
import FeatureHighlights from '../components/FeatureHighlights';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FAQAccordion from '../components/FAQAccordion';
import CertificationsSection from '../components/CertificationsSection';
import ContactForm from '../components/ContactForm';
import LiveChatWidget from '../components/LiveChatWidget';
import LanguageToggle from '../components/LanguageToggle';

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNavbar />
      <LanguageToggle />
      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <IndustryIcons />
      <FeatureHighlights />
      <TestimonialsCarousel />
      <FAQAccordion />
      <CertificationsSection />
      <ContactForm />
      <LiveChatWidget />
    </div>
  );
};

export default Index;
