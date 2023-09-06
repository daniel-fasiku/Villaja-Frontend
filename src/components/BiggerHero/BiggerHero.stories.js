import { BiggerHero } from ".";

export default {
  title: "Components/BiggerHero",
  component: BiggerHero,
  argTypes: {
    property1: {
      options: ["buy", "tablets", "laptops", "accessories", "phonesult"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "buy",
    propertyPhonesult: "/img/property-1-phonesult.svg",
  },
};
