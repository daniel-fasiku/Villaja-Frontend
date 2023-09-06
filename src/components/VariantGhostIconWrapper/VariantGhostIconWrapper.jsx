import PropTypes from "prop-types";
import React from "react";
import { Icons13 } from "../../icons/Icons13";
import { Icons16 } from "../../icons/Icons16";
import "./style.css";

export const VariantGhostIconWrapper = ({
  iconLeft = true,
  variant,
  icon,
  size,
  className,
  divClassName,
  text = "Small",
  icons13StyleOverrideClassName,
}) => {
  return (
    <div className={`variant-ghost-icon-wrapper ${variant} ${className}`}>
      {icon === "right" && (
        <>
          <div className={`small-2 variant-${variant} ${size} ${divClassName}`}>
            {size === "small" && <>{text}</>}

            {size === "medium" && <>Medium</>}

            {size === "large" && <>Large</>}
          </div>
          <Icons13 className={icons13StyleOverrideClassName} color={variant === "filled" ? "white" : "#111111"} />
        </>
      )}

      {icon === "left" && <Icons16 className="icons" color={variant === "filled" ? "white" : "#111111"} />}

      {["left", "none"].includes(icon) && (
        <div className={`small-3 variant-0-${variant} size-${size}`}>
          {size === "small" && <>{text}</>}

          {size === "medium" && <>Medium</>}

          {size === "large" && <>Large</>}
        </div>
      )}
    </div>
  );
};

VariantGhostIconWrapper.propTypes = {
  iconLeft: PropTypes.bool,
  variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
  icon: PropTypes.oneOf(["none", "right", "left"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  text: PropTypes.string,
};
