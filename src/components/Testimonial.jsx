import React from "react";

import "./../assets/styles/Testimonial.scss";

import emily from "./../assets/images/image-emily.jpg";
import jennie from "./../assets/images/image-jennie.jpg";
import thomas from "./../assets/images/image-thomas.jpg";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <h2>Client testimonials</h2>
      <div className="testimonies">
        <div className="testimony">
          <div className="testimony__image">
            <img src={emily} alt="emily profile" />
          </div>
          <p className="testimony__description">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="testimony__profile">
            <h4 className="testimony__title">Emily R.</h4>
            <p className="testimony__role">Marketing Director</p>
          </div>
        </div>
        <div className="testimony">
          <div className="testimony__image">
            <img src={thomas} alt="emily profile" />
          </div>
          <p className="testimony__description">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className="testimony__profile">
            <h4 className="testimony__title">Thomas S.</h4>
            <p className="testimony__role">Chief Operating Officer</p>
          </div>
        </div>
        <div className="testimony">
          <div className="testimony__image">
            <img src={jennie} alt="emily profile" />
          </div>
          <p className="testimony__description">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="testimony__profile">
            <h4 className="testimony__title">Jennie F.</h4>
            <p className="testimony__role">Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
