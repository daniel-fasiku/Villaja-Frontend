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
    className: {},
    frameClassName: {},
    text: "Full Name",
    text1: "Jane Jonah",
    text2: "Jake Smith",
  },
};
