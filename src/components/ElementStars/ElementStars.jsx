import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementStars = ({
  property1,
  star = "/img/star-1-14.svg",
  img = "/img/star-2-7.svg",
  star1 = "/img/star-3-14.svg",
  star2 = "/img/star-4-14.svg",
  star3 = "/img/star-5-7.svg",
  className,
  starClassName,
  starClassNameOverride,
  imgClassName,
  imgClassNameOverride,
  starClassName1,
  star4 = "/img/star-1-6.svg",
  star5 = "/img/star-2-6.svg",
  star6 = "/img/star-3-6.svg",
  star7 = "/img/star-4-6.svg",
}) => {
  return (
    <div className={`element-stars ${className}`}>
      {(property1 === "dynamic-default" ||
        property1 === "five-stars" ||
        property1 === "four-stars" ||
        property1 === "one-star" ||
        property1 === "static-default" ||
        property1 === "three-stars" ||
        property1 === "two-stars") && (
        <>
          <img
            className={`star ${starClassName}`}
            alt="Star"
            src={["dynamic-default", "static-default"].includes(property1) ? star : star4}
          />
          <img
            className={`img ${starClassNameOverride}`}
            alt="Star"
            src={["dynamic-default", "one-star", "static-default"].includes(property1) ? img : star5}
          />
          <img
            className={`star-2 ${imgClassName}`}
            alt="Star"
            src={["five-stars", "four-stars", "three-stars"].includes(property1) ? star6 : star1}
          />
          <img
            className={`star-3 ${imgClassNameOverride}`}
            alt="Star"
            src={["five-stars", "four-stars"].includes(property1) ? star7 : star2}
          />
          <img
            className={`star-4 ${starClassName1}`}
            alt="Star"
            src={property1 === "five-stars" ? "/img/star-5-6.svg" : star3}
          />
        </>
      )}

      {property1 === "review-with-no" && (
        <>
          <img className="star" alt="Star" src="/img/star-1-14.svg" />
          <img className="img" alt="Star" src="/img/star-2-7.svg" />
          <img className="star-2" alt="Star" src="/img/star-3-14.svg" />
          <img className="star-3" alt="Star" src="/img/star-4-14.svg" />
          <img className="star-4" alt="Star" src="/img/star-5-7.svg" />
          <div className="text-wrapper-6">900,000</div>
        </>
      )}
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
  star4: PropTypes.string,
  star5: PropTypes.string,
  star6: PropTypes.string,
  star7: PropTypes.string,
};
