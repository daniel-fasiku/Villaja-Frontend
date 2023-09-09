import React from "react";

export const Exit1 = ({ className }) => {
  return (
    <svg
      className={`exit-1 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="14" cy="14" fill="#D9D9D9" r="14" />
      <g className="g" clipPath="url(#clip0_31_565)">
        <path
          className="path"
          d="M21 8.41L19.59 7L14 12.59L8.41 7L7 8.41L12.59 14L7 19.59L8.41 21L14 15.41L19.59 21L21 19.59L15.41 14L21 8.41Z"
          fill="black"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_31_565">
          <rect className="rect" fill="white" height="24" transform="translate(2 2)" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
