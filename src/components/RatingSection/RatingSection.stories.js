import { RatingSection } from ".";

export default {
  title: "Components/RatingSection",
  component: RatingSection,
  argTypes: {
    property1: {
      options: ["default", "two-star", "three-star", "one-star", "four-star"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    propertyNoStarElementStarsStar: "/img/star-5-46.svg",
    propertyNoStarElementStarsImg: "/img/star-2-46.svg",
  },
};
