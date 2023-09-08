import PropTypes from "prop-types";
import React from "react";
import { IconVariant3 } from "../../icons/IconVariant3";
import "./style.css";

export const PropertyVertical = ({ text = "Popularity" }) => {
  return (
    <div className="property-vertical">
      <div className="text">{text}</div>
      <IconVariant3 className="icons" color="#ABABB5" />
    </div>
  );
};

PropertyVertical.propTypes = {
  text: PropTypes.string,
};
