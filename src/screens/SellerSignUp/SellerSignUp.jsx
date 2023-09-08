import React from "react";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { IconInputFields } from "../../components/IconInputFields";
import { PropertyInactive } from "../../components/PropertyInactive";
import { SelectPayment } from "../../components/SelectPayment";
import { TopBarSellerSide } from "../../components/TopBarSellerSide";
import "./style.css";

export const SellerSignUp = () => {
  return (
    <div className="seller-sign-up">
      <div className="div-2">
        <BottomDirectory className="bottom-directory-instance" property1="seller-pov" />
        <div className="text-wrapper-9">Seller Sign Up</div>
        <IconInputFields
          className="icon-input-fields-instance"
          frameClassName="design-component-instance-node"
          leadingIcon={false}
          state="default"
          text="Shop Name"
        />
        <div className="text-wrapper-10">Seller Account Information</div>
        <PropertyInactive
          className="property-1-inactive-filter"
          text="I have read and accepted the Terms &amp; Conditions."
        />
        <div className="group-4">
          <SelectPayment
            checkoutSelectionText="Individual"
            checkoutSelectionText1="Registered Business"
            className="select-payment-method"
            property1="default"
          />
          <div className="text-wrapper-11">Account Type</div>
        </div>
        <IconInputFields
          className="icon-input-fields-2"
          frameClassName="design-component-instance-node"
          leadingIcon={false}
          state="default"
          text="Account Hander First and Last Name"
          text1="Jake"
        />
        <IconInputFields
          className="icon-input-fields-3"
          frameClassName="design-component-instance-node"
          leadingIcon={false}
          state="default"
          text="Account Handler Phone Number"
          text1="Jake Smith"
        />
        <IconInputFields
          className="icon-input-fields-4"
          frameClassName="design-component-instance-node"
          leadingIcon={false}
          state="default"
          text="E-mail Address"
          text1="Jake Smith"
        />
        <IconInputFields
          className="icon-input-fields-5"
          frameClassName="design-component-instance-node"
          leadingIcon={false}
          state="default"
          text="Password"
          text1="Jake Smith"
        />
        <IconInputFields
          className="icon-input-fields-6"
          frameClassName="design-component-instance-node"
          leadingIcon={false}
          state="default"
          text="Re-type&nbsp;&nbsp;e-mail address"
          text1="Jake Smith"
        />
        <IconInputFields
          className="icon-input-fields-7"
          frameClassName="design-component-instance-node"
          leadingIcon={false}
          state="default"
          text="Re-type&nbsp;&nbsp;Password"
          text1="Jake Smith"
        />
        <Buttons className="buttons-7" property1="default-filled" text="SIGN UP" />
        <TopBarSellerSide className="top-bar-seller-side-instance" property1="seller-sign-up" />
      </div>
    </div>
  );
};
