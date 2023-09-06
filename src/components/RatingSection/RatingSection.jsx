import PropTypes from "prop-types";
import React from "react";
import { ElementStars } from "../ElementStars";
import { PropertyNoStar } from "../PropertyNoStar";
import { PropertyTopic } from "../PropertyTopic";
import "./style.css";

export const RatingSection = ({
  property1,
  propertyNoStarElementStarsStar = "/img/star-5-46.svg",
  propertyNoStarElementStarsImg = "/img/star-2-46.svg",
}) => {
  return (
    <div className="rating-section">
      {property1 === "default" && (
        <>
          <PropertyTopic className="property-topic-instance" text="Rating" />
          <PropertyNoStar
            className="property-1-no-star"
            elementStarsImg={propertyNoStarElementStarsImg}
            elementStarsStar={propertyNoStarElementStarsStar}
          />
        </>
      )}

      {["four-star", "one-star", "three-star", "two-star"].includes(property1) && (
        <>
          <div className="side-bar-comps-10">
            <div className="category-7">Rating</div>
            <div className="frame-13">
              <div className="text-wrapper-21">Reset</div>
            </div>
          </div>
          <div className="side-bar-comps-11">
            <ElementStars
              className="element-stars-7"
              img={property1 === "one-star" ? "/img/star-2-46.svg" : undefined}
              imgClassName="element-stars-6"
              imgClassNameOverride="element-stars-8"
              property1={
                property1 === "two-star"
                  ? "two-stars"
                  : property1 === "three-star"
                  ? "three-stars"
                  : property1 === "four-star"
                  ? "four-stars"
                  : "one-star"
              }
              star1={["one-star", "two-star"].includes(property1) ? "/img/star-3-46.svg" : undefined}
              star2={["one-star", "three-star", "two-star"].includes(property1) ? "/img/star-4-46.svg" : undefined}
              star3="/img/star-5-46.svg"
              star4="/img/star-1-47.svg"
              star5={["four-star", "three-star", "two-star"].includes(property1) ? "/img/star-2-47.svg" : undefined}
              star6={["four-star", "three-star"].includes(property1) ? "/img/star-3-47.svg" : undefined}
              star7={property1 === "four-star" ? "/img/star-4-47.svg" : undefined}
              starClassName="element-stars-9"
              starClassName1="element-stars-11"
              starClassNameOverride="element-stars-10"
            />
            <div className="up-2">&amp; Up</div>
          </div>
        </>
      )}
    </div>
  );
};

RatingSection.propTypes = {
  property1: PropTypes.oneOf(["default", "two-star", "three-star", "one-star", "four-star"]),
  propertyNoStarElementStarsStar: PropTypes.string,
  propertyNoStarElementStarsImg: PropTypes.string,
};
