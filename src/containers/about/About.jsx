import React from "react";
import './about.css';
 
import heart from '../../assets/about-heart.png'
import makingCake from '../../assets/about-making-cake.jpg'

const About = () => {
  return (
    <div className="about-container" id="about-us">
      <div className="about-box">
        <div className="about-left-container">
            <div className="about-title-container">
              <p className="about-title">Homemade dan dibuat dengan </p>
              <img className="about-heart" src={heart} />
            </div>
            <p className="about-description">
              Dengan lebih dari 7 tahun pengalaman, kami Bear Brownies selalu menyediakan berbagai macam kue
              yang dibuat hanya dengan bahan-bahan berkualitas dan tanpa bahan pengawet.
            </p>
            <p className="about-description">
              Memastikan rasa yang tidak teralahkan dengan harga yang terjangkau.
            </p>
          </div>
          <div className="about-right-container">
            <img className="about-making-cake" src={makingCake} />
          </div>
      </div>
        
    </div>
  );
};

export default About;