import {
  MOCK_CREATE_ORDER_RESPONSE,
  MOCK_GET_ORDER_RESPONSE,
} from "../../utils/test-data/order-details";
import { createOrder, getOrder } from "../thunks";
import reducer, { clearOrder, initialState } from "./order-details-slice";

describe("order-details-slice reducer", () => {
  it("should return default initial state with undefined state and empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should correctly reset state with clearOrder action", () => {
    const mockInitialState = {
      ...initialState,
      order: { number: 68454, name: "Галактический бургер" },
      isSuccess: true,
    };

    const state = reducer(mockInitialState, clearOrder());
    expect(state).toEqual(initialState);
  });

  describe("createOrder action", () => {
    it("should correctly update state with pending createOrder action", () => {
      const state = reducer(initialState, { type: createOrder.pending.type });
      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
      });
    });

    it("should correctly update state with fulfilled createOrder action", () => {
      const state = reducer(initialState, {
        type: createOrder.fulfilled.type,
        payload: MOCK_CREATE_ORDER_RESPONSE,
      });

      expect(state).toEqual({
        ...initialState,
        order: {
          number: MOCK_CREATE_ORDER_RESPONSE.order.number,
          name: MOCK_CREATE_ORDER_RESPONSE.name,
        },
        isRequest: false,
        isSuccess: true,
      });
    });

    it("should correctly update state with rejected createOrder action", () => {
      const state = reducer(initialState, { type: createOrder.rejected.type });
      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: false,
      });
    });
  });

  describe("getOrder action", () => {
    it("should correctly update state with pending getOrder action", () => {
      const state = reducer(initialState, { type: getOrder.pending.type });
      expect(state).toEqual({
        ...initialState,
        isRequest: true,
        isSuccess: false,
      });
    });

    it("should correctly update state with fulfilled createOrder action", () => {
      const state = reducer(initialState, {
        type: getOrder.fulfilled.type,
        payload: MOCK_GET_ORDER_RESPONSE,
      });

      expect(state).toEqual({
        ...initialState,
        orderCard: MOCK_GET_ORDER_RESPONSE.orders[0],
        isRequest: false,
        isSuccess: true,
      });
    });

    it("should correctly update state with rejected getOrder action", () => {
      const state = reducer(initialState, { type: getOrder.rejected.type });
      expect(state).toEqual({
        ...initialState,
        isRequest: false,
        isSuccess: false,
      });
    });
  });
});
