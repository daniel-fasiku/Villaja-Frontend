/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icons1 } from "../../icons/Icons1";
import { VariantGhostIconWrapper } from "../VariantGhostIconWrapper";
import "./style.css";

export const HomepageSub = ({
  property1,
  className,
  groupClassName,
  picClassName,
  iphoneClassName,
  iphone = "/img/iphone-1-24.png",
  img = "/img/iphone-1-29.png",
  iphone1 = "/img/iphone-1-26.png",
  iphone2 = "/img/iphone-1-27.png",
  iphone3 = "/img/iphone-1-28.png",
  iphone4 = "/img/iphone-1-23.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "earphone-1",
  });

  return (
    <div
      className={`homepage-sub ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`group-6 ${groupClassName}`}>
        {(state.property1 === "android-phone-1" ||
          state.property1 === "androiid-phone-2" ||
          state.property1 === "basic-phone-1" ||
          state.property1 === "basic-phone-2" ||
          state.property1 === "earphone-1" ||
          state.property1 === "earphone-2" ||
          state.property1 === "gaming-1" ||
          state.property1 === "iphone-1" ||
          state.property1 === "iphones-2" ||
          state.property1 === "new-phone-1" ||
          state.property1 === "new-phone-2" ||
          state.property1 === "no-animation" ||
          state.property1 === "phone-accessory-1" ||
          state.property1 === "phone-accessory-2" ||
          state.property1 === "pre-owned-phone-2" ||
          state.property1 === "preowned-phone-1" ||
          state.property1 === "variant-8" ||
          state.property1 === "watches-1") && (
          <div className="smart-watches">
            {state.property1 === "watches-1" && <>Smart Watches</>}

            {state.property1 === "gaming-1" && <>Gaming Accessories</>}

            {state.property1 === "variant-8" && (
              <>
                <div className="text-wrapper-16">Smart Watches</div>
                <VariantGhostIconWrapper
                  className="buttons-4"
                  divClassName="buttons-5"
                  icon="right"
                  override={<Icons1 className="icons-1" color="url(#paint0_linear_1248_12924)" />}
                  size="small"
                  text="Shop"
                  variant="ghost"
                />
              </>
            )}

            {["earphone-1", "earphone-2"].includes(state.property1) && <>Earphones &amp; Headphones</>}

            {["iphone-1", "iphones-2"].includes(state.property1) && <>iPhones</>}

            {state.property1 === "android-phone-1" && (
              <>
                Android <br />
                Phones
              </>
            )}

            {["basic-phone-1", "basic-phone-2"].includes(state.property1) && (
              <>
                Basic <br />
                Phones
              </>
            )}

            {["new-phone-1", "new-phone-2"].includes(state.property1) && <>Brand New Phones</>}

            {["pre-owned-phone-2", "preowned-phone-1"].includes(state.property1) && <>Pre-Owned &amp; Refurbished</>}

            {["phone-accessory-1", "phone-accessory-2"].includes(state.property1) && <>Phone Accessories</>}

            {state.property1 === "no-animation" && <>title</>}

            {state.property1 === "androiid-phone-2" && <>Android Phones</>}
          </div>
        )}

        {(state.property1 === "cases-1" ||
          state.property1 === "chargers-1" ||
          state.property1 === "keyboard-1" ||
          state.property1 === "laptop-bag-1" ||
          state.property1 === "laptop-bag-2" ||
          state.property1 === "mic-1" ||
          state.property1 === "speakers-1") && (
          <img
            className="iphone-2"
            alt="Iphone"
            src={
              state.property1 === "speakers-1"
                ? "/img/iphone-1-16.png"
                : state.property1 === "keyboard-1"
                ? "/img/iphone-1-17.png"
                : state.property1 === "mic-1"
                ? "/img/iphone-1-18.png"
                : state.property1 === "laptop-bag-1"
                ? "/img/iphone-1-19.png"
                : state.property1 === "cases-1"
                ? "/img/iphone-1-28.png"
                : state.property1 === "chargers-1"
                ? "/img/iphone-1-21.png"
                : "/img/iphone-1-7.png"
            }
          />
        )}
      </div>
      <div className={`pic-3 ${picClassName}`}>
        {(state.property1 === "android-phone-1" ||
          state.property1 === "basic-phone-1" ||
          state.property1 === "earphone-1" ||
          state.property1 === "gaming-1" ||
          state.property1 === "iphone-1" ||
          state.property1 === "new-phone-1" ||
          state.property1 === "no-animation" ||
          state.property1 === "phone-accessory-1" ||
          state.property1 === "preowned-phone-1" ||
          state.property1 === "watches-1") && (
          <img
            className={`iphone-3 ${iphoneClassName}`}
            alt="Iphone"
            src={
              state.property1 === "watches-1"
                ? "/img/iphone-1.png"
                : state.property1 === "gaming-1"
                ? "/img/iphone-1-1.png"
                : state.property1 === "iphone-1"
                ? iphone4
                : state.property1 === "android-phone-1"
                ? iphone
                : state.property1 === "new-phone-1"
                ? iphone1
                : state.property1 === "preowned-phone-1"
                ? iphone2
                : state.property1 === "phone-accessory-1"
                ? iphone3
                : img
            }
          />
        )}

        {(state.property1 === "cases-1" ||
          state.property1 === "cases-2" ||
          state.property1 === "chargers-1" ||
          state.property1 === "chargers-2" ||
          state.property1 === "gaming-2" ||
          state.property1 === "keyboard-1" ||
          state.property1 === "keyboard-2" ||
          state.property1 === "laptop-bag-1" ||
          state.property1 === "laptop-bag-2" ||
          state.property1 === "mic-1" ||
          state.property1 === "mic-2" ||
          state.property1 === "speakers-1" ||
          state.property1 === "speakers-2" ||
          state.property1 === "stand-1" ||
          state.property1 === "stand-2" ||
          state.property1 === "storage-1" ||
          state.property1 === "storage-2" ||
          state.property1 === "stylus-2" ||
          state.property1 === "styus-1" ||
          state.property1 === "variant-6" ||
          state.property1 === "watches-2") && (
          <div className={`smart-watches ${iphoneClassName}`}>
            {state.property1 === "watches-2" && <>Smart Watches</>}

            {state.property1 === "gaming-2" && <>Gaming Accessories</>}

            {["speakers-1", "speakers-2"].includes(state.property1) && <>Speakers</>}

            {state.property1 === "keyboard-2" && <>Keyboard &amp; Mouse</>}

            {["mic-1", "mic-2"].includes(state.property1) && <>Microphones</>}

            {["laptop-bag-1", "laptop-bag-2"].includes(state.property1) && <>Laptop Bags</>}

            {["cases-1", "cases-2"].includes(state.property1) && <>Cases &amp; Covers</>}

            {["chargers-1", "chargers-2"].includes(state.property1) && <>Chargers &amp; More</>}

            {["storage-1", "storage-2"].includes(state.property1) && <>Storage</>}

            {["stylus-2", "styus-1"].includes(state.property1) && <>Stylus &amp; Tablet</>}

            {["stand-1", "stand-2"].includes(state.property1) && <>Stands &amp; Lights</>}

            {state.property1 === "keyboard-1" && <>Keyboards &amp; Mice</>}

            {state.property1 === "variant-6" && (
              <>
                <div className="text-wrapper-17">Earphones</div>
                <VariantGhostIconWrapper
                  className="buttons-6"
                  divClassName="buttons-5"
                  icon="right"
                  override={<Icons1 className="icons-1" color="url(#paint0_linear_1248_12928)" />}
                  size="small"
                  text="Shop"
                  variant="ghost"
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "watches-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "watches-2",
        };
    }
  }

  if (state.property1 === "watches-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "watches-1",
        };
    }
  }

  if (state.property1 === "gaming-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "gaming-2",
        };
    }
  }

  if (state.property1 === "gaming-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "gaming-1",
        };
    }
  }

  if (state.property1 === "speakers-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "speakers-1",
        };
    }
  }

  if (state.property1 === "keyboard-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "keyboard-1",
        };
    }
  }

  if (state.property1 === "mic-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "mic-1",
        };
    }
  }

  if (state.property1 === "laptop-bag-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "laptop-bag-1",
        };
    }
  }

  if (state.property1 === "cases-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "cases-1",
        };
    }
  }

  if (state.property1 === "chargers-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "chargers-1",
        };
    }
  }

  if (state.property1 === "storage-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "storage-1",
        };
    }
  }

  if (state.property1 === "stylus-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "styus-1",
        };
    }
  }

  if (state.property1 === "stand-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "stand-1",
        };
    }
  }

  if (state.property1 === "storage-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "storage-2",
        };
    }
  }

  if (state.property1 === "styus-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "stylus-2",
        };
    }
  }

  if (state.property1 === "stand-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "stand-2",
        };
    }
  }

  if (state.property1 === "speakers-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "speakers-2",
        };
    }
  }

  if (state.property1 === "keyboard-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "keyboard-2",
        };
    }
  }

  if (state.property1 === "mic-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "mic-2",
        };
    }
  }

  if (state.property1 === "laptop-bag-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "laptop-bag-2",
        };
    }
  }

  if (state.property1 === "cases-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "cases-2",
        };
    }
  }

  if (state.property1 === "chargers-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "chargers-2",
        };
    }
  }

  if (state.property1 === "earphone-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "earphone-2",
        };
    }
  }

  if (state.property1 === "earphone-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "earphone-1",
        };
    }
  }

  if (state.property1 === "iphone-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "iphones-2",
        };
    }
  }

  if (state.property1 === "iphones-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "iphone-1",
        };
    }
  }

  if (state.property1 === "android-phone-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "androiid-phone-2",
        };
    }
  }

  if (state.property1 === "androiid-phone-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "android-phone-1",
        };
    }
  }

  if (state.property1 === "basic-phone-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "basic-phone-2",
        };
    }
  }

  if (state.property1 === "basic-phone-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "basic-phone-1",
        };
    }
  }

  if (state.property1 === "new-phone-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "new-phone-2",
        };
    }
  }

  if (state.property1 === "new-phone-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "new-phone-1",
        };
    }
  }

  if (state.property1 === "preowned-phone-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "pre-owned-phone-2",
        };
    }
  }

  if (state.property1 === "pre-owned-phone-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "preowned-phone-1",
        };
    }
  }

  if (state.property1 === "phone-accessory-1") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "phone-accessory-2",
        };
    }
  }

  if (state.property1 === "phone-accessory-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "phone-accessory-1",
        };
    }
  }

  if (state.property1 === "no-animation") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "earphone-2",
        };
    }
  }

  return state;
}

HomepageSub.propTypes = {
  property1: PropTypes.oneOf([
    "stand-1",
    "watches-1",
    "laptop-bag-1",
    "preowned-phone-1",
    "variant-6",
    "mic-1",
    "new-phone-1",
    "earphone-1",
    "basic-phone-1",
    "basic-phone-2",
    "no-animation",
    "speakers-2",
    "storage-2",
    "phone-accessory-2",
    "mic-2",
    "keyboard-1",
    "gaming-1",
    "earphone-2",
    "speakers-1",
    "gaming-2",
    "keyboard-2",
    "phone-accessory-1",
    "android-phone-1",
    "new-phone-2",
    "chargers-2",
    "variant-8",
    "pre-owned-phone-2",
    "storage-1",
    "watches-2",
    "iphones-2",
    "androiid-phone-2",
    "stand-2",
    "iphone-1",
    "chargers-1",
    "laptop-bag-2",
    "cases-2",
    "styus-1",
    "cases-1",
    "stylus-2",
  ]),
  iphone: PropTypes.string,
  img: PropTypes.string,
  iphone1: PropTypes.string,
  iphone2: PropTypes.string,
  iphone3: PropTypes.string,
  iphone4: PropTypes.string,
};
