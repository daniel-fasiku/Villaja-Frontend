/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Buttons } from "../Buttons";
import { TopMenuComp } from "../TopMenuComp";
import "./style.css";

export const TopBar = ({ property1, className, frame = "/img/frame-40.svg", img = "/img/frame-42.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`top-bar ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {(state.property1 === "default" ||
        state.property1 === "frame-51" ||
        state.property1 === "frame-53" ||
        state.property1 === "frame-54" ||
        state.property1 === "frame-55" ||
        state.property1 === "phones" ||
        state.property1 === "variant-11" ||
        state.property1 === "variant-12" ||
        state.property1 === "variant-16" ||
        state.property1 === "variant-18") && (
        <div className="top-menu-bar">
          {(state.property1 === "default" ||
            state.property1 === "frame-51" ||
            state.property1 === "frame-53" ||
            state.property1 === "frame-54" ||
            state.property1 === "frame-55" ||
            state.property1 === "variant-11" ||
            state.property1 === "variant-16" ||
            state.property1 === "variant-18") && (
            <div className="frame">
              <div className="text-wrapper">villaja</div>
            </div>
          )}

          {(state.property1 === "default" ||
            state.property1 === "frame-51" ||
            state.property1 === "frame-53" ||
            state.property1 === "frame-54" ||
            state.property1 === "frame-55" ||
            state.property1 === "variant-11" ||
            state.property1 === "variant-16" ||
            state.property1 === "variant-18") && (
            <>
              <div
                className="phones-wrapper"
                onMouseEnter={() => {
                  dispatch("mouse_enter");
                }}
              >
                <div className="div">Phones</div>
              </div>
              <div
                className="div-wrapper"
                onMouseEnter={() => {
                  dispatch("mouse_enter_654");
                }}
              >
                <div className="text-wrapper-2">Tablets</div>
              </div>
            </>
          )}

          {(state.property1 === "default" ||
            state.property1 === "frame-51" ||
            state.property1 === "frame-53" ||
            state.property1 === "frame-54" ||
            state.property1 === "frame-55" ||
            state.property1 === "variant-11" ||
            state.property1 === "variant-16" ||
            state.property1 === "variant-18") && (
            <>
              <div
                className="frame-2"
                onMouseEnter={() => {
                  dispatch("mouse_enter_656");
                }}
              >
                <div className="text-wrapper-3">Computers</div>
              </div>
              <div
                className="frame-3"
                onMouseEnter={() => {
                  dispatch("mouse_enter_658");
                }}
              >
                <div className="text-wrapper-4">Accessories</div>
              </div>
              <div
                className="frame-4"
                onMouseEnter={() => {
                  dispatch("mouse_enter_660");
                }}
              >
                <div className="text-wrapper-5">Support</div>
              </div>
              <img
                className="img"
                alt="Frame"
                src={
                  ["default", "variant-11"].includes(state.property1) ? "/img/frame-39-1.svg" : "/img/frame-39-17.svg"
                }
              />
            </>
          )}

          {["phones", "variant-12"].includes(state.property1) && (
            <>
              <div className="top-menu-bar-2">
                <div className="frame-5">
                  <div className="text-wrapper">villaja</div>
                </div>
                <div
                  className="frame-5"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_688");
                  }}
                >
                  <div className="phones-2">Phones</div>
                </div>
                <div
                  className="frame-5"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_690");
                  }}
                >
                  <div className="text-wrapper-6">Tablets</div>
                </div>
                <div
                  className="frame-5"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_692");
                  }}
                >
                  <div className="text-wrapper-6">Computers</div>
                </div>
                <div
                  className="frame-5"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_694");
                  }}
                >
                  <div className="text-wrapper-6">Accessories</div>
                </div>
                <div
                  className="frame-5"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_696");
                  }}
                >
                  <div className="text-wrapper-6">Support</div>
                </div>
                <img className="img" alt="Frame" src="/img/frame-39-17.svg" />
                {state.property1 === "variant-12" && (
                  <div
                    className="shopping-cart-wrapper"
                    onMouseEnter={() => {
                      dispatch("mouse_enter_728");
                    }}
                  >
                    <div className="shopping-cart">
                      <div className="overlap-group">
                        <img className="vector" alt="Vector" src="/img/vector-15.svg" />
                        <div className="ellipse" />
                      </div>
                    </div>
                  </div>
                )}

                <img
                  className="img"
                  alt="Frame"
                  src={state.property1 === "variant-12" ? "/img/frame-42-3.svg" : "/img/frame-40-2.svg"}
                />
                {state.property1 === "phones" && <img className="img" alt="Frame" src="/img/frame-42-2.svg" />}
              </div>
              <div className="text-wrapper-7">Sub-categories</div>
              <TopMenuComp className="top-menu-comp-instance" text="Basic Phones" />
              <TopMenuComp className="instance-node" text="Smart Phones" />
            </>
          )}

          {["frame-55", "variant-16", "variant-18"].includes(state.property1) && (
            <div
              className="shopping-cart-wrapper"
              onMouseEnter={() => {
                dispatch("mouse_enter_1073");
              }}
            >
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <img
                    className="vector"
                    alt="Vector"
                    src={state.property1 === "frame-55" ? "/img/vector-11.svg" : "/img/vector-15.svg"}
                  />
                  <div className="ellipse" />
                </div>
              </div>
            </div>
          )}

          {(state.property1 === "default" ||
            state.property1 === "frame-51" ||
            state.property1 === "frame-53" ||
            state.property1 === "frame-54" ||
            state.property1 === "frame-55" ||
            state.property1 === "variant-11" ||
            state.property1 === "variant-16" ||
            state.property1 === "variant-18") && (
            <img
              className="img"
              alt="Frame"
              src={
                state.property1 === "variant-11"
                  ? "/img/frame-40-1.svg"
                  : state.property1 === "frame-51"
                  ? "/img/frame-40-6.svg"
                  : state.property1 === "frame-53"
                  ? "/img/frame-40-8.svg"
                  : state.property1 === "frame-54"
                  ? "/img/frame-40-9.svg"
                  : state.property1 === "frame-55"
                  ? "/img/frame-42-14.svg"
                  : state.property1 === "variant-18"
                  ? "/img/frame-42-16.svg"
                  : state.property1 === "variant-16"
                  ? "/img/frame-42-17.svg"
                  : frame
              }
            />
          )}

          {["default", "frame-51", "frame-53", "frame-54", "variant-11"].includes(state.property1) && (
            <img
              className="img"
              alt="Frame"
              src={
                state.property1 === "variant-11"
                  ? "/img/frame-42-1.svg"
                  : state.property1 === "frame-51"
                  ? "/img/frame-42-10.svg"
                  : state.property1 === "frame-53"
                  ? "/img/frame-42-13.svg"
                  : state.property1 === "frame-54"
                  ? "/img/frame-42-15.svg"
                  : img
              }
            />
          )}
        </div>
      )}

      {(state.property1 === "frame-49" ||
        state.property1 === "frame-50" ||
        state.property1 === "frame-52" ||
        state.property1 === "tablets" ||
        state.property1 === "variant-13" ||
        state.property1 === "variant-14" ||
        state.property1 === "variant-15" ||
        state.property1 === "variant-17") && (
        <div className="top-menu-bar-3">
          <div className="frame-5">
            <div className="text-wrapper">villaja</div>
          </div>
          <div
            className="frame-5"
            onMouseEnter={() => {
              dispatch("mouse_enter_744");
            }}
          >
            <div className="text-wrapper-6">Phones</div>
          </div>
          <div
            className="frame-5"
            onMouseEnter={() => {
              dispatch("mouse_enter_746");
            }}
          >
            <div className="text-wrapper-8">Tablets</div>
          </div>
          <div
            className="frame-5"
            onMouseEnter={() => {
              dispatch("mouse_enter_748");
            }}
          >
            <div className="text-wrapper-9">Computers</div>
          </div>
          <div
            className="frame-5"
            onMouseEnter={() => {
              dispatch("mouse_enter_750");
            }}
          >
            <div className="text-wrapper-10">Accessories</div>
          </div>
          <div
            className="frame-5"
            onMouseEnter={() => {
              dispatch("mouse_enter_752");
            }}
          >
            <div className="text-wrapper-6">Support</div>
          </div>
          <img
            className="img"
            alt="Frame"
            src={["frame-52", "variant-17"].includes(state.property1) ? "/img/frame-39-12.svg" : "/img/frame-39-17.svg"}
          />
          {["variant-13", "variant-14", "variant-15", "variant-17"].includes(state.property1) && (
            <div
              className="shopping-cart-2"
              onMouseEnter={() => {
                dispatch("mouse_enter_836");
              }}
            >
              <div className="overlap-group-2">
                {state.property1 === "variant-13" && (
                  <>
                    <img className="vector" alt="Vector" src="/img/vector-15.svg" />
                    <div className="ellipse" />
                  </>
                )}

                {["variant-14", "variant-15", "variant-17"].includes(state.property1) && (
                  <div className="overlap-group">
                    <img className="vector" alt="Vector" src="/img/vector-15.svg" />
                    <div className="ellipse" />
                  </div>
                )}
              </div>
            </div>
          )}

          <img
            className="img"
            alt="Frame"
            src={
              state.property1 === "frame-49"
                ? "/img/frame-40-4.svg"
                : state.property1 === "frame-50"
                ? "/img/frame-40-5.svg"
                : state.property1 === "frame-52"
                ? "/img/frame-40-7.svg"
                : state.property1 === "variant-13"
                ? "/img/frame-42-5.svg"
                : state.property1 === "variant-14"
                ? "/img/frame-42-7.svg"
                : state.property1 === "variant-15"
                ? "/img/frame-42-9.svg"
                : state.property1 === "variant-17"
                ? "/img/frame-42-12.svg"
                : "/img/frame-40-3.svg"
            }
          />
          {["frame-49", "frame-50", "frame-52", "tablets"].includes(state.property1) && (
            <img
              className="img"
              alt="Frame"
              src={
                state.property1 === "frame-49"
                  ? "/img/frame-42-6.svg"
                  : state.property1 === "frame-50"
                  ? "/img/frame-42-8.svg"
                  : state.property1 === "frame-52"
                  ? "/img/frame-42-11.svg"
                  : "/img/frame-42-4.svg"
              }
            />
          )}
        </div>
      )}

      {["frame-49", "frame-50", "tablets", "variant-13", "variant-14", "variant-15"].includes(state.property1) && (
        <>
          <div className="text-wrapper-11">Sub-categories</div>
          <TopMenuComp
            className={`${
              ["frame-49", "variant-14"].includes(state.property1)
                ? "class"
                : ["frame-50", "variant-15"].includes(state.property1)
                ? "class-2"
                : "class-3"
            }`}
            text={
              ["frame-49", "variant-14"].includes(state.property1)
                ? "Laptops"
                : ["frame-50", "variant-15"].includes(state.property1)
                ? "Ear / Head Phones"
                : "Professional Tablets"
            }
          />
          <TopMenuComp
            className={`${
              ["tablets", "variant-13"].includes(state.property1)
                ? "class-4"
                : ["frame-49", "variant-14"].includes(state.property1)
                ? "class-5"
                : "class-6"
            }`}
            text={
              ["tablets", "variant-13"].includes(state.property1)
                ? "Educational Tablets"
                : ["frame-49", "variant-14"].includes(state.property1)
                ? "Desktops"
                : "Smartwatches"
            }
          />
        </>
      )}

      {["frame-50", "variant-15"].includes(state.property1) && (
        <>
          <TopMenuComp className="top-menu-comp-2" text="Speakers" />
          <TopMenuComp className="top-menu-comp-3" text="Microphones" />
          <TopMenuComp className="top-menu-comp-4" text="Chargers" />
          <TopMenuComp className="top-menu-comp-5" text="Phone Cases" />
          <TopMenuComp className="top-menu-comp-6" text="Storage Devices" />
          <TopMenuComp className="top-menu-comp-7" text="Gaming Accessories" />
          <TopMenuComp className="top-menu-comp-8" text="Keyboards &amp; Mice" />
          <TopMenuComp className="top-menu-comp-9" text="Laptop Bags" />
          <TopMenuComp className="top-menu-comp-10" text="Stands &amp; Lights" />
          <TopMenuComp className="top-menu-comp-11" text="Stylus &amp; Tablets" />
        </>
      )}

      {["frame-52", "variant-17"].includes(state.property1) && (
        <>
          <div className="frame-wrapper">
            <div className="frame-6">
              <img className="bx-search" alt="Bx search" src="/img/bx-search-10.svg" />
              <div className="default-2">Search...</div>
            </div>
          </div>
          <Buttons className="buttons-instance" property1="default-filled" text="SEARCH" />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "phones",
        };

      case "mouse_enter_654":
        return {
          property1: "tablets",
        };

      case "mouse_enter_656":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_658":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_660":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "variant-11") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "phones",
        };

      case "mouse_enter_654":
        return {
          property1: "tablets",
        };

      case "mouse_enter_656":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_658":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_660":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "phones") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_690":
        return {
          property1: "tablets",
        };

      case "mouse_enter_692":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_694":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_696":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "variant-12") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_690":
        return {
          property1: "tablets",
        };

      case "mouse_enter_692":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_694":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_696":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_728":
        return {
          property1: "frame-53",
        };
    }
  }

  if (state.property1 === "tablets") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_744":
        return {
          property1: "phones",
        };

      case "mouse_enter_746":
        return {
          property1: "tablets",
        };

      case "mouse_enter_748":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_750":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_752":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "variant-13") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_744":
        return {
          property1: "phones",
        };

      case "mouse_enter_746":
        return {
          property1: "variant-13",
        };

      case "mouse_enter_748":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_750":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_752":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "frame-49") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_744":
        return {
          property1: "phones",
        };

      case "mouse_enter_746":
        return {
          property1: "tablets",
        };

      case "mouse_enter_748":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_750":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_752":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "variant-14") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_744":
        return {
          property1: "phones",
        };

      case "mouse_enter_746":
        return {
          property1: "tablets",
        };

      case "mouse_enter_748":
        return {
          property1: "variant-14",
        };

      case "mouse_enter_750":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_752":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_836":
        return {
          property1: "frame-53",
        };
    }
  }

  if (state.property1 === "frame-50") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_851":
        return {
          property1: "phones",
        };

      case "mouse_enter_853":
        return {
          property1: "tablets",
        };

      case "mouse_enter_855":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_859":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "variant-15") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_851":
        return {
          property1: "phones",
        };

      case "mouse_enter_853":
        return {
          property1: "tablets",
        };

      case "mouse_enter_855":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_859":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_920":
        return {
          property1: "frame-53",
        };
    }
  }

  if (state.property1 === "frame-51") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter":
        return {
          property1: "phones",
        };

      case "mouse_enter_654":
        return {
          property1: "tablets",
        };

      case "mouse_enter_656":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_658":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_660":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "frame-52") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_983":
        return {
          property1: "phones",
        };

      case "mouse_enter_985":
        return {
          property1: "tablets",
        };

      case "mouse_enter_987":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_989":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_991":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "variant-17") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_983":
        return {
          property1: "phones",
        };

      case "mouse_enter_985":
        return {
          property1: "tablets",
        };

      case "mouse_enter_987":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_989":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_991":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1024":
        return {
          property1: "frame-53",
        };
    }
  }

  if (state.property1 === "frame-53") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter":
        return {
          property1: "phones",
        };

      case "mouse_enter_654":
        return {
          property1: "tablets",
        };

      case "mouse_enter_656":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_658":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_660":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "frame-55") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "phones",
        };

      case "mouse_enter_654":
        return {
          property1: "tablets",
        };

      case "mouse_enter_656":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_658":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_660":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1073":
        return {
          property1: "frame-53",
        };
    }
  }

  if (state.property1 === "frame-54") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter":
        return {
          property1: "phones",
        };

      case "mouse_enter_654":
        return {
          property1: "tablets",
        };

      case "mouse_enter_656":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_658":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_660":
        return {
          property1: "frame-51",
        };
    }
  }

  if (state.property1 === "variant-18") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter":
        return {
          property1: "phones",
        };

      case "mouse_enter_654":
        return {
          property1: "tablets",
        };

      case "mouse_enter_656":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_658":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_660":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1073":
        return {
          property1: "frame-53",
        };
    }
  }

  switch (action) {
    case "mouse_enter_688":
      return {
        ...state,
      };

    case "mouse_enter_857":
      return {
        ...state,
      };
  }

  return state;
}

TopBar.propTypes = {
  property1: PropTypes.oneOf([
    "phones",
    "variant-12",
    "variant-15",
    "default",
    "variant-11",
    "frame-51",
    "frame-55",
    "tablets",
    "frame-49",
    "variant-13",
    "variant-16",
    "frame-52",
    "variant-17",
    "frame-54",
    "frame-53",
    "variant-14",
    "frame-50",
    "variant-18",
  ]),
  frame: PropTypes.string,
  img: PropTypes.string,
};
