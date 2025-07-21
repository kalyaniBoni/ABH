import HeroSection from "../components/HeroSection";
import StickyNavbar from "../components/StickyNavbar";
import EnhancedAboutSection from "../components/EnhancedAboutSection";
import ProductGrid from "../components/ProductGrid";
import IndustryIcons from "../components/IndustryIcons";
import FeatureHighlights from "../components/FeatureHighlights";
import CustomerTestimonials from "../components/CustomerTestimonials";
import ProductCatalog from "../components/ProductCatalog";
import BulkOrderCalculator from "../components/BulkOrderCalculator";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FAQAccordion from "../components/FAQAccordion";
import CertificationsSection from "../components/CertificationsSection";
import ContactForm from "../components/ContactForm";
import LiveChatWidget from "../components/LiveChatWidget";
import WhatsAppButton from "../components/WhatsAppButton";
import { LogoShowcase } from "../components/ABHLogos";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNavbar />
      <HeroSection />
      {/* <LogoShowcase /> */}
      <EnhancedAboutSection />
      <ProductGrid />
      {/* <ProductCatalog /> */}
      {/* <BulkOrderCalculator /> */}
      <IndustryIcons />
      <FeatureHighlights />
      {/* <CustomerTestimonials /> */}
      {/* <TestimonialsCarousel /> */}
      {/* <FAQAccordion /> */}
      <CertificationsSection />
      <ContactForm />
      {/* <LiveChatWidget /> */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
