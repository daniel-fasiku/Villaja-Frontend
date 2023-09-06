import React from "react";

export const VariantAvatar = ({ className }) => {
  return (
    <svg
      className={`variant-avatar ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_579_7472)">
        <circle
          className="circle"
          cx="32"
          cy="32"
          fill="white"
          r="30"
          stroke="#D5D5DE"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          className="path"
          d="M46 49V46.3016C46 44.3651 45.1825 42.5079 43.7274 41.1386C42.2723 39.7693 40.2987 39 38.2409 39H25.7591C23.7013 39 21.7277 39.7693 20.2726 41.1386C18.8175 42.5079 18 44.3651 18 46.3016V49"
          stroke="#ABABB5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          className="path"
          d="M32 31C36.4183 31 40 27.4183 40 23C40 18.5817 36.4183 15 32 15C27.5817 15 24 18.5817 24 23C24 27.4183 27.5817 31 32 31Z"
          stroke="#ABABB5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_579_7472">
          <rect className="rect" fill="white" height="64" width="64" />
        </clipPath>
      </defs>
    </svg>
  );
};
