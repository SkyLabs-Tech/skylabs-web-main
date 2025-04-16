import React, {useRef} from 'react';
import './Navbar.css'; // Aquí puedes agregar tus estilos CSS
import logo from '../Media/logo.png'

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <a href="/" className="sky-text">Sky</a>
          <a href="/" className="labs-text">Labs</a>
          <a className='developments-text'>Developments</a>
        </div>
      </div>

      <ul className="navbar-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
