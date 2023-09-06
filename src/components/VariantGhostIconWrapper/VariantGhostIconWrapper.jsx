import PropTypes from "prop-types";
import React from "react";
import { Icons2 } from "../../icons/Icons2";
import { Icons43 } from "../../icons/Icons43";
import "./style.css";

export const VariantGhostIconWrapper = ({
  iconLeft = true,
  variant,
  icon,
  size,
  className,
  divClassName,
  text = "Small",
  icons2StyleOverrideClassName,
  override = <Icons2 className={icons2StyleOverrideClassName} color="#111111" />,
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
          {override}
        </>
      )}

      {icon === "left" && <Icons43 className="icons-43" color={variant === "filled" ? "white" : "#111111"} />}

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
