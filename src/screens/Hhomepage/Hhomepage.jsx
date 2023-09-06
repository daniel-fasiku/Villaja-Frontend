import React from "react";
import { BiggerHero } from "../../components/BiggerHero";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { HomepageCategories } from "../../components/HomepageCategories";
import { HomepageSub } from "../../components/HomepageSub";
import { IconInputFields } from "../../components/IconInputFields";
import { Logo } from "../../components/Logo";
import { ProductDisplay } from "../../components/ProductDisplay";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const Hhomepage = () => {
  return (
    <div className="hhomepage">
      <div className="div-2">
        <div className="frame-10">
          <Logo
            className="navbar"
            divClassName="logo-instance"
            divClassName1="logo-instance"
            divClassName2="logo-instance"
            divClassName3="logo-instance"
            divClassName4="logo-instance"
            divClassName5="logo-instance"
            divClassNameOverride="logo-instance"
          />
          <div className="pic-4" />
          <div className="group-7">
            <p className="from-sellers-you-can"> from sellers you can trust</p>
            <BiggerHero property1="phonesult" propertyPhonesult="/img/bigger-hero-animation.svg" />
          </div>
          <div className="group-8">
            <IconInputFields
              bxSearch="/img/bx-search-1.svg"
              bxSearchClassName="icon-input-fields-5"
              className="design-component-instance-node"
              defaultClassName="icon-input-fields-6"
              frameClassName="icon-input-fields-4"
              state="disabled"
              text="Search..."
            />
            <Buttons className="buttons-8" property1="default-filled" text="GO" />
          </div>
        </div>
        <div className="bestsellers">
          <ProductDisplay
            className="product-display-instance"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="product-display-4"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-11"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-12"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-13"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-14"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <div className="group-9">
            <div className="overlap-group-5">
              <div className="text-wrapper-29">Best Selling Items</div>
              <div className="see-more">See more &gt;</div>
            </div>
          </div>
        </div>
        <div className="top-deals">
          <ProductDisplay
            className="product-display-instance"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="product-display-4"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-11"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-12"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-13"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-14"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <div className="group-10">
            <div className="overlap-group-6">
              <div className="text-wrapper-30">Top Deals</div>
              <p className="text-wrapper-31">-up to 30% off on the latest tech!</p>
              <div className="see-more-2">See more &gt;</div>
            </div>
          </div>
        </div>
        <div className="top-deals-2">
          <ProductDisplay
            className="design-component-instance-node-2"
            divClassName="product-display-7"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-5"
            iphoneProMaxClassName="product-display-6"
            property1="inactive-home-display"
            reviewClassName="product-display-7"
          />
          <ProductDisplay
            className="product-display-4"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-11"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-12"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-13"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <ProductDisplay
            className="frame-14"
            divClassName="product-display-3"
            elementStarsImg="/img/star-2.svg"
            elementStarsStar="/img/star-3.svg"
            imageClassName="product-display-2"
            iphoneProMaxClassName="product-display-3"
            property1="inactive-home-display"
            reviewClassName="product-display-3"
          />
          <div className="group-10">
            <div className="overlap-group-6">
              <div className="text-wrapper-32">Official Store Deals</div>
              <p className="text-wrapper-33">-up to 30% off on the latest tech!</p>
              <div className="see-more-2">See more &gt;</div>
            </div>
          </div>
        </div>
        <div className="group-11">
          <div className="group-12">
            <div className="overlap-group-6">
              <div className="text-wrapper-34">Shop Accessories</div>
              <div className="shop-all">Shop all &gt;</div>
            </div>
          </div>
          <HomepageSub
            className="homepage-sub-categories"
            groupClassName="homepage-sub-instance"
            iphone="/img/iphone-1-15.png"
            iphoneClassName="homepage-sub-2"
            picClassName="homepage-sub-categories-instance"
            property1="watches-1"
          />
          <HomepageSub
            className="homepage-sub-3"
            groupClassName="homepage-sub-instance"
            img="/img/iphone-1-14.png"
            iphoneClassName="homepage-sub-2"
            picClassName="homepage-sub-categories-instance"
            property1="gaming-1"
          />
          <HomepageSub
            className="homepage-sub-4"
            groupClassName="homepage-sub-categories-instance"
            iphone1="/img/iphone-1-13.png"
            iphoneClassNameOverride="homepage-sub-2"
            picClassName="homepage-sub-5"
            property1="speakers-1"
          />
          <HomepageSub
            className="homepage-sub-6"
            groupClassName="homepage-sub-categories-instance"
            iphone2="/img/iphone-1-12.png"
            iphoneClassNameOverride="homepage-sub-2"
            picClassName="homepage-sub-instance"
            property1="keyboard-1"
          />
          <HomepageSub
            className="homepage-sub-7"
            groupClassName="homepage-sub-categories-instance"
            iphone3="/img/iphone-1-11.png"
            iphoneClassNameOverride="homepage-sub-2"
            picClassName="homepage-sub-8"
            property1="mic-1"
          />
          <HomepageSub
            className="homepage-sub-9"
            groupClassName="homepage-sub-categories-instance"
            iphone4="/img/iphone-1-10.png"
            iphoneClassNameOverride="homepage-sub-2"
            picClassName="homepage-sub-10"
            property1="laptop-bag-1"
          />
          <HomepageSub
            className="homepage-sub-11"
            groupClassName="homepage-sub-categories-instance"
            iphone5="/img/iphone-1-9.png"
            iphoneClassNameOverride="homepage-sub-2"
            picClassName="homepage-sub-instance"
            property1="chargers-1"
          />
          <HomepageSub
            className="homepage-sub-12"
            groupClassName="homepage-sub-13"
            picClassName="homepage-sub-instance"
            property1="stand-1"
          />
          <HomepageSub
            className="homepage-sub-14"
            groupClassName="homepage-sub-categories-instance"
            iphone6="/img/iphone-1-7.png"
            iphoneClassNameOverride="homepage-sub-2"
            picClassName="homepage-sub-instance"
            property1="cases-1"
          />
          <HomepageSub
            className="homepage-sub-15"
            groupClassName="homepage-sub-16"
            picClassName="homepage-sub-instance"
            property1="styus-1"
          />
          <HomepageSub
            className="design-component-instance-node-2"
            groupClassName="homepage-sub-instance"
            iphone7="/img/iphone-1-5.png"
            iphoneClassName="homepage-sub-2"
            picClassName="homepage-sub-categories-instance"
            property1="earphone-1"
          />
          <HomepageSub
            className="homepage-sub-17"
            groupClassName="homepage-sub-18"
            picClassName="homepage-sub-instance"
            property1="storage-1"
          />
        </div>
        <BottomDirectory
          className="bottom-directory-instance"
          frameClassName="bottom-directory-3"
          logoLogoClassName="bottom-directory-2"
          property1="default"
        />
        <div className="group-13">
          <div className="group-14">
            <div className="overlap-group-5">
              <div className="text-wrapper-35">Shop By Category</div>
            </div>
          </div>
          <HomepageCategories
            className="homepage-categories-instance"
            groupClassName="homepage-categories-2"
            iphone="/img/iphone-1-4.png"
            iphoneClassName="homepage-categories-4"
            picClassName="homepage-categories-3"
            property="tablet-1"
          />
          <HomepageCategories
            className="homepage-categories-5"
            groupClassName="homepage-categories-2"
            img="/img/iphone-1-3.png"
            iphoneClassName="homepage-categories-4"
            picClassName="homepage-categories-3"
            property="computer-1"
          />
          <HomepageCategories
            className="homepage-categories-6"
            groupClassName="homepage-categories-2"
            iphone1="/img/iphone-1-2.png"
            iphoneClassName="homepage-categories-4"
            picClassName="homepage-categories-3"
            property="accessories-1"
          />
          <HomepageCategories
            className="homepage-categories-7"
            groupClassName="homepage-categories-2"
            iphone2="/img/iphone-1-1.png"
            iphoneClassName="homepage-categories-4"
            picClassName="homepage-categories-3"
            property="phone-1"
          />
        </div>
        <TopBar
          className="top-bar-instance"
          frame="/img/frame-40-10.svg"
          img="/img/frame-42-18.svg"
          property1="default"
          topMenuBarClassName="top-bar-2"
        />
      </div>
    </div>
  );
};
