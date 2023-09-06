import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Buttons } from "../Buttons";
import { QtyComponent } from "../QtyComponent";
import { VariantGhostIconWrapper } from "../VariantGhostIconWrapper";
import "./style.css";

export const ProductDisplay = ({ property1, className, qtyComponentIconButton = "/img/icon-button.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`product-display property-1-21-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.property1 === "default" && (
        <>
          <img className="image" alt="Image" src="/img/image-4.png" />
          <div className="group-4">
            <div className="text-wrapper-18">Iphone 13 Pro Max</div>
            <div className="overlap-group-4">
              <div className="text-wrapper-19">N150,000</div>
              <div className="text-wrapper-20">David M.</div>
            </div>
            <VariantGhostIconWrapper
              className="buttons-3"
              divClassName="buttons-4"
              icon="right"
              icons13StyleOverrideClassName="buttons-5"
              size="small"
              text="Buy"
              variant="filled"
            />
            <div className="element-stars">
              <img className="star" alt="Star" src="/img/star-1-6.svg" />
              <img className="star-2" alt="Star" src="/img/star-2-6.svg" />
              <img className="star-3" alt="Star" src="/img/star-3-6.svg" />
              <img className="star-4" alt="Star" src="/img/star-4-6.svg" />
              <img className="star-5" alt="Star" src="/img/star-5-6.svg" />
            </div>
          </div>
          <div className="rectangle" />
        </>
      )}

      {(state.property1 === "active-catalog-display" ||
        state.property1 === "active-home-display" ||
        state.property1 === "in-cart-format" ||
        state.property1 === "inactive-catalog-display" ||
        state.property1 === "inactive-home-display" ||
        state.property1 === "variant-3" ||
        state.property1 === "variant-5") && (
        <>
          <div className="image-wrapper">
            <img
              className="image-2"
              alt="Image"
              src={
                ["active-catalog-display", "inactive-catalog-display"].includes(state.property1)
                  ? "/img/image-4-6.png"
                  : "/img/image-4-7.png"
              }
            />
          </div>
          <div className="group-5">
            <div className="iphone-pro-max">
              {["active-catalog-display", "inactive-catalog-display", "variant-3", "variant-5"].includes(
                state.property1
              ) && <p className="p">iPhone 13 Pro Max - 256GB&nbsp;&nbsp;(Purple)</p>}

              {["active-home-display", "in-cart-format", "inactive-home-display"].includes(state.property1) && (
                <p className="p">iPhone 13 Pro Max - 256GB (Purple) Unlocked with original charger</p>
              )}
            </div>
            {["active-home-display", "in-cart-format", "inactive-home-display"].includes(state.property1) && (
              <>
                <div className="text-wrapper-21">N150,000</div>
                <div className="review">
                  {["active-home-display", "inactive-home-display"].includes(state.property1) && (
                    <>
                      <div className="element-stars-2">
                        <img className="star" alt="Star" src="/img/star-1-6.svg" />
                        <img className="star-2" alt="Star" src="/img/star-2-6.svg" />
                        <img className="star-3" alt="Star" src="/img/star-3-6.svg" />
                        <img className="star-4" alt="Star" src="/img/star-4-6.svg" />
                        <img className="star-5" alt="Star" src="/img/star-5-6.svg" />
                      </div>
                      <div className="text-wrapper-22">40,000</div>
                    </>
                  )}

                  {state.property1 === "in-cart-format" && (
                    <>
                      <QtyComponent
                        className="qty-component-instance"
                        iconButton={qtyComponentIconButton}
                        property1="frame-54"
                      />
                      <div className="text-wrapper-23">Delete</div>
                    </>
                  )}
                </div>
              </>
            )}

            {["active-catalog-display", "inactive-catalog-display", "variant-3", "variant-5"].includes(
              state.property1
            ) && (
              <>
                <div className="text-wrapper-24">N150,000</div>
                <Buttons
                  className={`${
                    ["active-catalog-display", "inactive-catalog-display"].includes(state.property1)
                      ? "class-7"
                      : "class-8"
                  }`}
                  property1={
                    state.property1 === "inactive-catalog-display"
                      ? "default-ghost"
                      : state.property1 === "active-catalog-display"
                      ? "default-filled"
                      : state.property1 === "variant-5"
                      ? "small-filled"
                      : "small-ghost"
                  }
                  text="ADD TO CART"
                />
                <div className="review-2">
                  <div className="element-stars-2">
                    <img
                      className="star"
                      alt="Star"
                      src={
                        state.property1 === "inactive-catalog-display"
                          ? "/img/star-1-4.svg"
                          : state.property1 === "active-catalog-display"
                          ? "/img/star-1-5.svg"
                          : "/img/star-1-6.svg"
                      }
                    />
                    <img
                      className="star-2"
                      alt="Star"
                      src={
                        state.property1 === "inactive-catalog-display"
                          ? "/img/star-2-4.svg"
                          : state.property1 === "active-catalog-display"
                          ? "/img/star-2-5.svg"
                          : "/img/star-2-6.svg"
                      }
                    />
                    <img
                      className="star-3"
                      alt="Star"
                      src={
                        state.property1 === "inactive-catalog-display"
                          ? "/img/star-3-4.svg"
                          : state.property1 === "active-catalog-display"
                          ? "/img/star-3-5.svg"
                          : "/img/star-3-6.svg"
                      }
                    />
                    <img
                      className="star-4"
                      alt="Star"
                      src={
                        state.property1 === "inactive-catalog-display"
                          ? "/img/star-4-4.svg"
                          : state.property1 === "active-catalog-display"
                          ? "/img/star-4-5.svg"
                          : "/img/star-4-6.svg"
                      }
                    />
                    <img
                      className="star-5"
                      alt="Star"
                      src={
                        state.property1 === "inactive-catalog-display"
                          ? "/img/star-5-4.svg"
                          : state.property1 === "active-catalog-display"
                          ? "/img/star-5-5.svg"
                          : "/img/star-5-6.svg"
                      }
                    />
                  </div>
                  <div className="text-wrapper-25">40,000</div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "inactive-home-display") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "active-home-display",
        };
    }
  }

  if (state.property1 === "active-home-display") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "inactive-home-display",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "variant-3",
        };
    }
  }

  if (state.property1 === "inactive-catalog-display") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "active-catalog-display",
        };
    }
  }

  if (state.property1 === "active-catalog-display") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "inactive-catalog-display",
        };
    }
  }

  return state;
}

ProductDisplay.propTypes = {
  property1: PropTypes.oneOf([
    "active-catalog-display",
    "inactive-catalog-display",
    "default",
    "variant-5",
    "variant-3",
    "inactive-home-display",
    "in-cart-format",
    "active-home-display",
  ]),
  qtyComponentIconButton: PropTypes.string,
};
