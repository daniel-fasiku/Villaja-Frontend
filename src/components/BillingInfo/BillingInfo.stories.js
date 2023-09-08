import { BillingInfo } from ".";

export default {
  title: "Components/BillingInfo",
  component: BillingInfo,
  argTypes: {
    property1: {
      options: ["group-49", "group-48"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "group-49",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
