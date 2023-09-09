import { HomepageCategories } from ".";

export default {
  title: "Components/HomepageCategories",
  component: HomepageCategories,
  argTypes: {
    property: {
      options: [
        "phone-1",
        "computer-2",
        "accessories-1",
        "tablet-1",
        "accessories-3",
        "tablet-3",
        "tablet-2",
        "computer-1",
        "phones-2",
        "phone-3",
        "accessories-2",
        "computer-3",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "phone-1",
    className: {},
  },
};
