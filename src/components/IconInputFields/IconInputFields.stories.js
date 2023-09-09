import { IconInputFields } from ".";

export default {
  title: "Components/IconInputFields",
  component: IconInputFields,
  argTypes: {
    state: {
      options: [
        "active-info",
        "active",
        "entered",
        "default",
        "focus",
        "valid",
        "invalid",
        "disabled-info",
        "disabled",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    leadingIcon: true,
    state: "active-info",
    frameClassName: {},
    text: "Jake Smith",
    text1: "Full Name",
  },
};
