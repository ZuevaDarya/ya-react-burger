import { STATUS } from "../../constants/order-status";
import { TFeedOrder } from "../../types/services-types";

const getOrdersByStatus = (orders: TFeedOrder[], status: keyof typeof STATUS) => {
  return orders
    .filter((order) => order.status === status)
    .map((order) => order.number);
};

export default getOrdersByStatus;
