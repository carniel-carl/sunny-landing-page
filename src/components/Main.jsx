import React from "react";

import img1 from "./../assets/images/desktop/image-transform.jpg";
import img2 from "./../assets/images/desktop/image-stand-out.jpg";
import graphic from "./../assets/images/desktop/image-graphic-design.jpg";
import photography from "./../assets/images/desktop/image-photography.jpg";
import img1mobile from "./../assets/images/mobile/image-transform.jpg";
import img2mobile from "./../assets/images/mobile/image-stand-out.jpg";
import graphicmobile from "./../assets/images/mobile/image-graphic-design.jpg";
import photographymobile from "./../assets/images/mobile/image-photography.jpg";

import "./../assets/styles/Main.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="text-container">
          <h2> Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="/">Learn more</a>
        </div>
      </div>
      <div className="container">
        <picture>
          <source media="(max-width: 500px)" srcSet={img1mobile} />
          <img src={img1} alt="egg picyure" />
        </picture>
      </div>
      <div className="container">
        <picture>
          <source media="(max-width: 500px)" srcSet={img2mobile} />
          <img src={img2} alt="egg picyure" />
        </picture>
      </div>
      <div className="container">
        <div className="text-container red-underline">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="/">Learn more</a>
        </div>
      </div>
      <div className="container container-footer">
        <picture>
          <source media="(max-width: 500px)" srcSet={graphicmobile} />
          <img src={graphic} alt="egg picyure" />
        </picture>

        <div className="text-content">
          <h3> Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="container container-footer">
        <picture>
          <source media="(max-width: 500px)" srcSet={photographymobile} />
          <img src={photography} alt="egg picyure" />
        </picture>

        <div className="text-content">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
