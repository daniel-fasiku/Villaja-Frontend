import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TopBarSellerSide = ({ property1, className }) => {
  return (
    <div className={`top-bar-seller-side ${property1} ${className}`}>
      {["seller-dashboard", "seller-home", "seller-sign-up"].includes(property1) && (
        <div className="frame">
          <div className="div">
            <div className="seller-centre-logo">
              {["seller-home", "seller-sign-up"].includes(property1) && (
                <>
                  <div className="text-wrapper">villaja</div>
                  <div className="text-wrapper-2">seller centre</div>
                </>
              )}

              {property1 === "seller-dashboard" && <>villaja</>}
            </div>
            <div className="group">
              {property1 === "seller-home" && (
                <>
                  <button className="buttons">
                    <div className="ADD-TO-CART">LOGIN</div>
                  </button>
                  <button className="ADD-TO-CART-wrapper">
                    <div className="ADD-TO-CART-2">SIGN UP</div>
                  </button>
                </>
              )}

              {property1 === "seller-dashboard" && <>seller centre</>}

              {property1 === "seller-sign-up" && (
                <div className="BUY-NOW-wrapper">
                  <div className="BUY-NOW">LOG IN</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {property1 === "add-product" && (
        <>
          <div className="seller-centre-logo-wrapper">
            <div className="seller-centre-logo-2">
              <div className="text-wrapper">villaja</div>
              <div className="text-wrapper-2">seller centre</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="p">Add a Product - Add Details</p>
              <img className="close" alt="Close" src="/img/close.svg" />
              <div className="group-2">
                <div className="div-wrapper">
                  <div className="ADD-TO-CART-3">SAVE &amp; ADD</div>
                </div>
                <button className="button">
                  <div className="ADD-TO-CART-4">CANCEL</div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

TopBarSellerSide.propTypes = {
  property1: PropTypes.oneOf(["seller-home", "add-product", "seller-sign-up", "seller-dashboard"]),
};
