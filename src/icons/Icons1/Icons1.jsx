import PropTypes from "prop-types";
import React from "react";

export const Icons1 = ({ color = "url(#paint0_linear_1248_12928)", className }) => {
  return (
    <svg
      className={`icons-1 ${className}`}
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
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1248_12924"
          x1="12"
          x2="12"
          y1="6"
          y2="18"
        >
          <stop className="stop" stopColor="#00B4D8" />
          <stop className="stop" offset="1" stopColor="#0077B6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Icons1.propTypes = {
  color: PropTypes.string,
};
