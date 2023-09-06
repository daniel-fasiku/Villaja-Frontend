import PropTypes from "prop-types";
import React from "react";
import { BiggerHero } from "../BiggerHero";
import { Buttons } from "../Buttons";
import { Logo } from "../Logo";
import "./style.css";

export const Hero = ({ property1, className, biggerHeroPropertyPhonesult = "/img/bigger-hero-animation-1.svg" }) => {
  return (
    <div className={`hero ${property1} ${className}`}>
      <Logo className="logo-instance" />
      {property1 === "default" && <div className="pic" />}

      <div className="group-2">
        <p className="from-sellers-you-can"> from sellers you can trust</p>
        <BiggerHero
          property1="phonesult"
          propertyPhonesult={property1 === "default" ? "/img/bigger-hero-animation-2.svg" : biggerHeroPropertyPhonesult}
        />
      </div>
      <div className="pic-2">
        {property1 === "variant-1" && <img className="iphone" alt="Iphone" src="/img/iphone-1-45.png" />}

        {property1 === "default" && (
          <>
            <div className="frame-wrapper">
              <div className="frame">
                <img className="bx-search" alt="Bx search" src="/img/bx-search-10.svg" />
                <div className="default-2">Search...</div>
              </div>
            </div>
            <Buttons className="buttons-instance" property1="default-filled" text="GO" />
          </>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  property1: PropTypes.oneOf(["variant-1", "default"]),
  biggerHeroPropertyPhonesult: PropTypes.string,
};
