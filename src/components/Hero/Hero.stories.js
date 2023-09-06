import { Hero } from ".";

export default {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    property1: {
      options: ["variant-1", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-1",
    className: {},
    biggerHeroPropertyPhonesult: "/img/bigger-hero-animation-1.svg",
  },
};
