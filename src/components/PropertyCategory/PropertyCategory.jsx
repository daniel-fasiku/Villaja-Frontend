import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyCategory = ({ className, text = "Category" }) => {
  return (
    <div className={`property-category ${className}`}>
      <div className="category-2">{text}</div>
    </div>
  );
};

PropertyCategory.propTypes = {
  text: PropTypes.string,
};
