import React from "react";
import { Buttons } from "../../components/Buttons";
import { Exit1 } from "../../icons/Exit1";
import "./style.css";

export const AddedToCart = () => {
  return (
    <div className="added-to-cart">
      <div className="div">
        <img className="vector" alt="Vector" src="/img/vector.svg" />
        <div className="text-wrapper">Added to Cart!</div>
        <Buttons className="buttons-instance" property1="default-filled" text="CHECKOUT" />
        <div className="text-wrapper-2">Continue shopping...</div>
        <Exit1 className="exit" />
      </div>
    </div>
  );
};
