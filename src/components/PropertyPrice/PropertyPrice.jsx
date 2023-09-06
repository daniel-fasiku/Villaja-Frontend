import PropTypes from "prop-types";
import React from "react";
import { IconInputFields } from "../IconInputFields";
import "./style.css";

export const PropertyPrice = ({ className, ellipse = "/img/ellipse-23-2.svg" }) => {
  return (
    <div className={`property-price ${className}`}>
      <IconInputFields
        className="icon-input-fields-instance"
        frameClassName="design-component-instance-node"
        hasDefault={false}
        leadingIcon={false}
        state="entered"
        text="500"
      />
      <IconInputFields
        className="icon-input-fields-2"
        frameClassName="design-component-instance-node"
        hasDefault={false}
        leadingIcon={false}
        state="entered"
        text="3,000,000"
      />
      <div className="text-wrapper-19">-</div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-5">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <img className="ellipse-2" alt="Ellipse" src={ellipse} />
        </div>
      </div>
    </div>
  );
};

PropertyPrice.propTypes = {
  ellipse: PropTypes.string,
};
