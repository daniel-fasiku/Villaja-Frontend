import React from "react";

export const IconBigCube = ({ className }) => {
  return (
    <svg
      className={`icon-big-cube ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 32.8232V15.1768C6 14.4505 6.39378 13.7812 7.02872 13.4285L23.0287 4.5396C23.6328 4.20402 24.3672 4.20402 24.9713 4.5396L40.9713 13.4285C41.6062 13.7812 42 14.4505 42 15.1768V32.8232C42 33.5495 41.6062 34.2188 40.9713 34.5715L24.9713 43.4604C24.3672 43.796 23.6328 43.796 23.0287 43.4604L7.02871 34.5715C6.39378 34.2188 6 33.5495 6 32.8232Z"
        stroke="black"
        strokeWidth="3"
      />
      <path className="path" d="M24 24L6 14M24 24V44M24 24L42 14" stroke="black" strokeWidth="3" />
    </svg>
  );
};
