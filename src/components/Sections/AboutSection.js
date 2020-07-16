import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import jasonMobile from "../../styles/img/jason-wood-mb.jpg";
import jasonTablet from "../../styles/img/jason-wood-lg.jpg";
import { Scroller } from "../Scroller/Scroller";

export const AboutSection = () => {
  return (
    <section className="section section-about">
      <div className="section-img-wrapper">
        <LazyLoadComponent>
          <picture>
            <source srcSet={jasonTablet} media="(min-width: 425px)" />
            <source srcSet={jasonMobile} />
            <img className="hero-img" src={jasonTablet} alt="Jason Wood" />
          </picture>
        </LazyLoadComponent>
      </div>
      <article>
        <h1 className="section-about-title">About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="mobile-hidden">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p className="sign">Jason Wood</p>
      </article>
      <Scroller>keep scrolling, there is still more to come.</Scroller>
    </section>
  );
};
