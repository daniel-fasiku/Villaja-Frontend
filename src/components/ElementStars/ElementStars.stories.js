import { ElementStars } from ".";

export default {
  title: "Components/ElementStars",
  component: ElementStars,
  argTypes: {
    property1: {
      options: [
        "static-default",
        "four-stars",
        "one-star",
        "dynamic-default",
        "five-stars",
        "review-with-no",
        "three-stars",
        "two-stars",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "static-default",
    star: "/img/star-2-18.svg",
    img: "/img/star-3-18.svg",
    className: {},
    star1: "/img/star-5-18.svg",
    star2: "/img/star-1-18.svg",
    star3: "/img/star-4-18.svg",
  },
};
