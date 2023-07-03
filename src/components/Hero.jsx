import React from "react";
import NavBar from "./NavBar";

import mobileBg from "./../assets/images/mobile/image-header.jpg";
import Bg from "./../assets/images/desktop/image-header.jpg";
import arrow from "./../assets/images/icon-arrow-down.svg";

import "./../assets/styles/Hero.scss";

const Hero = () => {
  return (
    <header className="hero">
      <NavBar />

      <h1 className="hero__title">We are creatives</h1>

      <div className="hero__arrow">
        <img src={arrow} alt="arrow icon" />
      </div>

      <picture className="bg">
        <source media="(max-width: 500px)" srcSet={mobileBg} />
        <img src={Bg} alt="Orange background" />
      </picture>
    </header>
  );
};

export default Hero;
