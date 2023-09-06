import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyInactive = ({ className, text = "Filter name" }) => {
  return (
    <div className={`property-inactive ${className}`}>
      <div className="frame-3">
        <div className="frame-4" />
      </div>
      <div className="filter-name">{text}</div>
    </div>
  );
};

PropertyInactive.propTypes = {
  text: PropTypes.string,
};
