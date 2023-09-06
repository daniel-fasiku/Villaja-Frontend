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
      className={`top-bar property-1-14-${state.property1} ${className}`}
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
            <div className="frame-20">
              <div className="text-wrapper-22">villaja</div>
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
                <div className="phones">Phones</div>
              </div>
              <div
                className="frame-21"
                onMouseEnter={() => {
                  dispatch("mouse_enter_865");
                }}
              >
                <div className="text-wrapper-23">Tablets</div>
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
                className="frame-22"
                onMouseEnter={() => {
                  dispatch("mouse_enter_867");
                }}
              >
                <div className="text-wrapper-24">Computers</div>
              </div>
              <div
                className="frame-23"
                onMouseEnter={() => {
                  dispatch("mouse_enter_869");
                }}
              >
                <div className="text-wrapper-25">Accessories</div>
              </div>
              <div
                className="frame-24"
                onMouseEnter={() => {
                  dispatch("mouse_enter_871");
                }}
              >
                <div className="text-wrapper-26">Support</div>
              </div>
              <img
                className="frame-25"
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
                <div className="frame-26">
                  <div className="text-wrapper-22">villaja</div>
                </div>
                <div
                  className="frame-26"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_899");
                  }}
                >
                  <div className="phones-2">Phones</div>
                </div>
                <div
                  className="frame-26"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_901");
                  }}
                >
                  <div className="text-wrapper-27">Tablets</div>
                </div>
                <div
                  className="frame-26"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_903");
                  }}
                >
                  <div className="text-wrapper-27">Computers</div>
                </div>
                <div
                  className="frame-26"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_905");
                  }}
                >
                  <div className="text-wrapper-27">Accessories</div>
                </div>
                <div
                  className="frame-26"
                  onMouseEnter={() => {
                    dispatch("mouse_enter_907");
                  }}
                >
                  <div className="text-wrapper-27">Support</div>
                </div>
                <img className="frame-25" alt="Frame" src="/img/frame-39-17.svg" />
                {state.property1 === "variant-12" && (
                  <div
                    className="shopping-cart-wrapper"
                    onMouseEnter={() => {
                      dispatch("mouse_enter_939");
                    }}
                  >
                    <div className="shopping-cart">
                      <div className="overlap-group-11">
                        <img className="vector" alt="Vector" src="/img/vector-15.svg" />
                        <div className="ellipse-3" />
                      </div>
                    </div>
                  </div>
                )}

                <img
                  className="frame-25"
                  alt="Frame"
                  src={state.property1 === "variant-12" ? "/img/frame-42-3.svg" : "/img/frame-40-2.svg"}
                />
                {state.property1 === "phones" && <img className="frame-25" alt="Frame" src="/img/frame-42-2.svg" />}
              </div>
              <div className="text-wrapper-28">Sub-categories</div>
              <TopMenuComp className="top-menu-comp-4" text="Basic Phones" />
              <TopMenuComp className="top-menu-comp-5" text="Smart Phones" />
            </>
          )}

          {["frame-55", "variant-16", "variant-18"].includes(state.property1) && (
            <div
              className="shopping-cart-wrapper"
              onMouseEnter={() => {
                dispatch("mouse_enter_1284");
              }}
            >
              <div className="shopping-cart-2">
                <div className="overlap-group-11">
                  <img
                    className="vector"
                    alt="Vector"
                    src={state.property1 === "frame-55" ? "/img/vector-11.svg" : "/img/vector-15.svg"}
                  />
                  <div className="ellipse-3" />
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
              className="frame-25"
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
              className="frame-25"
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
          <div className="frame-26">
            <div className="text-wrapper-22">villaja</div>
          </div>
          <div
            className="frame-26"
            onMouseEnter={() => {
              dispatch("mouse_enter_955");
            }}
          >
            <div className="text-wrapper-27">Phones</div>
          </div>
          <div
            className="frame-26"
            onMouseEnter={() => {
              dispatch("mouse_enter_957");
            }}
          >
            <div className="text-wrapper-29">Tablets</div>
          </div>
          <div
            className="frame-26"
            onMouseEnter={() => {
              dispatch("mouse_enter_959");
            }}
          >
            <div className="text-wrapper-30">Computers</div>
          </div>
          <div
            className="frame-26"
            onMouseEnter={() => {
              dispatch("mouse_enter_961");
            }}
          >
            <div className="text-wrapper-31">Accessories</div>
          </div>
          <div
            className="frame-26"
            onMouseEnter={() => {
              dispatch("mouse_enter_963");
            }}
          >
            <div className="text-wrapper-27">Support</div>
          </div>
          <img
            className="frame-25"
            alt="Frame"
            src={["frame-52", "variant-17"].includes(state.property1) ? "/img/frame-39-12.svg" : "/img/frame-39-17.svg"}
          />
          {["variant-13", "variant-14", "variant-15", "variant-17"].includes(state.property1) && (
            <div
              className="shopping-cart-3"
              onMouseEnter={() => {
                dispatch("mouse_enter_1047");
              }}
            >
              <div className="overlap-group-12">
                {state.property1 === "variant-13" && (
                  <>
                    <img className="vector" alt="Vector" src="/img/vector-15.svg" />
                    <div className="ellipse-3" />
                  </>
                )}

                {["variant-14", "variant-15", "variant-17"].includes(state.property1) && (
                  <div className="overlap-group-11">
                    <img className="vector" alt="Vector" src="/img/vector-15.svg" />
                    <div className="ellipse-3" />
                  </div>
                )}
              </div>
            </div>
          )}

          <img
            className="frame-25"
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
              className="frame-25"
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
          <div className="text-wrapper-32">Sub-categories</div>
          <TopMenuComp
            className={`${
              ["frame-49", "variant-14"].includes(state.property1)
                ? "class-8"
                : ["frame-50", "variant-15"].includes(state.property1)
                ? "class-9"
                : "class-10"
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
                ? "class-11"
                : ["frame-49", "variant-14"].includes(state.property1)
                ? "class-12"
                : "class-13"
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
          <TopMenuComp className="top-menu-comp-6" text="Speakers" />
          <TopMenuComp className="top-menu-comp-7" text="Microphones" />
          <TopMenuComp className="top-menu-comp-8" text="Chargers" />
          <TopMenuComp className="top-menu-comp-9" text="Phone Cases" />
          <TopMenuComp className="top-menu-comp-10" text="Storage Devices" />
          <TopMenuComp className="top-menu-comp-11" text="Gaming Accessories" />
          <TopMenuComp className="top-menu-comp-12" text="Keyboards &amp; Mice" />
          <TopMenuComp className="top-menu-comp-13" text="Laptop Bags" />
          <TopMenuComp className="top-menu-comp-14" text="Stands &amp; Lights" />
          <TopMenuComp className="top-menu-comp-15" text="Stylus &amp; Tablets" />
        </>
      )}

      {["frame-52", "variant-17"].includes(state.property1) && (
        <>
          <div className="icon-input-fields-3">
            <div className="frame-27">
              <img className="bx-search-3" alt="Bx search" src="/img/bx-search-10.svg" />
              <div className="default-8">Search...</div>
            </div>
          </div>
          <Buttons className="buttons-7" property1="default-filled" text="SEARCH" />
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

      case "mouse_enter_865":
        return {
          property1: "tablets",
        };

      case "mouse_enter_867":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_869":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_871":
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

      case "mouse_enter_865":
        return {
          property1: "tablets",
        };

      case "mouse_enter_867":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_869":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_871":
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

      case "mouse_enter_901":
        return {
          property1: "tablets",
        };

      case "mouse_enter_903":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_905":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_907":
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

      case "mouse_enter_901":
        return {
          property1: "tablets",
        };

      case "mouse_enter_903":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_905":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_907":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_939":
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

      case "mouse_enter_955":
        return {
          property1: "phones",
        };

      case "mouse_enter_957":
        return {
          property1: "tablets",
        };

      case "mouse_enter_959":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_961":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_963":
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

      case "mouse_enter_955":
        return {
          property1: "phones",
        };

      case "mouse_enter_957":
        return {
          property1: "variant-13",
        };

      case "mouse_enter_959":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_961":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_963":
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

      case "mouse_enter_955":
        return {
          property1: "phones",
        };

      case "mouse_enter_957":
        return {
          property1: "tablets",
        };

      case "mouse_enter_959":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_961":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_963":
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

      case "mouse_enter_955":
        return {
          property1: "phones",
        };

      case "mouse_enter_957":
        return {
          property1: "tablets",
        };

      case "mouse_enter_959":
        return {
          property1: "variant-14",
        };

      case "mouse_enter_961":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_963":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1047":
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

      case "mouse_enter_1062":
        return {
          property1: "phones",
        };

      case "mouse_enter_1064":
        return {
          property1: "tablets",
        };

      case "mouse_enter_1066":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_1070":
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

      case "mouse_enter_1062":
        return {
          property1: "phones",
        };

      case "mouse_enter_1064":
        return {
          property1: "tablets",
        };

      case "mouse_enter_1066":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_1070":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1131":
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

      case "mouse_enter_865":
        return {
          property1: "tablets",
        };

      case "mouse_enter_867":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_869":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_871":
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

      case "mouse_enter_1194":
        return {
          property1: "phones",
        };

      case "mouse_enter_1196":
        return {
          property1: "tablets",
        };

      case "mouse_enter_1198":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_1200":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_1202":
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

      case "mouse_enter_1194":
        return {
          property1: "phones",
        };

      case "mouse_enter_1196":
        return {
          property1: "tablets",
        };

      case "mouse_enter_1198":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_1200":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_1202":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1235":
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

      case "mouse_enter_865":
        return {
          property1: "tablets",
        };

      case "mouse_enter_867":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_869":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_871":
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

      case "mouse_enter_865":
        return {
          property1: "tablets",
        };

      case "mouse_enter_867":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_869":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_871":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1284":
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

      case "mouse_enter_865":
        return {
          property1: "tablets",
        };

      case "mouse_enter_867":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_869":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_871":
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

      case "mouse_enter_865":
        return {
          property1: "tablets",
        };

      case "mouse_enter_867":
        return {
          property1: "frame-49",
        };

      case "mouse_enter_869":
        return {
          property1: "frame-50",
        };

      case "mouse_enter_871":
        return {
          property1: "frame-51",
        };

      case "mouse_enter_1284":
        return {
          property1: "frame-53",
        };
    }
  }

  switch (action) {
    case "mouse_enter_899":
      return {
        ...state,
      };

    case "mouse_enter_1068":
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
