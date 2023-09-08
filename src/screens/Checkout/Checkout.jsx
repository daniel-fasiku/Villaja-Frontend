import React from "react";
import { BillingInfo } from "../../components/BillingInfo";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { CheckoutSelection } from "../../components/CheckoutSelection";
import { Hero } from "../../components/Hero";
import { IconInputFields } from "../../components/IconInputFields";
import { SelectPayment } from "../../components/SelectPayment";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const Checkout = () => {
  return (
    <div className="checkout">
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
        <div className="text-wrapper-20">Checkout</div>
        <div className="group-5">
          <IconInputFields
            className="design-component-instance-node"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="First Name"
          />
          <IconInputFields
            className="icon-input-fields-21"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="E-mail"
          />
          <IconInputFields
            className="icon-input-fields-22"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="Last Name"
          />
          <IconInputFields
            className="icon-input-fields-23"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="Phone"
          />
          <div className="text-wrapper-21">Contact Information</div>
        </div>
        <div className="group-6">
          <CheckoutSelection
            className="design-component-instance-node-2"
            property1="selected"
            text="3,000 NGN&nbsp;&nbsp;|&nbsp;&nbsp;Shipping within Lagos"
          />
          <div className="text-wrapper-21">Delivery Method</div>
        </div>
        <div className="group-7">
          <SelectPayment
            checkoutSelectionProperty1="selected"
            className="design-component-instance-node-2"
            property1="default"
            visible={false}
          />
          <div className="text-wrapper-21">Payment Method</div>
        </div>
        <div className="group-8">
          <IconInputFields
            className="icon-input-fields-24"
            frameClassName="icon-input-fields-25"
            leadingIcon={false}
            state="default"
            text="Street Address"
          />
          <IconInputFields
            className="icon-input-fields-21"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="disabled"
            text="Country"
            text1="Nigeria"
          />
          <IconInputFields
            className="icon-input-fields-23"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="State"
          />
          <IconInputFields
            className="icon-input-fields-26"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="Town/Area"
          />
          <IconInputFields
            className="icon-input-fields-27"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="ZIP Code"
            text2="000000"
          />
          <div className="text-wrapper-21">Shipping Information</div>
        </div>
        <div className="group-9">
          <IconInputFields
            className="design-component-instance-node"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="Card Number"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-21"
            frameClassName="icon-input-fields-20"
            leadingIcon={false}
            state="default"
            text="Cardholder’s Name"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-28"
            frameClassName="icon-input-fields-29"
            leadingIcon={false}
            state="default"
            text="Security Code"
            text2="Jake Smith"
          />
          <IconInputFields
            className="icon-input-fields-30"
            frameClassName="icon-input-fields-29"
            leadingIcon={false}
            state="default"
            text="Expiration Date"
            text2="Jake Smith"
          />
          <div className="text-wrapper-21">Payment</div>
        </div>
        <BillingInfo
          className="billing-info"
          divClassName="billing-info-instance"
          divClassNameOverride="billing-info-instance"
          property1="group-48"
        />
        <BottomDirectory className="bottom-directory-instance" property1="default" />
        <div className="frame-18">
          <div className="text-wrapper-22">Cart Summary</div>
          <Buttons className="buttons-3" property1="checkout-default" />
          <div className="text-wrapper-23">Total:</div>
          <div className="text-wrapper-24">N603,000</div>
        </div>
      </div>
    </div>
  );
};
