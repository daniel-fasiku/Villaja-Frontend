import React from "react";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { PropertyCategory } from "../../components/PropertyCategory";
import { PropertyTopic } from "../../components/PropertyTopic";
import { PropertyVertical } from "../../components/PropertyVertical";
import { TopBarSellerSide } from "../../components/TopBarSellerSide";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="overlap-2">
          <div className="graph">
            <img className="amazon-seller" alt="Amazon seller" src="/img/amazon-seller-dashboard-1.png" />
          </div>
          <div className="text-wrapper-9">Sales</div>
        </div>
        <div className="frame-4">
          <div className="div-wrapper">
            <div className="text-wrapper-10">0</div>
          </div>
          <div className="text-wrapper-11">New Customers</div>
          <img className="img" alt="Frame" src="/img/frame-121.svg" />
        </div>
        <div className="frame-5">
          <div className="div-wrapper">
            <div className="text-wrapper-10">0</div>
          </div>
          <div className="text-wrapper-11">Pending Orders</div>
          <img className="img" alt="Frame" src="/img/frame-121-2.svg" />
        </div>
        <div className="group-wrapper">
          <div className="group-4">
            <div className="frame-6">
              <div className="text-wrapper-10">NGN 0</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-10">0</div>
            </div>
            <div className="text-wrapper-12">Total Value</div>
            <div className="text-wrapper-13">Total Volume (Units Sold)</div>
          </div>
        </div>
        <BottomDirectory className="bottom-directory-instance" property1="seller-pov" />
        <div className="overlap-3">
          <Buttons className="design-component-instance-node" property1="default-filled" text="REQUEST PAYOUT" />
          <img className="remove-red-eye" alt="Remove red eye" src="/img/remove-red-eye.svg" />
          <div className="frame-8">
            <div className="text-wrapper-14">NGN 0</div>
          </div>
          <div className="text-wrapper-15">Available Balance</div>
        </div>
        <div className="group-5">
          <div className="frame-9">
            <div className="text-wrapper-10">Overview</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-16">Sort by :</div>
            <PropertyVertical text="Latest" />
          </div>
        </div>
        <div className="frame-11">
          <div className="div-wrapper">
            <div className="text-wrapper-10">0</div>
          </div>
          <div className="text-wrapper-11">New Orders</div>
          <img className="img" alt="Frame" src="/img/frame-121-1.svg" />
        </div>
        <div className="group-6">
          <PropertyTopic className="side-bar-comps" text="IAMAVILLAJER | ID-00000001" />
          <PropertyTopic className="property-1-topic" text="Settings" />
          <PropertyCategory className="design-component-instance-node-2" text="Home" />
          <PropertyTopic className="property-topic-instance" text="Orders" />
          <PropertyTopic className="property-1-topic-instance" text="Inventory" />
          <PropertyTopic className="side-bar-comps-2" text="Transactions" />
          <PropertyTopic className="side-bar-comps-3" text="Balances" />
          <PropertyTopic className="side-bar-comps-4" text="Customers" />
        </div>
        <TopBarSellerSide className="design-component-instance-node-2" property1="seller-dashboard" />
      </div>
    </div>
  );
};
