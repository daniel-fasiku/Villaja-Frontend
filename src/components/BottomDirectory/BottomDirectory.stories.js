import { BottomDirectory } from ".";

export default {
  title: "Components/BottomDirectory",
  component: BottomDirectory,
  argTypes: {
    property1: {
      options: ["seller-pov", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "seller-pov",
    className: {},
  },
};
