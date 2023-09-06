import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconChevronRight } from "../../icons/IconChevronRight";
import { VariantGhostIconWrapper } from "../VariantGhostIconWrapper";
import "./style.css";

export const HomepageCategories = ({
  property,
  className,
  groupClassName,
  picClassName,
  iphoneClassName,
  iphone = "/img/iphone-1-65.png",
  img = "/img/iphone-1-64.png",
  iphone1 = "/img/iphone-1-63.png",
  iphone2 = "/img/iphone-1.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property: property || "phone-1",
  });

  return (
    <div
      className={`homepage-categories ${state.property} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`group-6 ${groupClassName}`}>
        <div className="accessories">
          {["accessories-1", "accessories-2", "accessories-3"].includes(state.property) && <>Accessories</>}

          {["computer-1", "computer-2", "computer-3"].includes(state.property) && <>Computers</>}

          {["tablet-1", "tablet-2", "tablet-3"].includes(state.property) && <>Tablets</>}

          {["phone-1", "phone-3", "phones-2"].includes(state.property) && <>Phones</>}
        </div>
        {(state.property === "accessories-1" ||
          state.property === "accessories-2" ||
          state.property === "computer-1" ||
          state.property === "computer-2" ||
          state.property === "phone-1" ||
          state.property === "phones-2" ||
          state.property === "tablet-1" ||
          state.property === "tablet-2") && (
          <div className="shop-for-smartphones">
            {["phone-1", "phones-2"].includes(state.property) && (
              <p className="text-wrapper-36">Shop for smartphones from the best brands.</p>
            )}

            {["tablet-1", "tablet-2"].includes(state.property) && (
              <>iPads, Android and&nbsp;&nbsp;Educational Tablets</>
            )}

            {["computer-1", "computer-2"].includes(state.property) && <>PCs, Laptops and Desktops</>}

            {["accessories-1", "accessories-2"].includes(state.property) && (
              <p className="text-wrapper-36">For phones, tablets, computers and more!</p>
            )}
          </div>
        )}

        {["accessories-3", "computer-3", "phone-3", "tablet-3"].includes(state.property) && (
          <VariantGhostIconWrapper
            className={`${
              state.property === "accessories-3" ? "class-6" : state.property === "computer-3" ? "class-7" : "class-8"
            }`}
            divClassName="buttons-6"
            icon="right"
            override={<IconChevronRight className="icon-chevron-right" color="white" />}
            size="small"
            text="Shop"
            variant="filled"
          />
        )}
      </div>
      <div className={`pic-3 ${picClassName}`}>
        {(state.property === "accessories-1" ||
          state.property === "accessories-2" ||
          state.property === "accessories-3" ||
          state.property === "computer-1" ||
          state.property === "computer-2" ||
          state.property === "computer-3" ||
          state.property === "phone-1" ||
          state.property === "phone-3" ||
          state.property === "phones-2" ||
          state.property === "tablet-1") && (
          <img
            className={`iphone-3 ${iphoneClassName}`}
            alt="Iphone"
            src={
              state.property === "phone-1"
                ? iphone2
                : state.property === "tablet-1"
                ? iphone
                : state.property === "computer-1"
                ? img
                : state.property === "accessories-1"
                ? iphone1
                : ["computer-2", "computer-3"].includes(state.property)
                ? "/img/iphone-1-59.png"
                : ["phone-3", "phones-2"].includes(state.property)
                ? "/img/iphone-1-55.png"
                : "/img/iphone-1-61.png"
            }
          />
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property === "phone-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property: "phones-2",
        };
    }
  }

  if (state.property === "phones-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "phone-1",
        };
    }
  }

  if (state.property === "tablet-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property: "tablet-2",
        };
    }
  }

  if (state.property === "tablet-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "tablet-1",
        };
    }
  }

  if (state.property === "computer-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property: "computer-2",
        };
    }
  }

  if (state.property === "computer-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "computer-1",
        };
    }
  }

  if (state.property === "accessories-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property: "accessories-2",
        };
    }
  }

  if (state.property === "accessories-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "accessories-1",
        };
    }
  }

  if (state.property === "accessories-3") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "accessories-1",
        };
    }
  }

  if (state.property === "computer-3") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "computer-1",
        };
    }
  }

  if (state.property === "tablet-3") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "tablet-1",
        };
    }
  }

  if (state.property === "phone-3") {
    switch (action) {
      case "mouse_leave":
        return {
          property: "phone-1",
        };
    }
  }

  return state;
}

HomepageCategories.propTypes = {
  property: PropTypes.oneOf([
    "phone-1",
    "computer-2",
    "accessories-1",
    "tablet-1",
    "accessories-3",
    "tablet-3",
    "tablet-2",
    "computer-1",
    "phones-2",
    "phone-3",
    "accessories-2",
    "computer-3",
  ]),
  iphone: PropTypes.string,
  img: PropTypes.string,
  iphone1: PropTypes.string,
  iphone2: PropTypes.string,
};
