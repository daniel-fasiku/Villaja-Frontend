import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import { TopMenuComp } from "../TopMenuComp";
import "./style.css";

export const BottomDirectory = ({ property1, className }) => {
  return (
    <div className={`bottom-directory ${property1} ${className}`}>
      <Logo
        className="logo-instance"
        divClassName={`${property1 === "seller-pov" && "class"}`}
        divClassName1={`${property1 === "seller-pov" && "class"}`}
        divClassName2={`${property1 === "seller-pov" && "class"}`}
        divClassName3={`${property1 === "seller-pov" && "class"}`}
        divClassName4={`${property1 === "seller-pov" && "class"}`}
        divClassName5={`${property1 === "seller-pov" && "class"}`}
        divClassNameOverride={`${property1 === "seller-pov" && "class"}`}
      />
      <div className="frame-2">
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "default" ? "top-menu-comp-2" : "class-2"}`}
          text={property1 === "default" ? "Sell on villaja" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "seller-pov" ? "class-2" : "top-menu-comp-2"}`}
          text={property1 === "seller-pov" ? "Terms of Use" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "seller-pov" ? "class-2" : "top-menu-comp-2"}`}
          text={property1 === "seller-pov" ? "Privacy Policy" : "Terms of Use"}
        />
        <TopMenuComp
          className={`${property1 === "seller-pov" ? "top-menu-comp-3" : "top-menu-comp-instance"}`}
          divClassName={`${property1 === "seller-pov" ? "class-2" : "top-menu-comp-2"}`}
          text={property1 === "seller-pov" ? "Contact" : "Privacy Policy"}
        />
        {property1 === "default" && (
          <>
            <TopMenuComp className="top-menu-comp-3" divClassName="top-menu-comp-2" text="About" />
            <TopMenuComp className="top-menu-comp-3" divClassName="top-menu-comp-2" text="Contact" />
            <TopMenuComp className="top-menu-comp-3" divClassName="top-menu-comp-2" text="Careers" />
          </>
        )}
      </div>
    </div>
  );
};

BottomDirectory.propTypes = {
  property1: PropTypes.oneOf(["seller-pov", "default"]),
};
