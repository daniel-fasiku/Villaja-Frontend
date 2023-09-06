import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import { TopMenuComp } from "../TopMenuComp";
import "./style.css";

export const BottomDirectory = ({ property1, className }) => {
  return (
    <div className={`bottom-directory property-1-31-${property1} ${className}`}>
      <Logo
        className="logo-3"
        divClassName={`${property1 === "seller-pov" ? "class-9" : "class-10"}`}
        divClassName1={`${property1 === "seller-pov" ? "class-9" : "class-10"}`}
        divClassName2={`${property1 === "seller-pov" ? "class-9" : "class-10"}`}
        divClassName3={`${property1 === "seller-pov" ? "class-9" : "class-10"}`}
        divClassName4={`${property1 === "seller-pov" ? "class-9" : "class-10"}`}
        divClassName5={`${property1 === "seller-pov" ? "class-9" : "class-10"}`}
        divClassNameOverride={`${property1 === "seller-pov" ? "class-9" : "class-10"}`}
      />
      <div className="frame-8">
        <TopMenuComp
          className="top-menu-comp-13"
          divClassName={`${property1 === "default" ? "top-menu-comp-12" : "class-11"}`}
          text={property1 === "default" ? "Sell on villaja" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-13"
          divClassName={`${property1 === "seller-pov" ? "class-11" : "top-menu-comp-12"}`}
          text={property1 === "seller-pov" ? "Terms of Use" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-13"
          divClassName={`${property1 === "seller-pov" ? "class-11" : "top-menu-comp-12"}`}
          text={property1 === "seller-pov" ? "Privacy Policy" : "Terms of Use"}
        />
        <TopMenuComp
          className={`${property1 === "seller-pov" ? "top-menu-comp-14" : "top-menu-comp-13"}`}
          divClassName={`${property1 === "seller-pov" ? "class-11" : "top-menu-comp-12"}`}
          text={property1 === "seller-pov" ? "Contact" : "Privacy Policy"}
        />
        {property1 === "default" && (
          <>
            <TopMenuComp className="top-menu-comp-14" divClassName="top-menu-comp-12" text="About" />
            <TopMenuComp className="top-menu-comp-14" divClassName="top-menu-comp-12" text="Contact" />
            <TopMenuComp className="top-menu-comp-14" divClassName="top-menu-comp-12" text="Careers" />
          </>
        )}
      </div>
    </div>
  );
};

BottomDirectory.propTypes = {
  property1: PropTypes.oneOf(["seller-pov", "default"]),
};
