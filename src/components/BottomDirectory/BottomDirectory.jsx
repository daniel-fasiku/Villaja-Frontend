import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import { TopMenuComp } from "../TopMenuComp";
import "./style.css";

export const BottomDirectory = ({ property1, className, logoLogoClassName, frameClassName }) => {
  return (
    <div className={`bottom-directory property-1-9-${property1} ${className}`}>
      <Logo
        className={logoLogoClassName}
        divClassName={`${property1 === "seller-pov" ? "class-3" : "class-4"}`}
        divClassName1={`${property1 === "seller-pov" ? "class-3" : "class-4"}`}
        divClassName2={`${property1 === "seller-pov" ? "class-3" : "class-4"}`}
        divClassName3={`${property1 === "seller-pov" ? "class-3" : "class-4"}`}
        divClassName4={`${property1 === "seller-pov" ? "class-3" : "class-4"}`}
        divClassName5={`${property1 === "seller-pov" ? "class-3" : "class-4"}`}
        divClassNameOverride={`${property1 === "seller-pov" ? "class-3" : "class-4"}`}
      />
      <div className={`frame-3 ${frameClassName}`}>
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "default" ? "top-menu-comp-2" : "class-5"}`}
          text={property1 === "default" ? "Sell on villaja" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "seller-pov" ? "class-5" : "top-menu-comp-2"}`}
          text={property1 === "seller-pov" ? "Terms of Use" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "seller-pov" ? "class-5" : "top-menu-comp-2"}`}
          text={property1 === "seller-pov" ? "Privacy Policy" : "Terms of Use"}
        />
        <TopMenuComp
          className={`${property1 === "seller-pov" ? "top-menu-comp-3" : "top-menu-comp-instance"}`}
          divClassName={`${property1 === "seller-pov" ? "class-5" : "top-menu-comp-2"}`}
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
