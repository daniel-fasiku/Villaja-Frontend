import PropTypes from "prop-types";
import React from "react";
import { PropertyInactive } from "../PropertyInactive";
import { PropertyTopic } from "../PropertyTopic";
import "./style.css";

export const BrandSectionComps = ({ property1 }) => {
  return (
    <div className={`brand-section-comps ${property1}`}>
      {["brand-section-pt-1", "variant-3"].includes(property1) && (
        <>
          <div className="overlap-group-3">
            {property1 === "brand-section-pt-1" && (
              <>
                <div className="group-7">
                  <PropertyInactive className="side-bar-comps-2" text="Apple" />
                  <PropertyInactive className="side-bar-comps-3" text="Blackberry" />
                  <PropertyInactive className="property-1-inactive-filter" text="Infinix" />
                  <PropertyInactive className="property-inactive-instance" text="Nokia" />
                  <PropertyInactive className="property-1-inactive-filter-instance" text="Oppa" />
                  <PropertyInactive className="side-bar-comps-4" text="Samsung" />
                  <PropertyInactive className="side-bar-comps-5" text="Techno" />
                </div>
                <div className="scroll-bar-wrapper">
                  <div className="scroll-bar" />
                </div>
              </>
            )}

            {property1 === "variant-3" && (
              <>
                <PropertyInactive className="side-bar-comps-2" text="Apple" />
                <PropertyInactive className="side-bar-comps-3" text="Blackberry" />
                <PropertyInactive className="property-1-inactive-filter" text="Infinix" />
                <PropertyInactive className="property-inactive-instance" text="Nokia" />
                <PropertyInactive className="property-1-inactive-filter-instance" text="Oppa" />
                <PropertyInactive className="side-bar-comps-4" text="Samsung" />
                <PropertyInactive className="side-bar-comps-5" text="Techno" />
              </>
            )}
          </div>
          <PropertyTopic className="side-bar-comps-2" text="Brand" />
        </>
      )}

      {property1 === "variant-2" && (
        <div className="overlap-group-4">
          <div className="group-7">
            <PropertyInactive className="side-bar-comps-2" text="Apple" />
            <PropertyInactive className="side-bar-comps-3" text="Blackberry" />
            <PropertyInactive className="property-1-inactive-filter" text="Infinix" />
            <PropertyInactive className="property-inactive-instance" text="Nokia" />
            <PropertyInactive className="property-1-inactive-filter-instance" text="Oppa" />
            <PropertyInactive className="side-bar-comps-4" text="Samsung" />
            <PropertyInactive className="side-bar-comps-5" text="Techno" />
          </div>
          <PropertyTopic className="side-bar-comps-3" text="Brand" />
          <div className="frame-5">
            <div className="scroll-bar-2" />
          </div>
        </div>
      )}
    </div>
  );
};

BrandSectionComps.propTypes = {
  property1: PropTypes.oneOf(["brand-section-pt-1", "variant-2", "variant-3"]),
};
