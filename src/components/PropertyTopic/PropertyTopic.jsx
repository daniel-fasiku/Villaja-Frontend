import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyTopic = ({ className, text = "Category" }) => {
  return (
    <div className={`property-topic ${className}`}>
      <div className="category">{text}</div>
    </div>
  );
};

PropertyTopic.propTypes = {
  text: PropTypes.string,
};
