import React, {useRef} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import Features from './components/Features/Features';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


function App() {
  // Crear referencias para cada sección
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  // Función para hacer scroll hasta la sección seleccionada
  const scrollToSection = (section) => {
    if (section === "home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "features") featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      
      <Navbar scrollToSection={scrollToSection} />
       <div ref={homeRef}><Home /></div>
       <HeroSection/>
       <div ref={aboutRef}><AboutUs /></div>
      <div ref={featuresRef}><Features /></div>
      <div ref={contactRef}><ContactForm /></div>

      
      <Footer />
    </div>
  );
}

export default App;
