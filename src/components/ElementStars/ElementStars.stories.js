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
    star: "/img/star-1-14.svg",
    img: "/img/star-2-7.svg",
    star1: "/img/star-3-14.svg",
    star2: "/img/star-4-14.svg",
    star3: "/img/star-5-7.svg",
    className: {},
    starClassName: {},
    starClassNameOverride: {},
    imgClassName: {},
    imgClassNameOverride: {},
    starClassName1: {},
    star4: "/img/star-1-6.svg",
    star5: "/img/star-2-6.svg",
    star6: "/img/star-3-6.svg",
    star7: "/img/star-4-6.svg",
  },
};
