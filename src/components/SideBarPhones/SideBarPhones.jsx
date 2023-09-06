import PropTypes from "prop-types";
import React from "react";
import { BrandSectionComps } from "../BrandSectionComps";
import { CategoryCompFor } from "../CategoryCompFor";
import { ColorSectionComps } from "../ColorSectionComps";
import { DiscountSection } from "../DiscountSection";
import { InternalMemory } from "../InternalMemory";
import { PropertyApply } from "../PropertyApply";
import { PropertyInactive } from "../PropertyInactive";
import { PropertyPrice } from "../PropertyPrice";
import { PropertyTopic } from "../PropertyTopic";
import { RatingSection } from "../RatingSection";
import "./style.css";

export const SideBarPhones = ({
  className,
  propertyPriceEllipse = "/img/ellipse-23.svg",
  ratingSectionPropertyNoStarElementStarsStar = "/img/star-5-46.svg",
  ratingSectionPropertyNoStarElementStarsImg = "/img/star-2-46.svg",
}) => {
  return (
    <div className={`side-bar-phones ${className}`}>
      <CategoryCompFor property1="default" />
      <BrandSectionComps property1="brand-section-pt-1" />
      <div className="price-section">
        <PropertyApply className="side-bar-comps-33" text="Price (₦)" />
        <PropertyPrice className="side-bar-comps-34" ellipse={propertyPriceEllipse} />
      </div>
      <DiscountSection property1="default" />
      <RatingSection
        property1="default"
        propertyNoStarElementStarsImg={ratingSectionPropertyNoStarElementStarsImg}
        propertyNoStarElementStarsStar={ratingSectionPropertyNoStarElementStarsStar}
      />
      <ColorSectionComps property1="color-section-pt-1" />
      <div className="screen-size-section">
        <PropertyTopic className="side-bar-comps-33" text="Display Size" />
        <div className="frame-18">
          <PropertyInactive className="side-bar-comps-33" text="4.7’’" />
          <PropertyInactive className="side-bar-comps-34" text="5.4’’" />
          <PropertyInactive className="side-bar-comps-35" text="6.1’’" />
          <PropertyInactive className="side-bar-comps-36" text="6.7’’" />
        </div>
      </div>
      <InternalMemory property1="memory-section-pt-1" />
      <div className="condition-section">
        <PropertyTopic className="side-bar-comps-33" text="Condition" />
        <div className="frame-19">
          <PropertyInactive className="side-bar-comps-33" text="New" />
          <PropertyInactive className="side-bar-comps-34" text="Refurbished" />
          <PropertyInactive className="side-bar-comps-35" text="Pre-Owned" />
        </div>
      </div>
    </div>
  );
};

SideBarPhones.propTypes = {
  propertyPriceEllipse: PropTypes.string,
  ratingSectionPropertyNoStarElementStarsStar: PropTypes.string,
  ratingSectionPropertyNoStarElementStarsImg: PropTypes.string,
};
