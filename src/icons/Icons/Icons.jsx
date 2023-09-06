import React from "react";

export const Icons = ({ className }) => {
  return (
    <svg
      className={`icons ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M20 12.6667C20 14.8757 18.209 16.6667 16 16.6667C13.791 16.6667 12 14.8757 12 12.6667C12 10.4577 13.791 8.66667 16 8.66667C18.209 8.66667 20 10.4577 20 12.6667Z"
        fillRule="evenodd"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M24.6667 12.6667C24.6667 17.3062 16 28 16 28C16 28 7.33333 17.3062 7.33333 12.6667C7.33333 8.02711 11.228 4 16 4C20.772 4 24.6667 8.02711 24.6667 12.6667Z"
        fillRule="evenodd"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
