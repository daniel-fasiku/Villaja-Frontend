/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Logo = ({
  className,
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
  divClassName3,
  divClassName4,
  divClassName5,
}) => {
  return (
    <div className={`logo ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>v</div>
      <div className={`div ${divClassNameOverride}`}>i</div>
      <div className={`text-wrapper-2 ${divClassName1}`}>l</div>
      <div className={`text-wrapper-3 ${divClassName2}`}>l</div>
      <div className="overlap">
        <div className={`text-wrapper ${divClassName3}`}>a</div>
        <div className={`text-wrapper-4 ${divClassName4}`}>a</div>
        <div className="group">
          <div className="overlap-group">
            <div className={`text-wrapper-5 ${divClassName5}`}>j</div>
            <div className="ellipse" />
          </div>
        </div>
      </div>
    </div>
  );
};
