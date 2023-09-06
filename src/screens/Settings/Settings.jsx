import React from "react";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { IconInputFields } from "../../components/IconInputFields";
import { MediaPlaceholder } from "../../components/MediaPlaceholder";
import { PropertyCategory } from "../../components/PropertyCategory";
import { PropertyTopic } from "../../components/PropertyTopic";
import { TopBarSellerSide } from "../../components/TopBarSellerSide";
import "./style.css";

export const Settings = () => {
  return (
    <div className="settings">
      <div className="div-2">
        <TopBarSellerSide className="top-bar-seller-side-instance" property1="seller-dashboard" />
        <BottomDirectory className="bottom-directory-instance" property1="seller-pov" />
        <div className="frame-wrapper">
          <div className="frame-5">
            <div className="text-wrapper-10">Profile</div>
          </div>
        </div>
        <div className="group-3">
          <IconInputFields
            className="icon-input-fields-instance"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="default"
            text="Jake"
            text1="Business Name"
          />
          <IconInputFields
            className="icon-input-fields-2"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="default"
            text=" Smith"
            text1="Business E-mail Address"
          />
          <IconInputFields
            className="icon-input-fields-3"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="default"
            text="Street address"
            text1="Street Address"
          />
          <IconInputFields
            className="icon-input-fields-4"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="default"
            text="Lekki"
            text1="Town/Area"
          />
          <IconInputFields
            className="icon-input-fields-5"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="disabled"
            text1="Country"
            text2="Nigeria"
          />
          <IconInputFields
            className="icon-input-fields-6"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="default"
            text="Lagos"
            text1="State"
          />
          <IconInputFields
            className="icon-input-fields-7"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="default"
            text="0800 000 0000"
            text1="Phone Number"
          />
          <div className="text-wrapper-11">Business Information</div>
        </div>
        <div className="group-4">
          <IconInputFields
            className="icon-input-fields-8"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="default"
            text="Jake"
            text1="Bank Name"
          />
          <IconInputFields
            className="icon-input-fields-9"
            frameClassName="icon-input-fields-10"
            leadingIcon={false}
            state="default"
            text=" Smith"
            text1="Account Number"
          />
          <IconInputFields
            className="icon-input-fields-11"
            frameClassName="design-component-instance-node"
            leadingIcon={false}
            state="disabled"
            text1="Country"
            text2="Nigeria"
          />
          <div className="text-wrapper-11">Bank Account Information</div>
        </div>
        <div className="frame-6">
          <MediaPlaceholder
            icons1StyleOverrideClassName="media-placeholder-instance"
            variant="image"
            variantDiagramClassName="media-placeholder"
          />
          <div className="text-wrapper-12">Upload Logo</div>
          <Buttons className="buttons-6" divClassName="buttons-7" property1="small-filled" text="UPLOAD" />
          <Buttons className="buttons-9" divClassNameOverride="buttons-8" property1="default-outlined" text1="REMOVE" />
        </div>
        <div className="group-5">
          <PropertyTopic className="side-bar-comps" text="IAMAVILLAJER | ID-00000001" />
          <PropertyCategory className="property-1-category-3-active" text="Settings" to="/settings" />
          <PropertyTopic className="property-1-topic" text="Home" />
          <PropertyTopic className="property-topic-instance" text="Orders" />
          <PropertyTopic className="property-1-topic-instance" text="Inventory" />
          <PropertyTopic className="side-bar-comps-2" text="Transactions" />
          <PropertyTopic className="side-bar-comps-3" text="Balances" />
          <PropertyTopic className="side-bar-comps-4" text="Customers" />
        </div>
      </div>
    </div>
  );
};
