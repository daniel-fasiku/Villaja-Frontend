import { DiscountSection } from ".";

export default {
  title: "Components/DiscountSection",
  component: DiscountSection,
  argTypes: {
    property1: {
      options: ["discounted-only", "top-deals", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "discounted-only",
  },
};
