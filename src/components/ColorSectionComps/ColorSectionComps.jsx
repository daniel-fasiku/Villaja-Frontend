import PropTypes from "prop-types";
import React from "react";
import { PropertyInactive } from "../PropertyInactive";
import { PropertyTopic } from "../PropertyTopic";
import "./style.css";

export const ColorSectionComps = ({ property1 }) => {
  return (
    <div className={`color-section-comps ${property1}`}>
      {property1 === "color-section-pt-1" && (
        <>
          <div className="overlap-group-7">
            <div className="group-8">
              <PropertyInactive className="side-bar-comps-12" text="Black" />
              <PropertyInactive className="side-bar-comps-13" text="White" />
              <PropertyInactive className="side-bar-comps-14" text="Grey" />
              <PropertyInactive className="side-bar-comps-15" text="Silver" />
              <PropertyInactive className="side-bar-comps-16" text="Gold" />
              <PropertyInactive className="side-bar-comps-17" text="Red" />
              <PropertyInactive className="side-bar-comps-18" text="Blue" />
              <PropertyInactive className="side-bar-comps-19" text="Purple" />
              <PropertyInactive className="side-bar-comps-20" text="Yellow" />
              <PropertyInactive className="side-bar-comps-21" text="Green" />
              <PropertyInactive className="side-bar-comps-22" text="Pink" />
              <PropertyInactive className="side-bar-comps-23" text="Multi" />
            </div>
            <div className="frame-14">
              <div className="scroll-bar-3" />
            </div>
          </div>
          <PropertyTopic className="side-bar-comps-12" text="Color" />
        </>
      )}

      {property1 === "color-section-pt-2" && (
        <div className="overlap-group-8">
          <div className="group-8">
            <PropertyInactive className="side-bar-comps-12" text="Black" />
            <PropertyInactive className="side-bar-comps-13" text="White" />
            <PropertyInactive className="side-bar-comps-14" text="Grey" />
            <PropertyInactive className="side-bar-comps-15" text="Silver" />
            <PropertyInactive className="side-bar-comps-16" text="Gold" />
            <PropertyInactive className="side-bar-comps-17" text="Red" />
            <PropertyInactive className="side-bar-comps-18" text="Blue" />
            <PropertyInactive className="side-bar-comps-19" text="Purple" />
            <PropertyInactive className="side-bar-comps-20" text="Yellow" />
            <PropertyInactive className="side-bar-comps-21" text="Green" />
            <PropertyInactive className="side-bar-comps-22" text="Pink" />
            <PropertyInactive className="side-bar-comps-23" text="Multi" />
          </div>
          <PropertyTopic className="side-bar-comps-18" text="Color" />
          <div className="frame-15">
            <div className="scroll-bar-4" />
          </div>
        </div>
      )}
    </div>
  );
};

ColorSectionComps.propTypes = {
  property1: PropTypes.oneOf(["color-section-pt-2", "color-section-pt-1"]),
};
