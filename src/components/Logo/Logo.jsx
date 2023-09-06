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
      <div className={`text-wrapper-3 ${divClassName}`}>v</div>
      <div className={`text-wrapper-4 ${divClassNameOverride}`}>i</div>
      <div className={`text-wrapper-5 ${divClassName1}`}>l</div>
      <div className={`text-wrapper-6 ${divClassName2}`}>l</div>
      <div className="overlap">
        <div className={`text-wrapper-3 ${divClassName3}`}>a</div>
        <div className={`text-wrapper-7 ${divClassName4}`}>a</div>
        <div className="div-wrapper">
          <div className="overlap-group-2">
            <div className={`text-wrapper-8 ${divClassName5}`}>j</div>
            <div className="ellipse" />
          </div>
        </div>
      </div>
    </div>
  );
};
