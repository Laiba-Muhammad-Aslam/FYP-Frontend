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
import Collaboration from './components/Collaboration'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WorkspaceFeatures />
      <Collaboration />
      <TeamUp />
      <TeamSection />
      <CTA />
      <Footer />
    </>
  );
}

export default App
