import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { PropertyCategory } from "../PropertyCategory";
import { PropertySubtopic } from "../PropertySubtopic";
import { PropertyTopic } from "../PropertyTopic";
import "./style.css";

export const CategoryCompFor = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className="category-comp-for">
      <PropertyTopic className="side-bar-comps" text="Category" />
      {state.property1 === "default" && <PropertySubtopic className="property-1-subtopic" text="Mobile Phones" />}

      {["android-phones", "basic-phones", "ios-phones", "other-phones", "windows-phones"].includes(state.property1) && (
        <PropertySubtopic
          className="property-1-subtopic"
          onClick={() => {
            dispatch("click_2246");
          }}
          text="Mobile Phones"
        />
      )}

      {state.property1 === "other-phones" && (
        <div className="category-wrapper">
          <div className="category-4">Other Smart Phones</div>
        </div>
      )}

      <PropertyCategory
        className={`${state.property1 === "other-phones" ? "class-3" : "class-4"}`}
        onClick={() => {
          dispatch("click_2235");
        }}
        text={state.property1 === "other-phones" ? "Basic Phones" : "Other Smart Phones"}
      />
      {["android-phones", "default", "ios-phones", "other-phones", "windows-phones"].includes(state.property1) && (
        <PropertyCategory
          className={`${state.property1 === "other-phones" ? "class-5" : "class-3"}`}
          onClick={() => {
            dispatch("click_2237");
          }}
          text={state.property1 === "other-phones" ? "Android Phones" : "Basic Phones"}
        />
      )}

      {["default", "ios-phones", "other-phones", "windows-phones"].includes(state.property1) && (
        <PropertyCategory
          className={`${state.property1 === "other-phones" ? "class-6" : "class-5"}`}
          onClick={() => {
            dispatch("click_2239");
          }}
          text={state.property1 === "other-phones" ? "iOS Phones" : "Android Phones"}
        />
      )}

      {["default", "other-phones", "windows-phones"].includes(state.property1) && (
        <PropertyCategory
          className={`${state.property1 === "other-phones" ? "property-1-category-3-inactive" : "class-6"}`}
          onClick={() => {
            dispatch("click_2241");
          }}
          text={state.property1 === "other-phones" ? "Windows Phones" : "iOS Phones"}
        />
      )}

      {["android-phones", "basic-phones", "ios-phones", "windows-phones"].includes(state.property1) && (
        <div className={`div-wrapper property-1-13-${state.property1}`}>
          <div className="category-4">
            {state.property1 === "basic-phones" && <>Basic Phones</>}

            {state.property1 === "ios-phones" && <>iOS Phones</>}

            {state.property1 === "windows-phones" && <>Windows Phones</>}

            {state.property1 === "android-phones" && <>Android Phones</>}
          </div>
        </div>
      )}

      {["android-phones", "basic-phones", "default", "ios-phones"].includes(state.property1) && (
        <PropertyCategory
          className={`${
            state.property1 === "basic-phones"
              ? "class-5"
              : state.property1 === "android-phones"
              ? "class-6"
              : "property-1-category-3-inactive"
          }`}
          onClick={() => {
            dispatch("click_2239");
          }}
          text={
            state.property1 === "basic-phones"
              ? "Android Phones"
              : state.property1 === "android-phones"
              ? "iOS Phones"
              : "Windows Phones"
          }
        />
      )}

      {["android-phones", "basic-phones"].includes(state.property1) && (
        <PropertyCategory
          className={`${state.property1 === "android-phones" ? "property-1-category-3-inactive" : "class-6"}`}
          onClick={() => {
            dispatch("click_2241");
          }}
          text={state.property1 === "android-phones" ? "Windows Phones" : "iOS Phones"}
        />
      )}

      {state.property1 === "basic-phones" && (
        <PropertyCategory
          className="property-1-category-3-inactive"
          onClick={() => {
            dispatch("click_2241");
          }}
          text="Windows Phones"
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click_2239":
        return {
          property1: "ios-phones",
        };
    }
  }

  if (state.property1 === "other-phones") {
    switch (action) {
      case "click_2239":
        return {
          property1: "windows-phones",
        };
    }
  }

  if (state.property1 === "basic-phones") {
    switch (action) {
      case "click_2239":
        return {
          property1: "ios-phones",
        };
    }
  }

  if (state.property1 === "android-phones") {
    switch (action) {
      case "click_2239":
        return {
          property1: "ios-phones",
        };
    }
  }

  if (state.property1 === "windows-phones") {
    switch (action) {
      case "click_2239":
        return {
          property1: "ios-phones",
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        property1: "other-phones",
      };

    case "click_2235":
      return {
        ...state,
        property1: "basic-phones",
      };

    case "click_2237":
      return {
        ...state,
        property1: "android-phones",
      };

    case "click_2241":
      return {
        ...state,
        property1: "windows-phones",
      };

    case "click_2246":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

CategoryCompFor.propTypes = {
  property1: PropTypes.oneOf([
    "basic-phones",
    "default",
    "windows-phones",
    "ios-phones",
    "other-phones",
    "android-phones",
  ]),
};
