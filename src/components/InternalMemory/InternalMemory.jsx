import PropTypes from "prop-types";
import React from "react";
import { PropertyInactive } from "../PropertyInactive";
import { PropertyTopic } from "../PropertyTopic";
import "./style.css";

export const InternalMemory = ({ property1 }) => {
  return (
    <div className={`internal-memory ${property1}`}>
      {property1 === "memory-section-pt-1" && (
        <>
          <div className="overlap-group-9">
            <div className="group-9">
              <PropertyInactive className="side-bar-comps-24" text="4 GB" />
              <PropertyInactive className="side-bar-comps-25" text="8 GB" />
              <PropertyInactive className="side-bar-comps-26" text="16 GB" />
              <PropertyInactive className="side-bar-comps-27" text="32 GB" />
              <PropertyInactive className="side-bar-comps-28" text="64 GB" />
              <PropertyInactive className="side-bar-comps-29" text="128 GB" />
              <PropertyInactive className="side-bar-comps-30" text="256 GB" />
              <PropertyInactive className="side-bar-comps-31" text="512 GB" />
              <PropertyInactive className="side-bar-comps-32" text="1 TB" />
            </div>
            <div className="frame-16">
              <div className="scroll-bar-5" />
            </div>
          </div>
          <PropertyTopic className="side-bar-comps-24" text="Internal Memory" />
        </>
      )}

      {property1 === "variant-2" && (
        <div className="overlap-group-10">
          <div className="group-9">
            <PropertyInactive className="side-bar-comps-24" text="4 GB" />
            <PropertyInactive className="side-bar-comps-25" text="8 GB" />
            <PropertyInactive className="side-bar-comps-26" text="16 GB" />
            <PropertyInactive className="side-bar-comps-27" text="32 GB" />
            <PropertyInactive className="side-bar-comps-28" text="64 GB" />
            <PropertyInactive className="side-bar-comps-29" text="128 GB" />
            <PropertyInactive className="side-bar-comps-30" text="256 GB" />
            <PropertyInactive className="side-bar-comps-31" text="512 GB" />
            <PropertyInactive className="side-bar-comps-32" text="1 TB" />
          </div>
          <div className="frame-17">
            <div className="scroll-bar-6" />
          </div>
          <PropertyTopic className="side-bar-comps-27" text="Internal Memory" />
        </div>
      )}
    </div>
  );
};

InternalMemory.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "memory-section-pt-1"]),
};
