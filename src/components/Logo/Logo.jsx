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
      <div className={`text-wrapper-12 ${divClassName}`}>v</div>
      <div className={`text-wrapper-13 ${divClassNameOverride}`}>i</div>
      <div className={`text-wrapper-14 ${divClassName1}`}>l</div>
      <div className={`text-wrapper-15 ${divClassName2}`}>l</div>
      <div className="overlap">
        <div className={`text-wrapper-12 ${divClassName3}`}>a</div>
        <div className={`text-wrapper-16 ${divClassName4}`}>a</div>
        <div className="group">
          <div className="overlap-group-3">
            <div className={`text-wrapper-17 ${divClassName5}`}>j</div>
            <div className="ellipse-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
