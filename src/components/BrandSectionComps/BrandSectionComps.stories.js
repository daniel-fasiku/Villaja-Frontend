import { BrandSectionComps } from ".";

export default {
  title: "Components/BrandSectionComps",
  component: BrandSectionComps,
  argTypes: {
    property1: {
      options: ["brand-section-pt-1", "variant-2", "variant-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "brand-section-pt-1",
  },
};
