import React from "react";
import { Buttons } from "../../components/Buttons";
import { Exit } from "../../icons/Exit";
import "./style.css";

export const OrderPlaced = () => {
  return (
    <div className="order-placed">
      <div className="div">
        <img className="vector" alt="Vector" src="/img/vector.svg" />
        <div className="text-wrapper">Order Placed!</div>
        <Buttons className="buttons-instance" property1="default-filled" text="BACK TO HOME" />
        <p className="p">Check your e-mail for your receipt.</p>
        <Exit className="exit-1" />
      </div>
    </div>
  );
};
