import React from "react";
import { Buttons } from "../../components/Buttons";
import { OrderStatus } from "../../components/OrderStatus";
import "./style.css";

export const ReadyToShipOrder = () => {
  return (
    <div className="ready-to-ship-order">
      <div className="div">
        <div className="frame">
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper">Order Summary</div>
            </div>
            <div className="text-wrapper-2">Order #000010</div>
            <div className="text-wrapper-3">Placed on 08-May-2023 14;55pm</div>
            <OrderStatus className="order-status-instance" property1="ready-to-ship" />
          </div>
          <div className="frame-2">
            <div className="frame-2">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="frame-5">
                    <div className="frame-6">
                      <p className="p">Iphone Pro Max 13 256GB (Red)</p>
                    </div>
                    <div className="frame-7">
                      <div className="text-wrapper-4">5</div>
                    </div>
                    <div className="frame-8">
                      <div className="text-wrapper-5">NGN 0,000,000</div>
                    </div>
                  </div>
                  <div className="frame-5">
                    <div className="frame-6">
                      <p className="p">Iphone Pro Max 13 256GB (Red)</p>
                    </div>
                    <div className="frame-7">
                      <div className="text-wrapper-4">1</div>
                    </div>
                    <div className="frame-8">
                      <div className="text-wrapper-5">NGN 0,000,000</div>
                    </div>
                  </div>
                  <div className="frame-5">
                    <div className="frame-6">
                      <p className="p">Iphone Pro Max 13 256GB (Red)</p>
                    </div>
                    <div className="frame-7">
                      <div className="text-wrapper-4">2</div>
                    </div>
                    <div className="frame-8">
                      <div className="text-wrapper-5">NGN 0,000,000</div>
                    </div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="frame-9">
                    <div className="text-wrapper-6">Shipping Fee</div>
                    <div className="text-wrapper-7">NGN 0,000</div>
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-6">Total</div>
                    <div className="text-wrapper-8">NGN 00,000,000</div>
                  </div>
                </div>
              </div>
              <div className="group-3">
                <div className="text-wrapper-9">Customer Information</div>
                <div className="group-4">
                  <div className="text-wrapper-10">Jane Smith</div>
                  <img className="account-circle" alt="Account circle" src="/img/account-circle.svg" />
                </div>
                <div className="group-5">
                  <div className="text-wrapper-11">janesmith@google.com</div>
                  <img className="img" alt="Email" src="/img/email.svg" />
                </div>
                <div className="group-6">
                  <div className="text-wrapper-11">0809 000 0000</div>
                  <img className="img" alt="Phone" src="/img/phone.svg" />
                </div>
              </div>
            </div>
            <div className="group-7">
              <div className="text-wrapper-12">Deivery Information</div>
              <div className="text-wrapper-13">123, ABC Street,</div>
              <div className="text-wrapper-14">Lagos, Nigeria</div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="text-wrapper">Order Progress</div>
        </div>
        <img className="line" alt="Line" src="/img/line-8.svg" />
        <div className="group-8">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <p className="delivery-is-due">
                Delivery is due 3-5 days from the time the order is placed.
                <br />
                Keep to time to keep your ratings up!
              </p>
              <img className="local-shipping" alt="Local shipping" src="/img/local-shipping.svg" />
            </div>
          </div>
          <img className="info" alt="Info" src="/img/info.svg" />
          <p className="text-wrapper-15">To change shipping times, edit them in your Product pages</p>
        </div>
        <div className="order-recieved">
          <div className="text-wrapper-16">Order Received</div>
          <p className="text-wrapper-17">Pack it up and request a dispatch ASAP!</p>
          <div className="text-wrapper-18">08-May-2023 14:55pm</div>
          <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
        </div>
        <div className="order-recieved-2">
          <p className="text-wrapper-16">Order is Ready To Ship</p>
          <p className="text-wrapper-17">Be ready - a dispatcher will pick up from you within 24 hours.</p>
          <div className="text-wrapper-18">08-May-2023 14:55pm</div>
          <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
        </div>
        <img className="close" alt="Close" src="/img/close.svg" />
        <Buttons className="buttons-instance" property1="default-filled" text="MARK AS SHIPPED" />
      </div>
    </div>
  );
};
