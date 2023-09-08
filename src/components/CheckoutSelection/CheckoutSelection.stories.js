import { CheckoutSelection } from ".";

export default {
  title: "Components/CheckoutSelection",
  component: CheckoutSelection,
  argTypes: {
    property1: {
      options: ["selection-inactive", "selection-hover", "selected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "selection-inactive",
    className: {},
    text: "default",
  },
};
