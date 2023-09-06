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
    image: "/img/image-4-7.png",
    iphoneProMaxClassName: {},
    divClassName: {},
    reviewClassName: {},
    elementStarsStar: "/img/star-4-14.svg",
    elementStarsImg: "/img/star-5-14.svg",
    elementStarsStar1: "/img/star-3-14.svg",
    elementStarsStar2: "/img/star-1-14.svg",
    elementStarsStar3: "/img/star-2-14.svg",
    buttonsPropertyDefaultClassName: {},
  },
};
