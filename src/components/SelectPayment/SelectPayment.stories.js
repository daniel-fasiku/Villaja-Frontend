import { SelectPayment } from ".";

export default {
  title: "Components/SelectPayment",
  component: SelectPayment,
  argTypes: {
    property1: {
      options: ["bank-transfer", "debit-card", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "bank-transfer",
    className: {},
    checkoutSelectionText: "Pay with Debit Card",
    checkoutSelectionText1: "Pay with Bank Transfer",
  },
};
