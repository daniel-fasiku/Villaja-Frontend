import PropTypes from "prop-types";
import React from "react";
import { IconVariant31 } from "../../icons/IconVariant31";
import "./style.css";

export const PropertyVertical = ({ text = "Popularity" }) => {
  return (
    <div className="property-vertical">
      <div className="text">{text}</div>
      <IconVariant31 className="icons" color="#ABABB5" />
    </div>
  );
};

PropertyVertical.propTypes = {
  text: PropTypes.string,
};
