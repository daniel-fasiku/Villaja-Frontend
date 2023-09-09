import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    property1: {
      options: [
        "smaall-outlined",
        "large-filled",
        "large-inactive",
        "large-outlined",
        "checkout-default",
        "small-ghost",
        "small-filled",
        "xsmall-outlined",
        "default-ghost",
        "default-inactive",
        "large-outlined-hover",
        "xsmall-filled",
        "default-filled-hover",
        "default-filled",
        "default-outlined",
        "large-filled-hover",
        "small-inactive",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "smaall-outlined",
    className: {},
    text: "ADD TO CART",
    divClassName: {},
    text1: "BUY NOW",
  },
};
