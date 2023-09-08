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
    frame: "/img/frame-40.svg",
    img: "/img/frame-42.svg",
  },
};
