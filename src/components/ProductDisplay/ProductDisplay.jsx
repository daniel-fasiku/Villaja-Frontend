import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icons3 } from "../../icons/Icons3";
import { Buttons } from "../Buttons";
import { ElementStars } from "../ElementStars";
import { VariantGhostIconWrapper } from "../VariantGhostIconWrapper";
import "./style.css";

export const ProductDisplay = ({
  property1,
  className,
  imageClassName,
  image = "/img/image-4-7.png",
  iphoneProMaxClassName,
  divClassName,
  reviewClassName,
  elementStarsStar = "/img/star-4-14.svg",
  elementStarsImg = "/img/star-5-14.svg",
  elementStarsStar1 = "/img/star-3-14.svg",
  elementStarsStar2 = "/img/star-1-14.svg",
  elementStarsStar3 = "/img/star-2-14.svg",
  buttonsPropertyDefaultClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`product-display property-1-1-${state.property1} ${className}`}
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
          <div className="group-3">
            <div className="text-wrapper-7">Iphone 13 Pro Max</div>
            <div className="overlap-group-2">
              <div className="text-wrapper-8">N150,000</div>
              <div className="text-wrapper-9">David M.</div>
            </div>
            <VariantGhostIconWrapper
              className="instance-node"
              divClassName="buttons-2"
              icon="right"
              icons2StyleOverrideClassName="buttons-3"
              size="small"
              text="Buy"
              variant="filled"
            />
            <ElementStars
              className="five-stars"
              img="/img/star-2-14.svg"
              property1="static-default"
              star="/img/star-1-14.svg"
              star1="/img/star-3-14.svg"
              star2="/img/star-4-14.svg"
              star3="/img/star-5-14.svg"
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
          <div className="image-wrapper">
            <img
              className={`image-2 ${imageClassName}`}
              alt="Image"
              src={
                ["active-catalog-display", "inactive-catalog-display"].includes(state.property1)
                  ? "/img/image-4-6.png"
                  : image
              }
            />
          </div>
          <div className="group-4">
            <div className={`iphone-pro-max ${iphoneProMaxClassName}`}>
              {["active-catalog-display", "inactive-catalog-display", "variant-3", "variant-5"].includes(
                state.property1
              ) && <p className="p">iPhone 13 Pro Max - 256GB&nbsp;&nbsp;(Purple)</p>}

              {["active-home-display", "in-cart-format", "inactive-home-display"].includes(state.property1) && (
                <p className="p">iPhone 13 Pro Max - 256GB (Purple) Unlocked with original charger</p>
              )}
            </div>
            {["active-home-display", "in-cart-format", "inactive-home-display"].includes(state.property1) && (
              <>
                <div className={`text-wrapper-10 ${divClassName}`}>N150,000</div>
                <div className={`review ${reviewClassName}`}>
                  {["active-home-display", "inactive-home-display"].includes(state.property1) && (
                    <>
                      <ElementStars
                        img={elementStarsStar3}
                        property1="static-default"
                        star={elementStarsStar2}
                        star1={elementStarsStar1}
                        star2={elementStarsStar}
                        star3={elementStarsImg}
                      />
                      <div className="text-wrapper-11">40,000</div>
                    </>
                  )}

                  {state.property1 === "in-cart-format" && (
                    <>
                      <div className="qty-component">
                        <div className="icon-button">
                          <Icons3 className="icons" />
                        </div>
                        <div className="group-wrapper">
                          <img className="group-5" alt="Group" src="/img/group-38.png" />
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
                  className={buttonsPropertyDefaultClassName}
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
                    img={elementStarsStar3}
                    property1="static-default"
                    star={elementStarsStar2}
                    star1={elementStarsStar1}
                    star2={elementStarsStar}
                    star3={elementStarsImg}
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
  image: PropTypes.string,
  elementStarsStar: PropTypes.string,
  elementStarsImg: PropTypes.string,
  elementStarsStar1: PropTypes.string,
  elementStarsStar2: PropTypes.string,
  elementStarsStar3: PropTypes.string,
};
