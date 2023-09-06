import { CategoryCompFor } from ".";

export default {
  title: "Components/CategoryCompFor",
  component: CategoryCompFor,
  argTypes: {
    property1: {
      options: ["basic-phones", "default", "windows-phones", "ios-phones", "other-phones", "android-phones"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "basic-phones",
  },
};
