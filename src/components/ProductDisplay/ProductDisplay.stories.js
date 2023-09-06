import { ProductDisplay } from ".";

export default {
  title: "Components/ProductDisplay",
  component: ProductDisplay,
  argTypes: {
    property1: {
      options: [
        "active-catalog-display",
        "inactive-catalog-display",
        "default",
        "variant-5",
        "variant-3",
        "inactive-home-display",
        "in-cart-format",
        "active-home-display",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "active-catalog-display",
    className: {},
    imageClassName: {},
    iphoneProMaxClassName: {},
    divClassName: {},
    reviewClassName: {},
    elementStarsStar: "/img/star-3-18.svg",
    elementStarsImg: "/img/star-2-26.svg",
  },
};
