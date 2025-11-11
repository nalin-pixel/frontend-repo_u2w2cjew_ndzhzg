import Page from '../components/Page'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import Comparison from '../components/Comparison'
import ServerMap from '../components/ServerMap'
import SpeedTest from '../components/SpeedTest'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'

export default function Home(){
  return (
    <div className="bg-white text-slate-900">
      <Page>
        <Hero />
        <FeatureCards />
        <Comparison />
        <ServerMap />
        <SpeedTest />
        <Testimonials />
        <FinalCTA />
      </Page>
    </div>
  )
}
