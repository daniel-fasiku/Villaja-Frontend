import PropTypes from "prop-types";
import React from "react";
import { Icons4 } from "../../icons/Icons4";
import "./style.css";

export const IconButton = ({ className, icons4StyleOverrideClassName, icons4Color = "#1A6934" }) => {
  return (
    <div className={`icon-button ${className}`}>
      <Icons4 className={icons4StyleOverrideClassName} color={icons4Color} />
    </div>
  );
};

IconButton.propTypes = {
  icons4Color: PropTypes.string,
};
