/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconInputFields = ({
  leadingIcon = true,
  state,
  className,
  frameClassName,
  text = "Full Name",
  text1 = "Jake Smith",
}) => {
  return (
    <div className={`icon-input-fields state-${state} ${className}`}>
      {["default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className={`frame-3 ${frameClassName}`}>
          {leadingIcon && (
            <img
              className="bx-search"
              alt="Bx search"
              src={state === "valid" ? "/img/bx-search-4.svg" : "/img/bx-search-3.svg"}
            />
          )}

          <div className="default-2">
            {["default", "focus"].includes(state) && <>{text1}</>}

            {["disabled", "entered", "valid"].includes(state) && <>Jane Jonah</>}
          </div>
        </div>
      )}

      {state === "active" && <img className={`img ${frameClassName}`} alt="Frame" src="/img/frame-20.svg" />}

      {["active", "default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className="default-3">{text}</div>
      )}

      {["active-info", "disabled-info", "invalid"].includes(state) && (
        <>
          <div className="default-4">
            {state === "invalid" && <>{text}</>}

            {["active-info", "disabled-info"].includes(state) && <div className="default-5">{text}</div>}
          </div>
          <div className="frame-4">
            {leadingIcon && <img className="bx-search" alt="Bx search" src="/img/bx-search-7.svg" />}

            <div className="default-6">Jane</div>
          </div>
          <div className="invalid-input">
            {state === "invalid" && <>Invalid input</>}

            {["active-info", "disabled-info"].includes(state) && (
              <p className="text-wrapper-12">information on this field’s requirements</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

IconInputFields.propTypes = {
  leadingIcon: PropTypes.bool,
  state: PropTypes.oneOf([
    "active-info",
    "active",
    "entered",
    "default",
    "focus",
    "valid",
    "invalid",
    "disabled-info",
    "disabled",
  ]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
