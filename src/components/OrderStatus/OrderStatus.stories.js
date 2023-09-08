import { OrderStatus } from ".";

export default {
  title: "Components/OrderStatus",
  component: OrderStatus,
  argTypes: {
    property1: {
      options: ["NEW", "shipped", "ready-to-ship", "delivered", "cancelled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "NEW",
    className: {},
    overlapGroupClassName: {},
  },
};
