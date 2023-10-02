import React from "react";
import './hero.css';

import heroCake from '../../assets/hero-chocolate-cake.png'
 
const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-left">
          <p className="hero-title">Membuat imajinasi menjadi kenyataan</p>
          <p className="hero-description">Di Bear Brownies, kami senantiasa menciptakan beragam varian kue sesuai dengan keinginan dan selera Anda.</p>
          <a className="hero-button-container">
            <p className="hero-button-text">Pesan Sekarang</p>
          </a>
        </div>
        <div className="hero-right">
          <img className="hero-cake" src={heroCake} />
        </div>
    </div>
  );
};

export default Hero;