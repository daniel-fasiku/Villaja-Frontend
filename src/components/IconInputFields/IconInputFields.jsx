import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconInputFields = ({
  leadingIcon = true,
  state,
  className,
  frameClassName,
  bxSearchClassName,
  bxSearch = "/img/bx-search-3.png",
  defaultClassName,
  text = "Jane Jonah",
}) => {
  return (
    <div className={`icon-input-fields ${state} ${className}`}>
      {["default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className={`frame ${frameClassName}`}>
          {leadingIcon && (
            <img
              className={`bx-search ${bxSearchClassName}`}
              alt="Bx search"
              src={state === "default" ? "/img/bx-search-8.svg" : bxSearch}
            />
          )}

          <div className={`default-2 ${defaultClassName}`}>
            {["default", "focus"].includes(state) && <>Jake Smith</>}

            {["disabled", "entered", "valid"].includes(state) && <>{text}</>}
          </div>
        </div>
      )}

      {state === "active" && <img className={`img ${frameClassName}`} alt="Frame" src="/img/bx-search-3.png" />}

      {state === "invalid" && (
        <>
          <div className="frame-2">
            {leadingIcon && <img className="bx-search-2" alt="Bx search" src="/img/bx-search-3.png" />}

            <div className="default-3">Jane</div>
          </div>
          <p className="p">Please input both first and last name</p>
        </>
      )}
    </div>
  );
};

IconInputFields.propTypes = {
  leadingIcon: PropTypes.bool,
  state: PropTypes.oneOf(["active", "entered", "default", "focus", "valid", "invalid", "disabled"]),
  bxSearch: PropTypes.string,
  text: PropTypes.string,
};
