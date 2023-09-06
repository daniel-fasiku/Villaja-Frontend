import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyCategory = ({ className, text = "Category", onClick }) => {
  return (
    <div className={`property-category ${className}`} onClick={onClick}>
      <div className="category-3">{text}</div>
    </div>
  );
};

PropertyCategory.propTypes = {
  text: PropTypes.string,
};
