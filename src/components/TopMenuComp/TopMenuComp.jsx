import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TopMenuComp = ({ className, divClassName, text = "top menu comp" }) => {
  return (
    <div className={`top-menu-comp ${className}`}>
      <div className="top-menu-comp-wrapper">
        <div className={`text-wrapper-17 ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

TopMenuComp.propTypes = {
  text: PropTypes.string,
};
