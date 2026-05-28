import Nav from './components/Nav'
import Hero from './components/Hero'
import ClientJourneyBand from './components/ClientJourneyBand'
import RoleClarity from './components/RoleClarity'
import AdvisoryServices from './components/AdvisoryServices'
import EcosystemMap from './components/EcosystemMap'
import VafStrip from './components/VafStrip'
import ToolsSection from './components/ToolsSection'
import InsightsSection from './components/InsightsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientJourneyBand />
        <RoleClarity />
        <AdvisoryServices />
        <EcosystemMap />
        <VafStrip />
        <ToolsSection />
        <InsightsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
