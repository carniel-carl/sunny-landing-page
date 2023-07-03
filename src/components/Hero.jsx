import React from "react";
import NavBar from "./NavBar";

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
    </header>
  );
};

export default Hero;
