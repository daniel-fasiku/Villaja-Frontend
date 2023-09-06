import PropTypes from "prop-types";
import React from "react";

export const Icons4 = ({ color = "#1A6934", className }) => {
  return (
    <svg
      className={`icons-4 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 6L9 12L15 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icons4.propTypes = {
  color: PropTypes.string,
};
