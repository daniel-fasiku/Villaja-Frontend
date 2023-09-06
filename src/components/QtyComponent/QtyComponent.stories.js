import { QtyComponent } from ".";

export default {
  title: "Components/QtyComponent",
  component: QtyComponent,
  argTypes: {
    property1: {
      options: [
        "frame-58",
        "frame-59",
        "frame-55",
        "frame-57",
        "frame-63",
        "frame-61",
        "frame-60",
        "frame-56",
        "frame-54",
        "frame-62",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-58",
    className: {},
    iconButton: "/img/icon-button-1.svg",
  },
};
