import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WorkspaceFeatures from './components/WorkspaceFeatures'
import CTA from './components/CTA'
import TeamUp from './components/TeamUp'
import TeamSection from './components/TeamSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <WorkspaceFeatures/>
    <TeamUp/>
    <CTA/>
    <TeamSection/>
    <Footer/>
    </>
  )
}

export default App
