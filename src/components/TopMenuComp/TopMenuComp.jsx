/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TopMenuComp = ({ className, divClassName, text = "top menu comp" }) => {
  return (
    <div className={`top-menu-comp ${className}`}>
      <div className="top-menu-comp-wrapper">
        <div className={`text-wrapper-19 ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

TopMenuComp.propTypes = {
  text: PropTypes.string,
};
