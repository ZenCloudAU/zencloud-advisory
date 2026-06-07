import Nav from './components/Nav'
import Hero from './components/Hero'
import CredibilityBand from './components/CredibilityBand'
import AiDeliverySection from './components/AiDeliverySection'
import AdvisoryServices from './components/AdvisoryServices'
import EngagementOffers from './components/EngagementOffers'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityBand />
        <AiDeliverySection />
        <AdvisoryServices />
        <EngagementOffers />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
