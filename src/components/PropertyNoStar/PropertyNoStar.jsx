import PropTypes from "prop-types";
import React from "react";
import { ElementStars } from "../ElementStars";
import "./style.css";

export const PropertyNoStar = ({
  className,
  elementStarsStar = "/img/star-5-46.svg",
  elementStarsImg = "/img/star-2-46.svg",
}) => {
  return (
    <div className={`property-no-star ${className}`}>
      <ElementStars
        className="element-stars-instance"
        img={elementStarsImg}
        imgClassName="element-stars-3"
        imgClassNameOverride="element-stars-4"
        property1="dynamic-default"
        star="/img/star-1-46.svg"
        star1="/img/star-3-46.svg"
        star2="/img/star-4-46.svg"
        star3={elementStarsStar}
        starClassName="five-stars-instance"
        starClassName1="element-stars-5"
        starClassNameOverride="element-stars-2"
      />
      <div className="up">&amp; Up</div>
    </div>
  );
};

PropertyNoStar.propTypes = {
  elementStarsStar: PropTypes.string,
  elementStarsImg: PropTypes.string,
};
