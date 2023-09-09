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
        divClassName={`${property1 === "seller-pov" ? "class" : "class-2"}`}
        divClassName1={`${property1 === "seller-pov" ? "class" : "class-2"}`}
        divClassName2={`${property1 === "seller-pov" ? "class" : "class-2"}`}
        divClassName3={`${property1 === "seller-pov" ? "class" : "class-2"}`}
        divClassName4={`${property1 === "seller-pov" ? "class" : "class-2"}`}
        divClassName5={`${property1 === "seller-pov" ? "class" : "class-2"}`}
        divClassNameOverride={`${property1 === "seller-pov" ? "class" : "class-2"}`}
      />
      <div className="frame-2">
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "default" ? "instance-node" : "class-3"}`}
          text={property1 === "default" ? "Sell on villaja" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "seller-pov" ? "class-3" : "instance-node"}`}
          text={property1 === "seller-pov" ? "Terms of Use" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={`${property1 === "seller-pov" ? "class-3" : "instance-node"}`}
          text={property1 === "seller-pov" ? "Privacy Policy" : "Terms of Use"}
        />
        <TopMenuComp
          className={`${property1 === "seller-pov" ? "top-menu-comp-2" : "top-menu-comp-instance"}`}
          divClassName={`${property1 === "seller-pov" ? "class-3" : "instance-node"}`}
          text={property1 === "seller-pov" ? "Contact" : "Privacy Policy"}
        />
        {property1 === "default" && (
          <>
            <TopMenuComp className="top-menu-comp-2" divClassName="instance-node" text="About" />
            <TopMenuComp className="top-menu-comp-2" divClassName="instance-node" text="Contact" />
            <TopMenuComp className="top-menu-comp-2" divClassName="instance-node" text="Careers" />
          </>
        )}
      </div>
    </div>
  );
};

BottomDirectory.propTypes = {
  property1: PropTypes.oneOf(["seller-pov", "default"]),
};
