import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Buttons = ({ property1, className, text = "ADD TO CART" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default-filled",
  });

  return (
    <div
      className={`buttons ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="ADD-TO-CART">
        {(state.property1 === "default-filled" ||
          state.property1 === "default-ghost" ||
          state.property1 === "large-filled-hover" ||
          state.property1 === "large-filled" ||
          state.property1 === "smaall-outlined" ||
          state.property1 === "small-filled" ||
          state.property1 === "small-ghost" ||
          state.property1 === "xsmall-filled" ||
          state.property1 === "xsmall-outlined") && <>{text}</>}

        {["default-inactive", "large-inactive", "small-inactive"].includes(state.property1) && <>OUT OF STOCK</>}

        {["default-outlined", "large-outlined-hover", "large-outlined"].includes(state.property1) && <>BUY NOW</>}

        {["checkout-default", "default-filled-hover"].includes(state.property1) && <>CHECKOUT</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "large-filled") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "large-filled-hover",
        };
    }
  }

  if (state.property1 === "large-filled-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "large-filled",
        };
    }
  }

  if (state.property1 === "checkout-default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "default-filled-hover",
        };
    }
  }

  if (state.property1 === "default-filled-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "checkout-default",
        };
    }
  }

  if (state.property1 === "large-outlined") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "large-outlined-hover",
        };
    }
  }

  if (state.property1 === "large-outlined-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "large-outlined",
        };
    }
  }

  return state;
}

Buttons.propTypes = {
  property1: PropTypes.oneOf([
    "smaall-outlined",
    "large-filled",
    "large-inactive",
    "large-outlined",
    "checkout-default",
    "small-ghost",
    "small-filled",
    "xsmall-outlined",
    "default-ghost",
    "default-inactive",
    "large-outlined-hover",
    "xsmall-filled",
    "default-filled-hover",
    "default-filled",
    "default-outlined",
    "large-filled-hover",
    "small-inactive",
  ]),
  text: PropTypes.string,
};
