import PropTypes from "prop-types";
import React from "react";
import { PropertyRadio } from "../PropertyRadio";
import "./style.css";

export const Property = ({ className, text = "Filter name", onClick }) => {
  return (
    <div className={`property ${className}`} onClick={onClick}>
      <PropertyRadio className="property-1-radio-inactive" />
      <div className="filter-name-2">{text}</div>
    </div>
  );
};

Property.propTypes = {
  text: PropTypes.string,
};
