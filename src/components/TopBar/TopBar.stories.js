import { TopBar } from ".";

export default {
  title: "Components/TopBar",
  component: TopBar,
  argTypes: {
    property1: {
      options: [
        "phones",
        "variant-12",
        "variant-15",
        "default",
        "variant-11",
        "frame-51",
        "frame-55",
        "tablets",
        "frame-49",
        "variant-13",
        "variant-16",
        "frame-52",
        "variant-17",
        "frame-54",
        "frame-53",
        "variant-14",
        "frame-50",
        "variant-18",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "phones",
    className: {},
    topMenuBarClassName: {},
    hasFrame: true,
    hasDiv: true,
    visible: true,
    hasFrame1: true,
    hasFrame2: true,
    hasImg: true,
    hasShoppingCartWrapper: true,
    hasFrame3: true,
  },
};
