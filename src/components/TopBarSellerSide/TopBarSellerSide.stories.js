import { TopBarSellerSide } from ".";

export default {
  title: "Components/TopBarSellerSide",
  component: TopBarSellerSide,
  argTypes: {
    property1: {
      options: ["seller-home", "add-product", "seller-sign-up", "seller-dashboard"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "seller-home",
    className: {},
  },
};
