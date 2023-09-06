import { InternalMemory } from ".";

export default {
  title: "Components/InternalMemory",
  component: InternalMemory,
  argTypes: {
    property1: {
      options: ["variant-2", "memory-section-pt-1"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
  },
};
