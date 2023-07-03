import React from "react";

import img1 from "./../assets/images/desktop/image-gallery-milkbottles.jpg";
import img2 from "./../assets/images/desktop/image-gallery-orange.jpg";
import img3 from "./../assets/images/desktop/image-gallery-cone.jpg";
import img4 from "./../assets/images/desktop/image-gallery-sugar-cubes.jpg";
import img1mobile from "./../assets/images/mobile/image-gallery-milkbottles.jpg";
import img2mobile from "./../assets/images/mobile/image-gallery-orange.jpg";
import img3mobile from "./../assets/images/mobile/image-gallery-cone.jpg";
import img4mobile from "./../assets/images/mobile/image-gallery-sugar-cubes.jpg";

import "./../assets/styles/Gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="image">
        <picture>
          <source media="(max-width: 500px)" srcSet={img1mobile} />
          <img src={img1} alt="bottle photo" aria-label="bottle photo" />
        </picture>
      </div>
      <div className="image">
        <picture>
          <source media="(max-width: 500px)" srcSet={img2mobile} />
          <img src={img2} alt="bottle photo" aria-label="bottle photo" />
        </picture>
      </div>
      <div className="image">
        <picture>
          <source media="(max-width: 500px)" srcSet={img3mobile} />
          <img src={img3} alt="bottle photo" aria-label="bottle photo" />
        </picture>
      </div>
      <div className="image">
        <picture>
          <source media="(max-width: 500px)" srcSet={img4mobile} />
          <img src={img4} alt="bottle photo" aria-label="bottle photo" />
        </picture>
      </div>
    </section>
  );
};

export default Gallery;
