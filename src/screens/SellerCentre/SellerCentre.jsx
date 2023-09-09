import React from "react";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { HomepageCategories } from "../../components/HomepageCategories";
import { Logo } from "../../components/Logo";
import { TopBarSellerSide } from "../../components/TopBarSellerSide";
import "./style.css";

export const SellerCentre = () => {
  return (
    <div className="seller-centre">
      <div className="div-2">
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="group-5">
              <div className="text-wrapper-9">Start selling with</div>
              <Logo
                className="navbar"
                divClassName="design-component-instance-node"
                divClassName1="design-component-instance-node"
                divClassName2="design-component-instance-node"
                divClassName3="design-component-instance-node"
                divClassName4="design-component-instance-node"
                divClassName5="design-component-instance-node"
                divClassNameOverride="design-component-instance-node"
              />
            </div>
            <Buttons className="buttons-7" property1="large-filled" text="START SELLING" />
          </div>
        </div>
        <Buttons className="buttons-8" property1="large-filled" text="START SELLING" />
        <div className="div-wrapper">
          <div className="overlap-3">
            <div className="text-wrapper-10">How It Works</div>
            <div className="see-details">See details &gt;</div>
          </div>
        </div>
        <div className="frame-4">
          <div className="frame-5">
            <div className="overlap-group-3">
              <img className="vector" alt="Vector" src="/img/vector-1.svg" />
            </div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-11">Step 1</div>
            <p className="text-wrapper-12">Create a seller account on villaja.com</p>
          </div>
        </div>
        <div className="frame-7">
          <div className="frame-5">
            <div className="overlap-group-3">
              <img className="img" alt="Thumb up alt" src="/img/thumb-up-alt.svg" />
            </div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-11">Step 2</div>
            <p className="text-wrapper-12">Complete&nbsp;&nbsp;registration and become a Certified Villajer</p>
          </div>
        </div>
        <div className="frame-8">
          <div className="frame-5">
            <div className="overlap-group-3">
              <img className="library-add" alt="Library add" src="/img/person-add.png" />
              <img className="person-add" alt="Person add" src="/img/person-add.png" />
              <img className="vector-2" alt="Vector" src="/img/vector.svg" />
            </div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-11">Step 3</div>
            <p className="text-wrapper-12">List your products, add details and set prices</p>
          </div>
        </div>
        <div className="frame-9">
          <div className="frame-5">
            <div className="point-of-sale-wrapper">
              <img className="img" alt="Point of sale" src="/img/point-of-sale.svg" />
            </div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-11">Step 4</div>
            <p className="text-wrapper-12">Sell and enjoy benefits of the Villaja platform</p>
          </div>
        </div>
        <div className="group-6">
          <div className="group-7">
            <div className="overlap-group-4">
              <div className="text-wrapper-13">Categories to Sell Under</div>
              <div className="see-details">See details &gt;</div>
            </div>
          </div>
          <HomepageCategories className="homepage-categories-instance" property="phone-1" />
          <HomepageCategories className="homepage-categories-2" property="tablet-1" />
          <HomepageCategories className="homepage-categories-3" property="computer-1" />
          <HomepageCategories className="homepage-categories-4" property="accessories-1" />
        </div>
        <div className="group-8">
          <div className="overlap-group-4">
            <div className="text-wrapper-13">Why Villaja?</div>
            <div className="see-details">See details &gt;</div>
          </div>
        </div>
        <div className="frame-10">
          <img className="done" alt="Done" src="/img/done-2.svg" />
          <p className="text-wrapper-14">Free until your first sale</p>
        </div>
        <div className="frame-11">
          <img className="done" alt="Done" src="/img/done-1.svg" />
          <div className="text-wrapper-14">Improve your revenue</div>
        </div>
        <div className="frame-12">
          <img className="done" alt="Done" src="/img/done.svg" />
          <div className="text-wrapper-14">We handle the logistics</div>
        </div>
        <BottomDirectory className="bottom-directory-instance" property1="seller-pov" />
        <TopBarSellerSide buttonsText="LOG IN" className="top-bar-seller-side-instance" property1="seller-home" />
      </div>
    </div>
  );
};
