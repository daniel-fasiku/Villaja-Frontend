import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementStars = ({
  property1,
  star = "/img/star-2-18.svg",
  img = "/img/star-3-18.svg",
  className,
  star1 = "/img/star-5-18.svg",
  star2 = "/img/star-1-18.svg",
  star3 = "/img/star-4-18.svg",
}) => {
  return (
    <div className={`element-stars ${className}`}>
      <img
        className="star"
        alt="Star"
        src={
          property1 === "review-with-no"
            ? "/img/star-1-18.svg"
            : ["dynamic-default", "static-default"].includes(property1)
            ? star2
            : "/img/star-1-19.svg"
        }
      />
      <img
        className="star-2"
        alt="Star"
        src={
          ["dynamic-default", "one-star", "static-default"].includes(property1)
            ? star
            : property1 === "review-with-no"
            ? "/img/star-2-18.svg"
            : "/img/star-2-19.svg"
        }
      />
      <img
        className="star-3"
        alt="Star"
        src={
          ["five-stars", "four-stars", "three-stars"].includes(property1)
            ? "/img/star-3-19.svg"
            : property1 === "review-with-no"
            ? "/img/star-3-18.svg"
            : img
        }
      />
      <img
        className="star-4"
        alt="Star"
        src={
          ["five-stars", "four-stars"].includes(property1)
            ? "/img/star-4-19.svg"
            : property1 === "review-with-no"
            ? "/img/star-4-18.svg"
            : star3
        }
      />
      <img
        className="star-5"
        alt="Star"
        src={
          property1 === "five-stars"
            ? "/img/star-5-19.svg"
            : property1 === "review-with-no"
            ? "/img/star-5-18.svg"
            : star1
        }
      />
      {property1 === "review-with-no" && <div className="text-wrapper-6">900,000</div>}
    </div>
  );
};

ElementStars.propTypes = {
  property1: PropTypes.oneOf([
    "static-default",
    "four-stars",
    "one-star",
    "dynamic-default",
    "five-stars",
    "review-with-no",
    "three-stars",
    "two-stars",
  ]),
  star: PropTypes.string,
  img: PropTypes.string,
  star1: PropTypes.string,
  star2: PropTypes.string,
  star3: PropTypes.string,
};
