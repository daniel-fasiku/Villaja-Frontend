import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconInputFields = ({
  leadingIcon = true,
  state,
  frameClassName,
  text = "Jake Smith",
  text1 = "Full Name",
}) => {
  return (
    <div className={`icon-input-fields state-${state}`}>
      {["default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className={`frame-9 ${frameClassName}`}>
          {leadingIcon && (
            <img
              className="bx-search-2"
              alt="Bx search"
              src={state === "valid" ? "/img/bx-search-4.svg" : "/img/bx-search-3.svg"}
            />
          )}

          <div className="default-3">
            {["default", "focus"].includes(state) && <>{text}</>}

            {["disabled", "entered", "valid"].includes(state) && <>Jane Jonah</>}
          </div>
        </div>
      )}

      {state === "active" && <img className={`frame-10 ${frameClassName}`} alt="Frame" src="/img/frame-20.svg" />}

      {["active", "default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className="default-4">{text1}</div>
      )}

      {["active-info", "disabled-info", "invalid"].includes(state) && (
        <>
          <div className="default-5">
            {state === "invalid" && <>{text1}</>}

            {["active-info", "disabled-info"].includes(state) && <div className="default-6">{text1}</div>}
          </div>
          <div className="frame-11">
            {leadingIcon && <img className="bx-search-2" alt="Bx search" src="/img/bx-search-7.svg" />}

            <div className="default-7">Jane</div>
          </div>
          <div className="invalid-input">
            {state === "invalid" && <>Invalid input</>}

            {["active-info", "disabled-info"].includes(state) && (
              <p className="text-wrapper-19">information on this field’s requirements</p>
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
