import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertySubtopic = ({ className, text = "Category", onClick }) => {
  return (
    <div className={`property-subtopic ${className}`} onClick={onClick}>
      <div className="category-2">{text}</div>
    </div>
  );
};

PropertySubtopic.propTypes = {
  text: PropTypes.string,
};
