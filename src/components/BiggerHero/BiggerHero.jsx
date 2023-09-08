/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BiggerHero = ({ property1, propertyPhonesult = "/img/property-1-phonesult.svg" }) => {
  return (
    <img
      className="bigger-hero"
      alt="Property phonesult"
      src={
        property1 === "tablets"
          ? "/img/property-1-tablets.svg"
          : property1 === "laptops"
          ? "/img/property-1-laptops.svg"
          : property1 === "accessories"
          ? "/img/property-1-accessories.svg"
          : property1 === "buy"
          ? "/img/property-1-buy.svg"
          : propertyPhonesult
      }
    />
  );
};

BiggerHero.propTypes = {
  property1: PropTypes.oneOf(["buy", "tablets", "laptops", "accessories", "phonesult"]),
  propertyPhonesult: PropTypes.string,
};
