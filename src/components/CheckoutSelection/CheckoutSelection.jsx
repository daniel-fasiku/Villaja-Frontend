/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { PropertyRadio } from "../PropertyRadio";
import { PropertyRadioWrapper } from "../PropertyRadioWrapper";
import "./style.css";

export const CheckoutSelection = ({ property1, className, text = "default", onClick }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "selection-inactive",
  });

  return (
    <div
      className={`checkout-selection ${className}`}
      onClick={onClick}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "selection-inactive" && <PropertyRadioWrapper className="side-bar-comps" />}

      {state.property1 === "selection-hover" && (
        <div className="side-bar-comps-2">
          <div className="overlap-group-5">
            <div className="frame-12" />
            <div className="ellipse-3" />
          </div>
        </div>
      )}

      {["selection-hover", "selection-inactive"].includes(state.property1) && <div className="default-9">{text}</div>}

      {state.property1 === "selected" && (
        <>
          <PropertyRadio className="side-bar-comps" />
          <div className="default-9">{text}</div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "selection-inactive") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "selection-hover",
        };
    }
  }

  if (state.property1 === "selection-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "selection-inactive",
        };

      case "click":
        return {
          property1: "selected",
        };
    }
  }

  return state;
}

CheckoutSelection.propTypes = {
  property1: PropTypes.oneOf(["selection-inactive", "selection-hover", "selected"]),
  text: PropTypes.string,
};
