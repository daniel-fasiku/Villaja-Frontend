import PropTypes from "prop-types";
import React from "react";

export const Icons18 = ({ color = "#111111", className }) => {
  return (
    <svg
      className={`icons-18 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.5 18L9.5 12L15.5 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icons18.propTypes = {
  color: PropTypes.string,
};
