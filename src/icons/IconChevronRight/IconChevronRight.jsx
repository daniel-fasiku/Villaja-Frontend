import PropTypes from "prop-types";
import React from "react";

export const IconChevronRight = ({ color = "#111111", className }) => {
  return (
    <svg
      className={`icon-chevron-right ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.5 18L15.5 12L9.5 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconChevronRight.propTypes = {
  color: PropTypes.string,
};
