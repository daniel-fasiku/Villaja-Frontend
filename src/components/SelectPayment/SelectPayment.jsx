/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CheckoutSelection } from "../CheckoutSelection";
import "./style.css";

export const SelectPayment = ({
  property1,
  className,
  checkoutSelectionProperty1 = "selection-inactive",
  visible = true,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`select-payment ${className}`}>
      <CheckoutSelection
        className="checkout-selection-comps"
        onClick={() => {
          dispatch("click");
        }}
        property1={checkoutSelectionProperty1}
        text="Pay with Debit Card"
      />
      {visible && (
        <CheckoutSelection
          className="checkout-selection-instance"
          onClick={() => {
            dispatch("click_557");
          }}
          property1={state.property1 === "bank-transfer" ? "selected" : "selection-inactive"}
          text="Pay with Bank Transfer"
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
        property1: "debit-card",
      };

    case "click_557":
      return {
        ...state,
        property1: "bank-transfer",
      };
  }

  return state;
}

SelectPayment.propTypes = {
  property1: PropTypes.oneOf(["bank-transfer", "debit-card", "default"]),
  checkoutSelectionProperty1: PropTypes.string,
  visible: PropTypes.bool,
};
