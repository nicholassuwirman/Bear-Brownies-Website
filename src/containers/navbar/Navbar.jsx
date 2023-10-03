import React, { useState } from "react";
import './navbar.css';
import {Link} from 'react-scroll'; /* npm install react-scroll */

import navbarLogo from '../../assets/navbar-logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => {
  return (
      <>  {/* to itu basically href. Codenya dicopy dari https://www.npmjs.com/package/react-scroll.Janlup npm install react-scroll */}
        <Link to="product" spy={true} smooth={true} duration={500} className="navbar-text">Produk</Link>
        <Link to="about-us" spy={true} smooth={true} duration={500} className="navbar-text">Tentang Kami</Link>
        <Link to="" spy={true} smooth={true} duration={500} className="navbar-text">Pertanyaan"</Link>
        <Link to="" spy={true} smooth={true} duration={500} className="navbar-text">Kontak Kami</Link>
      </>
  )
}

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img className="navbar-logo" src={navbarLogo} />
      </div>
      <div className="navbar-right">
        <Menu />
      </div>

      <div className="navbar-mobile-menu">
        {toggleMenu
            ? <RiCloseLine color="#4A1D1F" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#4A1D1F" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
            <div className="navbar-mobile-container">
              <Menu />
            </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
