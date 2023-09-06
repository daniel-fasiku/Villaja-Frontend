import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconInputFields = ({
  leadingIcon = true,
  state,
  className,
  frameClassName,
  text = "Jake Smith",
  text1 = "Full Name",
  text2 = "Jane Jonah",
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
            {["default", "focus"].includes(state) && <>{text}</>}

            {["disabled", "entered", "valid"].includes(state) && <>{text2}</>}
          </div>
        </div>
      )}

      {state === "active" && <img className={`img ${frameClassName}`} alt="Frame" src="/img/frame-20.svg" />}

      {["active", "default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className="default-3">{text1}</div>
      )}

      {["active-info", "disabled-info", "invalid"].includes(state) && (
        <>
          <div className="default-4">
            {state === "invalid" && <>{text1}</>}

            {["active-info", "disabled-info"].includes(state) && <div className="default-5">{text1}</div>}
          </div>
          <div className="frame-4">
            {leadingIcon && <img className="bx-search" alt="Bx search" src="/img/bx-search-7.svg" />}

            <div className="default-6">Jane</div>
          </div>
          <div className="invalid-input">
            {state === "invalid" && <>Invalid input</>}

            {["active-info", "disabled-info"].includes(state) && (
              <p className="text-wrapper-13">information on this field’s requirements</p>
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
