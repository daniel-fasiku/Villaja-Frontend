import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconInputFields = ({
  leadingIcon = true,
  state,
  className,
  frameClassName,
  text = "Jane Jonah",
  hasDefault = true,
}) => {
  return (
    <div className={`icon-input-fields state-${state} ${className}`}>
      {["default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className={`frame-7 ${frameClassName}`}>
          {leadingIcon && (
            <img
              className="bx-search-2"
              alt="Bx search"
              src={state === "valid" ? "/img/bx-search-6.svg" : "/img/bx-search-5.svg"}
            />
          )}

          <div className="default-3">
            {["default", "focus"].includes(state) && <>Jake Smith</>}

            {["disabled", "entered", "valid"].includes(state) && <>{text}</>}
          </div>
        </div>
      )}

      {state === "active" && <img className={`frame-8 ${frameClassName}`} alt="Frame" src="/img/frame-20.svg" />}

      {["active", "default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <>
          <>{hasDefault && <div className="default-4">Full Name</div>}</>
        </>
      )}

      {["active-info", "disabled-info", "invalid"].includes(state) && (
        <>
          <div className="default-5">
            {state === "invalid" && <>Full Name</>}

            {["active-info", "disabled-info"].includes(state) && <div className="default-6">Full Name</div>}
          </div>
          <div className="frame-9">
            {leadingIcon && <img className="bx-search-2" alt="Bx search" src="/img/bx-search-9.svg" />}

            <div className="default-7">Jane</div>
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
  hasDefault: PropTypes.bool,
};
