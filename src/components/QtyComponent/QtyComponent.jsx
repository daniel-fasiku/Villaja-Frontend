import PropTypes from "prop-types";
import React from "react";
import { IconButton } from "../IconButton";
import "./style.css";

export const QtyComponent = ({ property1, className, iconButton = "/img/icon-button-1.svg" }) => {
  return (
    <div className={`qty-component ${className}`}>
      {property1 === "frame-54" && (
        <IconButton
          className="icon-button-instance"
          icons4Color="#ABABB5"
          icons4StyleOverrideClassName="icon-button-2"
        />
      )}

      {(property1 === "frame-55" ||
        property1 === "frame-56" ||
        property1 === "frame-57" ||
        property1 === "frame-58" ||
        property1 === "frame-59" ||
        property1 === "frame-60" ||
        property1 === "frame-61" ||
        property1 === "frame-62" ||
        property1 === "frame-63") && (
        <img
          className="icon-button-3"
          alt="Icon button"
          src={
            property1 === "frame-56"
              ? "/img/icon-button-4.svg"
              : property1 === "frame-57"
              ? "/img/icon-button-6.svg"
              : property1 === "frame-58"
              ? "/img/icon-button-8.svg"
              : property1 === "frame-59"
              ? "/img/icon-button-10.svg"
              : property1 === "frame-60"
              ? "/img/icon-button-12.svg"
              : property1 === "frame-61"
              ? "/img/icon-button-14.svg"
              : property1 === "frame-62"
              ? "/img/icon-button-16.svg"
              : property1 === "frame-63"
              ? "/img/icon-button-18.svg"
              : "/img/icon-button-2.svg"
          }
        />
      )}

      <div className="group-wrapper">
        <img
          className="group-3"
          alt="Group"
          src={
            property1 === "frame-55"
              ? "/img/group-38-2.png"
              : property1 === "frame-56"
              ? "/img/group-38-3.png"
              : property1 === "frame-57"
              ? "/img/group-38-4.png"
              : property1 === "frame-58"
              ? "/img/group-38-5.png"
              : property1 === "frame-59"
              ? "/img/group-38-6.png"
              : property1 === "frame-60"
              ? "/img/group-38-7.png"
              : property1 === "frame-61"
              ? "/img/group-38-8.png"
              : property1 === "frame-62"
              ? "/img/group-38-9.png"
              : property1 === "frame-63"
              ? "/img/group-38-10.png"
              : "/img/group-38-1.png"
          }
        />
      </div>
      <img
        className="icon-button-3"
        alt="Icon button"
        src={
          property1 === "frame-55"
            ? "/img/icon-button-3.svg"
            : property1 === "frame-56"
            ? "/img/icon-button-5.svg"
            : property1 === "frame-57"
            ? "/img/icon-button-7.svg"
            : property1 === "frame-58"
            ? "/img/icon-button-9.svg"
            : property1 === "frame-59"
            ? "/img/icon-button-11.svg"
            : property1 === "frame-60"
            ? "/img/icon-button-13.svg"
            : property1 === "frame-61"
            ? "/img/icon-button-15.svg"
            : property1 === "frame-62"
            ? "/img/icon-button-17.svg"
            : property1 === "frame-63"
            ? "/img/icon-button-19.svg"
            : iconButton
        }
      />
    </div>
  );
};

QtyComponent.propTypes = {
  property1: PropTypes.oneOf([
    "frame-58",
    "frame-59",
    "frame-55",
    "frame-57",
    "frame-63",
    "frame-61",
    "frame-60",
    "frame-56",
    "frame-54",
    "frame-62",
  ]),
  iconButton: PropTypes.string,
};
