import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const PropertyCategory = ({ className, text = "Category", to }) => {
  return (
    <Link className={`property-category ${className}`} to={to}>
      <div className="category-2">{text}</div>
    </Link>
  );
};

PropertyCategory.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
