import PropTypes from "prop-types";
import React from "react";

export const Icons13 = ({ color = "#111111", className }) => {
  return (
    <svg
      className={`icons-13 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icons13.propTypes = {
  color: PropTypes.string,
};