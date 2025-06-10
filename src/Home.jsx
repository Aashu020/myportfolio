import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function Home() {

  return (
    <div className={`min-vh-100`} style={{backgroundColor:"rgb(252,250,246)"}}>
      <Navbar />
      <HeroSection />
      <Skills />
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
