/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconInputFields } from "../IconInputFields";
import { PropertyInactive } from "../PropertyInactive";
import "./style.css";

export const BillingInfo = ({ property1, className, divClassName, divClassNameOverride }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "group-48",
  });

  return (
    <div className={`billing-info ${state.property1} ${className}`}>
      {state.property1 === "group-48" && (
        <div className="overlap-group-6">
          <div className="group-3">
            <IconInputFields
              className="icon-input-fields-instance"
              frameClassName="icon-input-fields-3"
              leadingIcon={false}
              state="default"
              text="First Name"
              text2="Jake"
            />
            <IconInputFields
              className="icon-input-fields-4"
              frameClassName="icon-input-fields-3"
              leadingIcon={false}
              state="default"
              text="Last Name"
              text2=" Smith"
            />
            <IconInputFields
              className="icon-input-fields-5"
              frameClassName="icon-input-fields-3"
              leadingIcon={false}
              state="default"
              text="Street Address"
              text2="Jake Smith"
            />
            <IconInputFields
              className="icon-input-fields-6"
              frameClassName="icon-input-fields-3"
              leadingIcon={false}
              state="default"
              text="Street Address"
              text2="Jake Smith"
            />
            <IconInputFields
              className="icon-input-fields-7"
              frameClassName="icon-input-fields-3"
              leadingIcon={false}
              state="default"
              text="Country"
              text2="Jake Smith"
            />
            <IconInputFields
              className="icon-input-fields-8"
              frameClassName="icon-input-fields-9"
              leadingIcon={false}
              state="default"
              text="State"
              text2="Jake Smith"
            />
            <IconInputFields
              className="icon-input-fields-10"
              frameClassName="icon-input-fields-3"
              leadingIcon={false}
              state="default"
              text="Town/Area"
              text2="Jake Smith"
            />
            <IconInputFields
              className="icon-input-fields-11"
              frameClassName="icon-input-fields-9"
              leadingIcon={false}
              state="default"
              text="ZIP Code"
              text2="000000"
            />
            <div className={`text-wrapper-18 ${divClassName}`}>Billing Information</div>
          </div>
          <IconInputFields
            className="icon-input-fields-12"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="First Name"
            text2="Jake"
          />
          <IconInputFields
            className="icon-input-fields-13"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="Last Name"
            text2=" Smith"
          />
          <IconInputFields
            className="icon-input-fields-14"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="Street Address"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-15"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="Street Address"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-16"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="Country"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-17"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="State"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-18"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="Town/Area"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-19"
            frameClassName="icon-input-fields-3"
            leadingIcon={false}
            state="default"
            text="ZIP Code"
            text2="000000"
          />
          <div className={`text-wrapper-18 ${divClassNameOverride}`}>Billing Information</div>
          <PropertyInactive
            className="same-as-shipping"
            onClick={() => {
              dispatch("click");
            }}
            text="Same as Shipping Address"
          />
        </div>
      )}

      {state.property1 === "group-49" && (
        <>
          <div className="overlap-group-7">
            <div className="group-4">
              <div className="text-wrapper-18">Billing Information</div>
            </div>
            <div className="text-wrapper-18">Billing Information</div>
          </div>
          <div
            className="same-as-shipping-2"
            onClick={() => {
              dispatch("click_494");
            }}
          >
            <img className="frame-15" alt="Frame" src="/img/frame-59.svg" />
            <div className="filter-name-2">Same as Shipping Address</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "group-49",
      };

    case "click_494":
      return {
        ...state,
        property1: "group-48",
      };
  }

  return state;
}

BillingInfo.propTypes = {
  property1: PropTypes.oneOf(["group-49", "group-48"]),
};
