import PropTypes from "prop-types";
import React from "react";

export const IconChevronLeft = ({ color = "#111111", className }) => {
  return (
    <svg
      className={`icon-chevron-left ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconChevronLeft.propTypes = {
  color: PropTypes.string,
};
