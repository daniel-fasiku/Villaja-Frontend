/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyInactive = ({ className, text = "Filter name", onClick }) => {
  return (
    <div className={`property-inactive ${className}`} onClick={onClick}>
      <div className="frame-13">
        <div className="frame-14" />
      </div>
      <div className="filter-name">{text}</div>
    </div>
  );
};

PropertyInactive.propTypes = {
  text: PropTypes.string,
};
