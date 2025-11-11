import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import Comparison from '../components/Comparison'
import ServerMap from '../components/ServerMap'
import SpeedTest from '../components/SpeedTest'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <Comparison />
        <ServerMap />
        <SpeedTest />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
