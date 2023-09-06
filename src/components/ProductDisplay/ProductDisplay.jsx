import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icons18 } from "../../icons/Icons18";
import { Buttons } from "../Buttons";
import { ElementStars } from "../ElementStars";
import { VariantGhostIconWrapper } from "../VariantGhostIconWrapper";
import "./style.css";

export const ProductDisplay = ({
  property1,
  className,
  imageClassName,
  iphoneProMaxClassName,
  divClassName,
  reviewClassName,
  elementStarsStar = "/img/star-3-18.svg",
  elementStarsImg = "/img/star-2-26.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`product-display property-1-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.property1 === "default" && (
        <>
          <img className="image" alt="Image" src="/img/image-4-25.png" />
          <div className="group-2">
            <div className="text-wrapper-7">Iphone 13 Pro Max</div>
            <div className="overlap-group-2">
              <div className="text-wrapper-8">N150,000</div>
              <div className="text-wrapper-9">David M.</div>
            </div>
            <VariantGhostIconWrapper
              className="buttons-instance"
              divClassName="instance-node"
              icon="right"
              iconChevronRightStyleOverrideClassName="buttons-2"
              size="small"
              text="Buy"
              variant="filled"
            />
            <ElementStars
              className="five-stars"
              img="/img/star-3-18.svg"
              property1="static-default"
              star="/img/star-2-26.svg"
              star1="/img/star-5-26.svg"
            />
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
          <div className="pic">
            <img
              className={`image-2 ${imageClassName}`}
              alt="Image"
              src={
                ["active-catalog-display", "inactive-catalog-display"].includes(state.property1)
                  ? "/img/image-4-19.png"
                  : "/img/image-4-18.png"
              }
            />
          </div>
          <div className="group-3">
            <div className={`iphone-pro-max ${iphoneProMaxClassName}`}>
              {["active-catalog-display", "inactive-catalog-display", "variant-3", "variant-5"].includes(
                state.property1
              ) && <p className="text-wrapper-36">iPhone 13 Pro Max - 256GB&nbsp;&nbsp;(Purple)</p>}

              {["active-home-display", "in-cart-format", "inactive-home-display"].includes(state.property1) && (
                <p className="text-wrapper-36">iPhone 13 Pro Max - 256GB (Purple) Unlocked with original charger</p>
              )}
            </div>
            {["active-home-display", "in-cart-format", "inactive-home-display"].includes(state.property1) && (
              <>
                <div className={`text-wrapper-10 ${divClassName}`}>N150,000</div>
                <div className={`review ${reviewClassName}`}>
                  {["active-home-display", "inactive-home-display"].includes(state.property1) && (
                    <>
                      <ElementStars
                        img={elementStarsStar}
                        property1="static-default"
                        star={elementStarsImg}
                        star1="/img/star-5-26.svg"
                      />
                      <div className="text-wrapper-11">40,000</div>
                    </>
                  )}

                  {state.property1 === "in-cart-format" && (
                    <>
                      <div className="qty-component">
                        <div className="icon-button">
                          <Icons18 className="icons" />
                        </div>
                        <div className="group-wrapper">
                          <img className="group-4" alt="Group" src="/img/group-38.png" />
                        </div>
                        <img className="icon-button-2" alt="Icon button" src="/img/icon-button.svg" />
                      </div>
                      <div className="text-wrapper-12">Delete</div>
                    </>
                  )}
                </div>
              </>
            )}

            {["active-catalog-display", "inactive-catalog-display", "variant-3", "variant-5"].includes(
              state.property1
            ) && (
              <>
                <div className={`text-wrapper-13 ${divClassName}`}>N150,000</div>
                <Buttons
                  className={`${
                    ["active-catalog-display", "inactive-catalog-display"].includes(state.property1)
                      ? "class"
                      : "class-2"
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
                <div className={`review-2 ${reviewClassName}`}>
                  <ElementStars
                    img={elementStarsStar}
                    property1="static-default"
                    star={elementStarsImg}
                    star1={
                      state.property1 === "inactive-catalog-display"
                        ? "/img/star-5-28.svg"
                        : state.property1 === "active-catalog-display"
                        ? "/img/star-5-27.svg"
                        : "/img/star-5-26.svg"
                    }
                    star2={
                      state.property1 === "inactive-catalog-display"
                        ? "/img/star-1-28.svg"
                        : state.property1 === "active-catalog-display"
                        ? "/img/star-1-27.svg"
                        : state.property1 === "variant-5"
                        ? "/img/star-1-18.svg"
                        : undefined
                    }
                    star3={
                      state.property1 === "inactive-catalog-display"
                        ? "/img/star-4-28.svg"
                        : state.property1 === "active-catalog-display"
                        ? "/img/star-4-27.svg"
                        : state.property1 === "variant-5"
                        ? "/img/star-4-18.svg"
                        : undefined
                    }
                  />
                  <div className="text-wrapper-14">40,000</div>
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
  elementStarsStar: PropTypes.string,
  elementStarsImg: PropTypes.string,
};
