import { TGetOrderResponse, TOrderRespone } from "../../types/services-types";

export const MOCK_CREATE_ORDER_RESPONSE: TOrderRespone = {
  name: "Галактический бургер",
  order: { number: 68454 },
  success: true,
};

export const MOCK_GET_ORDER_RESPONSE: TGetOrderResponse = {
  success: true,
  orders: [
    {
      _id: "643d69a5c3f7b9001cfa093qq",
      name: "галактический бургер",
      ingredients: [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa093d",
      ],
      status: "done",
      createdAt: "2025-02-15T15:47:51.937Z",
      updatedAt: "2025-02-15T15:47:52.584Z",
      number: 68454,
    },
  ],
};
