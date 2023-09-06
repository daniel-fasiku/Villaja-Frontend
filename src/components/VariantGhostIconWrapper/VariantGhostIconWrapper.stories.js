import { VariantGhostIconWrapper } from ".";

export default {
  title: "Components/VariantGhostIconWrapper",
  component: VariantGhostIconWrapper,
  argTypes: {
    variant: {
      options: ["filled", "outlined", "ghost"],
      control: { type: "select" },
    },
    icon: {
      options: ["none", "right", "left"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    iconLeft: true,
    variant: "filled",
    icon: "none",
    size: "large",
    className: {},
    divClassName: {},
    text: "Small",
    icons2StyleOverrideClassName: {},
  },
};
