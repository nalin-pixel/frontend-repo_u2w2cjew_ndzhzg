import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Download from './pages/Download'
import About from './pages/About'
import Blog from './pages/Blog'
import Support from './pages/Support'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/download" element={<Download />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  )
}
