import { ColorSectionComps } from ".";

export default {
  title: "Components/ColorSectionComps",
  component: ColorSectionComps,
  argTypes: {
    property1: {
      options: ["color-section-pt-2", "color-section-pt-1"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "color-section-pt-2",
  },
};
