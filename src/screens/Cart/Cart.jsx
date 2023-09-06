import React from "react";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { Hero } from "../../components/Hero";
import { ProductDisplay } from "../../components/ProductDisplay";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const Cart = () => {
  return (
    <div className="cart">
      <div className="div-2">
        <TopBar
          className="top-bar-instance"
          frame="/img/frame-40-10.svg"
          img="/img/frame-42-18.svg"
          property1="default"
        />
        <Hero
          biggerHeroPropertyPhonesult="/img/bigger-hero-animation-2.svg"
          className="hero-instance"
          property1="variant-1"
        />
        <div className="rectangle-2" />
        <div className="text-wrapper-27">Your Cart</div>
        <div className="frame-9">
          <ProductDisplay
            className="product-display-instance"
            property1="in-cart-format"
            qtyComponentIconButton="/img/icon-button-23.svg"
          />
          <ProductDisplay
            className="product-display-instance"
            property1="in-cart-format"
            qtyComponentIconButton="/img/icon-button-22.svg"
          />
          <ProductDisplay
            className="product-display-instance"
            property1="in-cart-format"
            qtyComponentIconButton="/img/icon-button-21.svg"
          />
          <ProductDisplay
            className="product-display-instance"
            property1="in-cart-format"
            qtyComponentIconButton="/img/icon-button-20.svg"
          />
        </div>
        <BottomDirectory className="bottom-directory-instance" property1="default" />
        <div className="frame-10">
          <div className="text-wrapper-28">Cart Summary</div>
          <Buttons className="design-component-instance-node" property1="checkout-default" />
          <div className="text-wrapper-29">Sub-total:</div>
          <div className="text-wrapper-30">N600,000</div>
        </div>
      </div>
    </div>
  );
};
