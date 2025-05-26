
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductGrid from '../components/ProductGrid';
import IndustryIcons from '../components/IndustryIcons';
import FeatureHighlights from '../components/FeatureHighlights';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <IndustryIcons />
      <FeatureHighlights />
      <ContactForm />
    </div>
  );
};

export default Index;
