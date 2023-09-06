import { IconInputFields } from ".";

export default {
  title: "Components/IconInputFields",
  component: IconInputFields,
  argTypes: {
    state: {
      options: ["active", "entered", "default", "focus", "valid", "invalid", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    leadingIcon: true,
    state: "active",
    className: {},
    frameClassName: {},
    bxSearchClassName: {},
    bxSearch: "/img/bx-search-3.png",
    defaultClassName: {},
    text: "Jane Jonah",
  },
};
