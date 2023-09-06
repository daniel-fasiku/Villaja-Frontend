import PropTypes from "prop-types";
import React from "react";
import { Icons } from "../../icons/Icons";
import { Icons1 } from "../../icons/Icons1";
import { Icons2 } from "../../icons/Icons2";
import { VariantAvatar } from "../../icons/VariantAvatar";
import "./style.css";

export const MediaPlaceholder = ({ variant, variantDiagramClassName, icons1StyleOverrideClassName }) => {
  return (
    <>
      {variant === "diagram" && (
        <img
          className={`media-placeholder variant-diagram ${variantDiagramClassName}`}
          alt="Variant diagram"
          src="/img/variant-diagram.svg"
        />
      )}

      {["image", "map", "video"].includes(variant) && (
        <div className={`media-placeholder ${variant} ${variantDiagramClassName}`}>
          {variant === "map" && (
            <div className="overlap-group-3">
              <Icons className="icons-instance" />
              <div className="controls">
                <img className="plus" alt="Plus" src="/img/plus.svg" />
                <img className="vector" alt="Vector" src="/img/vector.svg" />
                <div className="rectangle" />
              </div>
            </div>
          )}

          {variant === "image" && <Icons1 className={icons1StyleOverrideClassName} />}

          {variant === "video" && (
            <>
              <div className="icons-wrapper">
                <Icons2 className="icons-2" />
              </div>
              <div className="slider">
                <div className="overlap-group-4">
                  <div className="track" />
                  <div className="handle" />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {variant === "avatar" && <VariantAvatar className="variant-avatar" />}
    </>
  );
};

MediaPlaceholder.propTypes = {
  variant: PropTypes.oneOf(["diagram", "avatar", "image", "video", "map"]),
};
