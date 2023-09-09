import PropTypes from "prop-types";
import React from "react";

export const IconVariant31 = ({ color = "#111111", className }) => {
  return (
    <svg
      className={`icon-variant3-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 9L12 15L18 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconVariant31.propTypes = {
  color: PropTypes.string,
};
