import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Property } from "../Property";
import { PropertyTopic } from "../PropertyTopic";
import "./style.css";

export const DiscountSection = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className="discount-section">
      {state.property1 === "default" && <PropertyTopic className="property-1-topic" text="Discount" />}

      {["discounted-only", "top-deals"].includes(state.property1) && (
        <div className="side-bar-comps-6">
          <div className="category-6">Discount</div>
          <div className="frame-11">
            <div className="text-wrapper-20">Reset</div>
          </div>
        </div>
      )}

      {state.property1 === "top-deals" && (
        <div className="side-bar-comps-7">
          <div className="side-bar-comps-8">
            <div className="overlap-group-6">
              <div className="frame-12" />
            </div>
          </div>
          <div className="filter-name-3">Top Deals</div>
        </div>
      )}

      <Property
        className={`${state.property1 === "top-deals" ? "property-variant" : "class-7"}`}
        onClick={() => {
          dispatch("click_2025");
        }}
        text={state.property1 === "top-deals" ? "Discounted Items Only" : "Top Deals"}
      />
      {state.property1 === "discounted-only" && (
        <div className="side-bar-comps-9">
          <div className="side-bar-comps-8">
            <div className="overlap-group-6">
              <div className="frame-12" />
            </div>
          </div>
          <div className="filter-name-3">Discounted Items Only</div>
        </div>
      )}

      {state.property1 === "default" && (
        <Property
          className="property-variant"
          onClick={() => {
            dispatch("click_2025");
          }}
          text="Discounted Items Only"
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "top-deals",
      };

    case "click_2025":
      return {
        ...state,
        property1: "discounted-only",
      };
  }

  return state;
}

DiscountSection.propTypes = {
  property1: PropTypes.oneOf(["discounted-only", "top-deals", "default"]),
};
