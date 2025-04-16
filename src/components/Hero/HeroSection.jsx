import React from 'react';
import './HeroSection.css'; // Aquí van los estilos de la hero section

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">SkyLabs Developments</h1>
        <p className="hero-description">
        Imagination is our only limitation. Development is agile. Creation is art.
        </p>
        <a className="btn-primary" 
          href="https://www.canva.com/design/DAGafXVH-k4/BpbU-j7z05LpATfMqNxepg/view?utm_content=DAGafXVH-k4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd6210ddf59#1" 
          target="_blank" 
          rel="noopener noreferrer">Features</a>
      </div>
    </section>
  );
};

export default HeroSection;