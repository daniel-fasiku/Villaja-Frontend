import React from "react";

export const IconImage = ({ className }) => {
  return (
    <svg
      className={`icon-image ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.5 21.5H21.5V2.5H2.5V21.5Z"
        fillRule="evenodd"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M10.5 14.5L7 11L2.5 16.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M21.5 16.5L15 9L9 16.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle className="circle" cx="8.5" cy="6.5" r="1.5" stroke="#111111" strokeWidth="1.5" />
    </svg>
  );
};
