import React from "react";
import { BottomDirectory } from "../../components/BottomDirectory";
import { Buttons } from "../../components/Buttons";
import { IconInputFields } from "../../components/IconInputFields";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const CustomerLogIn = () => {
  return (
    <div className="customer-log-in">
      <div className="div-2">
        <BottomDirectory className="bottom-directory-instance" property1="default" />
        <TopBar
          className="top-bar-instance"
          hasDiv={false}
          hasFrame={false}
          hasFrame1={false}
          hasFrame2={false}
          hasFrame3={false}
          hasImg={false}
          hasShoppingCartWrapper={false}
          property1="default"
          topMenuBarClassName="design-component-instance-node"
          visible={false}
        />
        <div className="frame-12">
          <div className="text-wrapper-18">Welcome, Villajer</div>
          <IconInputFields
            frameClassName="icon-input-fields-instance"
            leadingIcon={false}
            state="default"
            text="jaysmith@example.com"
            text1="E-mail address:"
          />
          <IconInputFields
            frameClassName="icon-input-fields-instance"
            leadingIcon={false}
            state="default"
            text="Enter password"
            text1="Password:"
          />
          <Buttons className="buttons-2" property1="default-filled" text="LOG IN" />
          <div className="group-2">
            <p className="p">Don’t have an account ?</p>
            <img className="line" alt="Line" src="/img/line-9.svg" />
            <img className="line-2" alt="Line" src="/img/line-10.svg" />
          </div>
          <img className="buttons-3" alt="Buttons" src="/img/buttons.svg" />
        </div>
      </div>
    </div>
  );
};
