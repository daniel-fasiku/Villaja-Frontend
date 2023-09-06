import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProductListing = ({ className, text = "9,999,999" }) => {
  return (
    <div className={`product-listing ${className}`}>
      <div className="product-name-and-img">
        <div className="pic">
          <img className="image" alt="Image" src="/img/image-4.png" />
        </div>
        <div className="frame-3">
          <p className="text-wrapper-10">Iphone Pro Max 13 256GB (Red)</p>
        </div>
      </div>
      <div className="price">
        <div className="text-wrapper-11">NGN 1,000,000</div>
      </div>
      <div className="date-added">
        <div className="text-wrapper-11">08-May-2023</div>
      </div>
      <div className="units-sold">
        <div className="text-wrapper-11">{text}</div>
      </div>
      <div className="units-sold-2">
        <div className="text-wrapper-12">AP044MP1KRHLDNAFAMZ</div>
      </div>
    </div>
  );
};

ProductListing.propTypes = {
  text: PropTypes.string,
};
