import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyApply = ({ className, text = "Category" }) => {
  return (
    <div className={`property-apply ${className}`}>
      <div className="category-5">{text}</div>
      <div className="frame-6">
        <div className="text-wrapper-18">Apply</div>
      </div>
    </div>
  );
};

PropertyApply.propTypes = {
  text: PropTypes.string,
};
