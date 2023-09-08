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
  text1 = "Jane Jonah",
  text2 = "Jake Smith",
}) => {
  return (
    <div className={`icon-input-fields state-${state} ${className}`}>
      {["default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className={`frame-8 ${frameClassName}`}>
          {leadingIcon && (
            <img
              className="bx-search-3"
              alt="Bx search"
              src={state === "valid" ? "/img/bx-search-4.svg" : "/img/bx-search-3.svg"}
            />
          )}

          <div className="default-4">
            {["default", "focus"].includes(state) && <>{text2}</>}

            {["disabled", "entered", "valid"].includes(state) && <>{text1}</>}
          </div>
        </div>
      )}

      {state === "active" && <img className={`frame-9 ${frameClassName}`} alt="Frame" src="/img/frame-20.svg" />}

      {["active", "default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className="default-5">{text}</div>
      )}

      {["active-info", "disabled-info", "invalid"].includes(state) && (
        <>
          <div className="default-6">
            {state === "invalid" && <>{text}</>}

            {["active-info", "disabled-info"].includes(state) && <div className="default-7">{text}</div>}
          </div>
          <div className="frame-10">
            {leadingIcon && <img className="bx-search-3" alt="Bx search" src="/img/bx-search-7.svg" />}

            <div className="default-8">Jane</div>
          </div>
          <div className="invalid-input">
            {state === "invalid" && <>Invalid input</>}

            {["active-info", "disabled-info"].includes(state) && (
              <p className="p">information on this field’s requirements</p>
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
  text2: PropTypes.string,
};
