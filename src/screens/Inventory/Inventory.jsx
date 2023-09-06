import React from "react";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { ProductListing } from "../../components/ProductListing";
import { PropertyCategory } from "../../components/PropertyCategory";
import { PropertyTopic } from "../../components/PropertyTopic";
import { PropertyVertical } from "../../components/PropertyVertical";
import { TopBarSellerSide } from "../../components/TopBarSellerSide";
import "./style.css";

export const Inventory = () => {
  return (
    <div className="inventory">
      <div className="div-2">
        <TopBarSellerSide className="design-component-instance-node" property1="seller-dashboard" />
        <BottomDirectory className="bottom-directory-instance" property1="seller-pov" />
        <div className="overlap-2">
          <div className="group-3">
            <div className="frame-4">
              <div className="text-wrapper-13">NGN 1,000,000</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-13">08-May-2023</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-13">50</div>
            </div>
          </div>
          <ProductListing className="design-component-instance-node" text="100" />
        </div>
        <ProductListing className="product-listing-instance" text="5" />
        <ProductListing className="product-listing-2" text="10" />
        <ProductListing className="product-listing-3" text="2" />
        <ProductListing className="product-listing-4" text="8" />
        <img className="page-counter" alt="Page counter" src="/img/page-counter.svg" />
        <div className="group-4">
          <div className="frame-7">
            <div className="text-wrapper-14">Inventory</div>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-15">Sort by :</div>
            <PropertyVertical text="Latest" />
          </div>
          <Buttons className="buttons-6" divClassName="buttons-7" property1="small-filled" text="ADD" />
          <div className="frame-9">
            <img className="bx-search" alt="Bx search" src="/img/bx-search.svg" />
            <div className="default-2">search inventory</div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="group-5">
            <div className="product-name">
              <div className="text-wrapper-16">Product</div>
            </div>
            <div className="item-price">
              <div className="text-wrapper-16">Unit Price</div>
            </div>
            <div className="date-added-2">
              <div className="text-wrapper-16">Date Added</div>
            </div>
            <div className="qty-of-units-sold">
              <div className="text-wrapper-16">In Stock</div>
            </div>
          </div>
          <div className="qty-of-units-sold-2">
            <div className="text-wrapper-16">SKU</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-4">
            <div className="frame-10">
              <div className="text-wrapper-17">1-10</div>
              <div className="text-wrapper-18">/</div>
              <div className="text-wrapper-18">100 products</div>
            </div>
            <div className="download">Download &gt;</div>
          </div>
        </div>
        <div className="group-6">
          <PropertyTopic className="side-bar-comps" text="IAMAVILLAJER | ID-00000001" />
          <PropertyTopic className="property-1-topic" text="Settings" />
          <PropertyTopic className="design-component-instance-node" text="Home" />
          <PropertyTopic className="property-topic-instance" text="Orders" />
          <PropertyCategory className="property-1-category-3-active" text="Inventory" to="/inventory" />
          <PropertyTopic className="property-1-topic-instance" text="Transactions" />
          <PropertyTopic className="side-bar-comps-2" text="Balances" />
          <PropertyTopic className="side-bar-comps-3" text="Customers" />
        </div>
      </div>
    </div>
  );
};
