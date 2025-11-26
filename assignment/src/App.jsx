import './App.css'
import { Routes, Route } from "react-router-dom";

import HeroSection from './components/hero'
import AboutSection from './components/about'
import FounderSection from './components/founder'
import FranchiseSection from './components/franchise'
import BusinessModelsSection from './components/business'
import RevenueStreamsSection from './components/revenue'
import TestimonialsSection from './components/testimonials'
import BonusSection from './components/bonus'
import CTASection from './components/cta'
import FAQSection from './components/faq'
import Footer from './components/footer'
import PainPoints from './components/Painpoints'
import ImpactPage from './components/impact'
import WhyPartner from './components/whyPartner'
import GlobalQuotes from './components/globalQuotes'
import CustomCursor from './components/cursor'
import PrivacyPolicy from "./components/privacy";

import Terms from "./components/terms"; // ⬅ ADD THIS

function HomePage() {
  return (
    <>
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <GlobalQuotes />
      <FranchiseSection />
      <BusinessModelsSection />
      <RevenueStreamsSection />
      <WhyPartner />

      <TestimonialsSection />
      <BonusSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* FIX */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}


export default App;
